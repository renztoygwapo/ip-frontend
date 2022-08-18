<template>
  <div class="min-h-full flex flex-col justify-center pb-12 pt-8 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-2 text-center text-xl font-light text-gray-700">
        Sign in to your account
      </h2>
    </div>
    <form
      class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      @submit.prevent="login"
    >
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div
          class="space-y-6"
        >
          <div>
            <div class="isolate -space-y-px rounded-md shadow-sm">
              <div class="relative border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="email" class="block text-xs font-medium text-gray-700">Username</label>
                <input id="email" v-model="form.email" type="text" name="username" class="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
              </div>
              <div class="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="password" class="block w-full text-xs font-medium text-gray-700">Password</label>
                <input id="password" v-model="form.password" type="password" name="password" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-500"
              :class="loading ? 'opacity-25 cursor-not-allowed' : 'text-white bg-theme-600 hover:bg-theme-700'"
              :disabled="loading || loading"
              @click.prevent="handleOtp"
            >
              <pulse-loader v-if="loading" class="inline-flex" :btn-loading="loading" color="indigo" />
              <template v-else>
                Submit
              </template>
            </button>
          </div>
        </div>
      </div>
    </form>
    <!-- Notification -->
    <Notification
      :show="notification.show"
      :title="notification.title"
      :message="notification.message"
      :type="notification.type"
      @close="notification.show = false"
    />
  </div>
</template>

<script>
export default {
  layout: 'login',
  data () {
    return {
      loading: false,
      error: false,
      form: {},
      notification: {
        show: false,
        message: '',
        title: '',
        type: 'success'
      },
      message: '',
      isValid: false,
      otp: null
    }
  },
  methods: {
    async login () {
      try {
        this.loading = true
        await this.$auth.loginWith('local', { data: this.form })
      } catch (err) {
        this.message = err.response.data.message
      } finally {
        this.loading = false
        this.notifiable({
          show: true,
          type: 'error',
          title: 'Sorry',
          message: this.message
        })
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
