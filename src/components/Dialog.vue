<template>
  <div v-if="display">
    <transition name="modal">
      <div class="modal modal-blur" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-full-width modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header" v-if="$slots.header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body p-0" v-if="$slots.body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer" v-if="$slots.footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    display: { type: Boolean, required: true, default: false }
  },
  watch: {
    display: function (val) {
      if (val) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    open () {
      this.addClass()
      this.$emit('update:display', true)
    },
    close () {
      this.removeClass()
      this.$emit('update:display', false)
    },
    addClass () {
      document.body.classList.add('modal-open')
    },
    removeClass () {
      document.body.classList.remove('modal-open')
    }
  }
}
</script>

<style scoped lang="scss">
  .modal {
    display: block;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-dialog {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
