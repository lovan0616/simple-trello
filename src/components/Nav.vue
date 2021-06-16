<template>
  <div class="nav-container">
    <!-- 手機版位的nav -->
    <ul class="lg:hidden w-screen h-20 flex items-stretch bg-yellow-300">
      <li
        v-for="item in navItems"
        :key="item.icon"
        class="cursor-pointer hover:bg-yellow-200 active:bg-yellow-300 flex-1"
      >
        <router-link :to="{ name: item.name }">
          <font-awesome-icon :key="item.icon" :icon="item.icon" class="mr-1" />
          {{item.title}}
        </router-link>
      </li>
    </ul>
    <!-- 桌機版位的nav -->
    <ul class="hidden lg:block w-52 h-screen flex flex-col py-6 bg-yellow-300">
      <li
        v-for="item in navItems"
        :key="item.icon"
        class="py-2 cursor-pointer hover:bg-yellow-200 active:bg-yellow-300 pl-5"
      >
        <router-link :to="{ name: item.name }">
          <font-awesome-icon :icon="item.icon" class="mr-1" />
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navItems: [
        {
          title: "看板",
          icon: "columns",
          name: "board"
        },
        {
          title: "卡片",
          icon: "check-square",
          name: "cards"
        },
        {
          title: "帳戶",
          icon: "user",
          name: "account"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav-container ul:nth-child(1) {
  line-height: 5rem;
  text-align: center;
}
</style>