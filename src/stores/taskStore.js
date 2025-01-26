import { defineStore } from "pinia";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

// pinia store
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    isLoading: false,
    message: "",
    type: '',
  }),
  actions: {
    // asinkroni dohvat podataka iz Firebase baze
    async fetchTasks() {
      this.isLoading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        this.tasks = querySnapshot.docs.map((doc) => {
          if (!doc.id) {
            console.error("Task has no ID: ", doc);
          }
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      } finally {
        this.isLoading = false;
      }
    },  
    async addTask(task) {
      try {
        const docRef = await addDoc(collection(db, "tasks"), task);
        const newTask = { ...task, id: docRef.id };
        this.tasks.push(newTask);
        this.setMessage(`Task "${newTask.title}" successfully added!`, "success");
      } catch (error) {
        console.error("Error adding task:", error);
        this.setMessage(`Error adding task "${task.title}"`, "error");
      }
    },    
    async updateTask(task) {
      if (!task.id) {
        console.error("Id needed to update.");
        this.setMessage("Invalid task ID!", "error");
        return;
      }
      try {
        const taskRef = doc(db, "tasks", task.id);
        await updateDoc(taskRef, task);
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = { ...this.tasks[index], ...task };
        }
        this.setMessage("Task successfully updated", "success");
      } catch (error) {
        console.error("Error updating task: ", error);
        this.setMessage(`Error updating task "${task.title}"`, "error");
      }
    }
    ,
    async deleteTask(id) {
      if (!id) {
        this.setMessage("Invalid ID.", "error");
        return;
      }
      try {
        await deleteDoc(doc(db, "tasks", id));
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.setMessage("Task successfully deleted", "success");
      } catch (error) {
        console.error("Error deleting task:", error);
        this.setMessage("Error deleting task");
        setTimeout(() => {
          this.clearMessage();
        }, 3000);
      }
    },
    setMessage(message, type) {
      this.message = message;
      this.type = type;
      setTimeout(() => {
        this.message = '';
        this.type = '';
      }, 10000);
    },
    clearMessage() {
      this.message = '';
      this.type = '';
    },    
  },
});
