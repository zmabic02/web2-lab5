<template>
    <div>
      <h1>Edit task</h1>
      <!-- interpolacija -->
      <task-form :task="task" @submit-task="handleTaskSubmit"></task-form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import TaskForm from "../components/TaskForm.vue";
  import { useTaskStore } from "../stores/taskStore";
  import { useRouter, useRoute } from "vue-router";
  
  export default {
    components: {
      TaskForm,
    },
    setup() {
      const taskStore = useTaskStore();
      const router = useRouter();
      const route = useRoute();
  
      const taskId = route.params.id;
      const task = taskStore.tasks.find((t) => t.id === taskId);
  
      onMounted(async () => {
        const taskId = route.params.id;
        try {
            await taskStore.fetchTasks();
            task.value = taskStore.tasks.find((t) => t.id === taskId);

            if (!task.value) {
                router.push("/404");
            }
        } catch (error) {
            console.error("Error fetching task data:", error);
            router.push("/404");
        } finally {
            isLoading.value = false;
        }
    });

      const handleTaskSubmit = async (updatedTask) => {
        try {
          await taskStore.updateTask({ ...task, ...updatedTask });
          router.push("/home");
        } catch (error) {
          console.error("Error updating task:", error);
        }
      };
  
      return { task, handleTaskSubmit };
    },
  };
  </script>
  