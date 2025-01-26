<template>
  <div>
    <h1>To-Do List</h1>
    <!-- interpolacija -->
    <info-banner :message="message" :type="type"></info-banner>
    
    <!-- two-way binding -->
    <input
      v-model="filter"
      type="text"
      placeholder="Filter tasks"
      class="filter-input"
    />

    <div v-if="filteredTasks.length === 0">No tasks to show.</div>
    <div v-else>
      <TaskCard
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/taskStore";
import { onMounted, onUnmounted, computed, ref } from "vue";
import TaskCard from "../components/TaskCard.vue";
import InfoBanner from "../components/InfoBanner.vue";

export default {
  components: {
    TaskCard,
    InfoBanner,
  },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("");

    // lifecycle hook
    onMounted(() => {
      taskStore.fetchTasks();
    });
    onUnmounted(() => {
      filter.value = "";
    });

    const tasks = computed(() => taskStore.tasks);

    // computed properties
    const filteredTasks = computed(() => {
      return tasks.value.filter(
        (task) =>
          (task.title?.toLowerCase().includes(filter.value.toLowerCase()) || false) ||
          (task.description?.toLowerCase().includes(filter.value.toLowerCase()) || false)
      );
    });


    const deleteTask = (taskId) => {
      taskStore.deleteTask(taskId);
    };

    return {
      tasks,
      filter,
      filteredTasks,
      deleteTask,
      message: computed(() => taskStore.message),
      type: computed(() => taskStore.type),
    };
  },
};
</script>

<style scoped>
.filter-input {
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
  padding: 0;
}
</style>
