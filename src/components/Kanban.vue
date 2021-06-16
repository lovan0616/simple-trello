<template>
  <div class="kanban bg-gray-100 p-2 m-3 min-w-4/5 lg:min-w-1/5 cursor-move rounded shadow">
    <!-- 看板中上層的標題顯示與標題編輯區 -->
    <div
      class="title inline-block"
      @click.stop.prevent="handleEdit"
      v-if="!isEditing"
    >{{ kanban.title }}</div>
    <input
      class="text-gray-800"
      type="text"
      v-model="kanban.title"
      @click.stop.prevent="()=>{}"
      @keyup.enter="handleEdit"
      v-else
      v-focus
    />
    <label class="ml-1 cursor-pointer" @click.stop.prevent="handleEdit">
      <font-awesome-icon icon="pen" size="xs" />
    </label>

    <!-- 看板中的可移動物件區 -->
    <draggable :list="kanban.taskList" group="tasks">
      <div
        class="task p-1 bg-white border-b border-gray-500 rounded shadow my-2"
        v-for="(item, index) in kanban.taskList"
        :key="item"
      >
        <router-link
          :to="{
        name: 'task',
        params: { id: kanban.id },
        query: { index: index }
      }"
          class="flex items-center"
        >
          {{item}}
          <font-awesome-icon
            icon="pen"
            size="xs"
            class="edit-task-icon ml-auto text-gray-400 cursor-pointer"
          />
        </router-link>
      </div>
    </draggable>

    <div
      v-if="isAddingCard"
      class="adding-card bg-white border-b border-gray-500 rounded shadow my-2"
    >
      <input type="text" placeholder="任務是什麼呢..." v-model="newTask" />
    </div>

    <!-- 看板底部的按鈕區 -->
    <div class="button-controler flex">
      <button
        class="flex-1 mt-3 p-1 rounded-sm bg-yellow-300 text-white font-extrabold c-btn"
        v-if="isAddingCard"
        @click.stop.prevent="addTask"
      >新增</button>
      <button
        class="flex-1 mt-3 p-1 rounded-sm bg-gray-100 text-gray-300 c-btn"
        @click.stop.prevent="toggleAddingCard"
      >
        <font-awesome-icon :icon="addingCardIcon" class="mr-1" />
        {{addingCardText}}
      </button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Kanban",
  components: {
    draggable
  },
  computed: {
    addingCardIcon() {
      return this.isAddingCard ? "times" : "plus";
    },
    addingCardText() {
      return this.isAddingCard ? "取消" : "新增卡片";
    }
  },
  props: {
    kanban: {
      type: Object
    }
  },
  data() {
    return {
      isEditing: false,
      isAddingCard: false,
      newTask: ""
    };
  },
  methods: {
    handleEdit() {
      this.isEditing = !this.isEditing;
    },
    toggleAddingCard() {
      this.isAddingCard = !this.isAddingCard;
    },
    addTask() {
      if (!this.newTask.trim()) return;
      console.log("add task");

      this.kanban.taskList = [...this.kanban.taskList, this.newTask];
      this.newTask = "";
      this.isAddingCard = false;
    }
  }
};
</script>

<style scoped>
.edit-task-icon {
  display: none;
}

.task:hover .edit-task-icon {
  display: inline;
}
</style>