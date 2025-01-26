<template>
  <div>
    <h1>Add new task</h1>
    <!-- interpolacija -->
    <task-form @submit-task="handleTaskSubmit"></task-form>
  </div>
</template>

<script>
import TaskForm from "../components/TaskForm.vue";
import { useTaskStore } from "../stores/taskStore";
import { useRouter } from "vue-router";

export default {
  components: {
    TaskForm,
  },
  setup() {
    const taskStore = useTaskStore();
    const router = useRouter();

    // metoda
    const handleTaskSubmit = async (task) => {
      try {
        await taskStore.addTask(task);
        router.push("/home");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    };

    return { handleTaskSubmit };
  },
};
</script>

<!-- scoped style -->
<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
