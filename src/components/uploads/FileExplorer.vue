<template>
  <div id="FileExplorer">
    <div class="container-fluid p-0">
      <tabs>
        <tab name="Files" :selected="true">
          <div class="row">
            <div class="col-sm-4 col-md-3 col-lg-2" v-for="(item, index) in collection" :key="index">
              <div class="card card-sm">
                <div class="d-block">
                  <img :src="item.url" class="card-img-top object-cover" :alt="item.name" :height="150">
                </div>
              </div>
            </div>
          </div>
        </tab>
        <tab name="Upload">
          <FileUpload/>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import File from '@/models/File'
import FileUpload from '@/components/uploads/FileUpload'
export default {
  name: 'FileExplorer',
  components: {
    FileUpload
  },
  data () {
    return {
      collection: [],
      pagination: {}
    }
  },
  async mounted () {
    const resp = await File.paginate({
      query: File.queryBuilder({
        fields: { files: File.displayFields.join(',') }
      })
    })
    this.collection = resp.data
    this.pagination = resp.collection
  }
}
</script>

<style scoped>

</style>
