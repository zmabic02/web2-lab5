<template>
    <form @submit.prevent="handleSubmit" class="task-form">
      <div>
        <label for="title">Title:</label>
        <input
          v-model="localTitle"
          id="title"
          type="text"
          placeholder="Enter title"
        />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea
          v-model="localDescription"
          id="description"
          placeholder="Enter descritpion"
        ></textarea>
      </div>
      <button type="submit">Save</button>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </form>
  </template>
  
  <script>
  import { ref, watch } from "vue";
  
  export default {
    props: {
      task: {
        type: Object,
        default: null,
      },
      onSubmit: {
        type: Function,
        required: true,
      },
    },
    emits: ["submit-task"],
    setup(props, { emit }) {
        // lokalno stanje
        const localTitle = ref(props.task?.title || "");
        const localDescription = ref(props.task?.description || "");
        const errorMessage = ref("");
        const isEditing = ref(!!props.task);
  
        const handleSubmit = () => {
            if (!localTitle.value || !localDescription.value) {
                errorMessage.value = "Title and description are mandatory";
                return;
            }

            const taskData = {
                title: localTitle.value,
                description: localDescription.value,
            };

            if (props.task?.id) {
                taskData.id = props.task.id;
            }
            // emitiranje evenata iz komponente
            emit("submit-task", taskData);

            localTitle.value = "";
            localDescription.value = "";
            errorMessage.value = "";
        };

  
        watch(
            () => props.task,
                (newTask) => {
                    if (newTask) {
                        localTitle.value = newTask.title || "";
                        localDescription.value = newTask.description || "";
                    } else {
                    localTitle.value = "";
                    localDescription.value = "";
                    }
                }
        );
  
        return { localTitle, localDescription, handleSubmit, errorMessage, isEditing };
    },
    };
</script>
  
  <style scoped>
  .task-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 5%;
    margin-right: 5%;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  