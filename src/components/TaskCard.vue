<template>
  <div class="task-card">
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
    <div class="task-actions">
      <button @click="editTask" class="edit-btn">Edit</button>
      <button @click="confirmDelete" class="delete-btn">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    confirmDelete() {
      if (confirm(`Delete "${this.task.title}?`)) {
        this.$emit("delete-task", this.task.id);
      }
    },
    editTask() {
      this.$router.push(`/edit-task/${this.task.id}`);
    },
  },
};
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
}

.task-card h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: #333;
}

.task-card p {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: #555;
}

.task-actions {
  text-align: right;
}

.delete-btn {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.edit-btn {
  background-color: lightblue;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.delete-btn:hover {
  background-color: #ff4b4b;
}
</style>
