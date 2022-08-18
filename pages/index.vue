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
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
              <div class="sm:flex-auto">
                <p class="mt-2 text-sm text-gray-700">
                  A list of all the IP Addresses.
                </p>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <nuxt-link to="/ip/new" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                  Add new Record
                </nuxt-link>
              </div>
            </div>
            <div class="mt-8 flex flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Label
                          </th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            IP Address
                          </th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="ip in ips" :key="ip.id">
                          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {{ ip.label }}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {{ ip.ip }}
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <nuxt-link :to="`ip/${ip.id}`">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </nuxt-link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
      ips: []
    }
  },
  fetch () {
    this.getIp()
  },
  methods: {
    async getIp () {
      try {
        this.loading = true
        const res = await this.$axios.get('api/ip')
        this.ips = res.data
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
    }
  }
}
</script>
