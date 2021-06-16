<template>
  <div class="board-container">
    <div id="board-header" class="bg-yellow-300 p-2 pl-5">
      <button @click="addNewProject" class="c-clickable"><font-awesome-icon icon="plus" class="mr-1" />新增專案</button>
    </div>
    
    <div id="project-panel" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-5">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />


      </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '../components/ProjectCard'

export default {
  name: 'Board',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [{
        id: uuidv4(),
        title: '新專案',
        imageUrl: 'default-1.jpg'
      }]
    }
  },
  methods: {
    addNewProject() {
      console.log('wwwww')
      const defaultPic = 'default-' + Math.floor(Math.random() * 7 + 1).toString() + '.jpg'

      this.projects = [
        ...this.projects,
        {
          id: uuidv4(),
          title: '新專案',
          imageUrl: defaultPic
        }
      ]
    }
  }
}
</script>