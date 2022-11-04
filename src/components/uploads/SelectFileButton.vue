<template>
  <div class="SelectFileButton">
    <a href="#" class="btn btn-secondary" @click="display = !display">
      <image-icon class="icon"/>
      Browse
    </a>
    <g-dialog :display.sync="display">
      <template #body>
        <FileExplorer/>
      </template>
      <template #footer>
        <button class="btn btn-secondary" @click="display = false">Close</button>
      </template>
    </g-dialog>
  </div>
</template>

<script>
import { ImageIcon, XCircleIcon } from 'vue-feather-icons'
import FileExplorer from '@/components/uploads/FileExplorer'

export default {
  name: 'SelectFileButton',
  components: {
    FileExplorer,
    XCircleIcon,
    ImageIcon
  },
  data () {
    return {
      display: false,
      selected: null
    }
  }
}
</script>

<style scoped>

</style>
