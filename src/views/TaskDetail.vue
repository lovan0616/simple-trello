<template>
  <div class="task-detail">
    <!-- 頁面header -->
    <div id="task-header" class="w-full bg-yellow-300 p-2 pl-5">
      <button @click="$router.back()" class="c-clickable">
        <font-awesome-icon icon="arrow-left" class="mr-1" />返回
      </button>
    </div>

    <!-- 頁面content -->
    
  </div>
</template>

<script>
export default {
  name: "TaskDetail",
  data() {
    return {
      kanbanId: "",
      title: "",
      description: "",
      date: ""
    };
  }
};
</script>