<template>
  <div class="min-h-full">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <Header />
        </div>
      </div>
    </nav>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl tracking-tight font-bold text-gray-900">
          IP Address
        </h1>
      </div>
    </header>
    <Notification
      :show="notification.show"
      :title="notification.title"
      :message="notification.message"
      :type="notification.type"
      @close="notification.show = false"
    />
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form autocomplete="off" @submit.prevent="doSubmit">
              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-6 sm:col-span-6">
                  <label for="label" class="block text-sm font-medium text-gray-700">Label</label>
                  <input
                    id="label"
                    v-model="ips.label"
                    type="text"
                    name="label"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <label for="label" class="block text-sm font-medium text-gray-700">IP Address</label>
                  <input
                    id="label"
                    v-model="ips.ip"
                    type="text"
                    name="label"
                    autocomplete="off"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                </div>
              </div>
              <div class="flex justify-end mt-10">
                <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <pulse-loader v-if="loading" class="inline-flex" :btn-loading="loading" color="indigo" />
                  <template v-else>
                    Save
                  </template>
                </button>
              </div>
            </form>
          </div>
        </div>
      <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ips: {},
      loading: false,
      notification: {
        show: false,
        message: '',
        title: '',
        type: 'success'
      }
    }
  },
  fetch () {
    this.getIpById(this.$route.params.id)
  },
  methods: {
    async doSubmit () {
      try {
        this.loading = true
        await this.$axios.post('api/ip', this.ips)
        this.$router.push('/')
      } catch (err) {
        this.error = true
        this.notifiable({
          show: true,
          type: 'error',
          title: 'Sorry',
          message: err.response.data.message
        })
        setTimeout(() => { this.error = false }, 3000)
      } finally {
        this.loading = false
      }
    },
    notifiable (props) {
      this.notification = {
        show: true,
        title: props.title,
        message: props.message,
        type: props.type || 'success'
      }
      setTimeout(() => {
        this.notification.show = false
      }, 5000)
    }
  }
}
</script>
