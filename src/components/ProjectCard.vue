<template>
  <div>
    <router-link :to="{
      name: 'project',
      params: { id: project.id }
    }">
      <div
        :style="{
      'backgroundImage': `url(${require('@/assets/' + project.imageUrl)})`, 'backgroundSize': 'cover'
  }"
        class="text-yellow-400 h-20 md:h-36 p-2 rounded-xl font-extrabold cursor-pointer shadow"
      >
        <span class="title" @click.stop.prevent="handleEdit" v-if="!isEditing">{{ project.title }}</span>
        <input
          class="text-gray-800"
          type="text"
          v-model="project.title"
          @click.stop.prevent="()=>{}"
          @keyup.enter="handleEdit"
          v-else
          v-focus
        />
        <label class="ml-1 cursor-pointer" @click.stop.prevent="handleEdit">
          <font-awesome-icon icon="pen" size="xs" />
        </label>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "ProjectCard",
  data() {
    return {
      isEditing: false
    };
  },
  props: {
    project: {
      type: Object
    }
  },
  methods: {
    handleEdit() {
      this.isEditing = !this.isEditing;
    }
  }
};
</script>