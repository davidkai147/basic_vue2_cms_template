<template>
  <div class="card border-0">
    <ul class="nav nav-tabs nav-tabs-alt">
      <li class="nav-item" v-for="(tab,index) in tabs" :key="index">
        <a class="nav-link" :class="{ 'active': tab.isActive }" @click="selectTab(tab)">{{ tab.name }}</a>
      </li>
    </ul>
    <div class="card-body min-h-60">
      <div class="tab-content">
        <div class="tab-pane active show">
          <slot v-if="$slots.default" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-link {
    border-radius: 0;
  }
  .min-h-60 {
    min-height: 60vh !important;
  }
</style>
