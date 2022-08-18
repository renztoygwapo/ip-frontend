<template>
  <div class="min-h-full">
    <Notification
      :show="notification.show"
      :title="notification.title"
      :message="notification.message"
      :type="notification.type"
      @close="notification.show = false"
    />
    <NavigationDrawer />
    <Nuxt />
  </div>
</template>

<script>
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import Notification from '@/components/Notification.vue'

export default {
  components: {
    NavigationDrawer,
    Notification
  },
  data () {
    return {
      notification: {
        show: false,
        message: '',
        title: '',
        type: 'success'
      },
      walletBalance: -1
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'h-full'
      },
      htmlAttrs: {
        class: 'h-full bg-gray-100'
      }
    }
  },
  mounted () {
    this.$root.$on('notice', (props) => {
      this.notification = {
        show: true,
        title: props.title,
        message: props.message,
        type: props.type || 'success'
      }
      setTimeout(() => {
        this.notification.show = false
      }, 6000)
    })
  }
}
</script>
