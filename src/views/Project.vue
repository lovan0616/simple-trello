<template>
  <div class="project-container flex flex-col">
    <div id="project-header" class="w-full bg-yellow-300 p-2 pl-5">
      <button @click="addNewKanban" class="c-clickable">
        <font-awesome-icon icon="plus" class="mr-1" />新增列表
      </button>
    </div>
    <div id="kanban-panel" class="flex-1 overflow-scroll">
      <draggable :list="kanbanList" group="kanbans" class="flex items-start" handle=".kanban">
        <Kanban v-for="kanban in kanbanList" :key="kanban.id" :kanban="kanban" />
      </draggable>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import draggable from "vuedraggable";
import Kanban from "../components/Kanban"
export default {
  name: "Project",
  components: {
    draggable,
    Kanban
  },
  data() {
    return {
      kanbanList: [
        {
          id: uuidv4(),
          title: '新工作列',
          taskList: ["123", "456", "789"]
        },
        {
          id: uuidv4(),
          title: '新工作列2',
          taskList: ["abc", "efg", "hij"]
        },
        {
          id: uuidv4(),
          title: '新工作列3',
          taskList: ["doremi", "fasola", "sidore"]
        },
      ]
    };
  },
  methods: {
    addNewKanban() {
      this.kanbanList = [
        ...this.kanbanList,
        {
          id: uuidv4(),
          title: '新工作列',
          taskList: []
        }
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    const { id } = to.params;
    console.log(id);
    next();
  }
};
</script>