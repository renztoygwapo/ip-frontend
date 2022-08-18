<template>
  <div v-show="showGameForm" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay, show/hide based on slide-over state. -->
      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
        <div class="fixed inset-y-0 pl-16 max-w-full right-0 flex">
          <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
          <div class="w-screen max-w-md">
            <ValidationObserver ref="game_form">
              <form class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl" @submit.prevent="newGame">
                <div class="flex-1 h-0 overflow-y-auto">
                  <div class="py-6 px-4 bg-theme-700 sm:px-6">
                    <div class="flex items-center justify-between">
                      <h2 id="slide-over-title" class="text-lg font-medium text-white">
                        {{ title }}
                      </h2>
                      <div class="ml-3 h-7 flex items-center">
                        <button type="button" class="bg-theme-700 rounded-md text-theme-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="close">
                          <span class="sr-only">Close panel</span>
                          <!-- Heroicon name: outline/x -->
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-col justify-between">
                    <div class="px-4 divide-gray-200 sm:px-6">
                      <div class="my-2">
                        <label for="game" class="block text-sm font-medium text-gray-900">
                          Game
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required"
                            class="required"
                            :bails="false"
                          >
                            <input
                              id="game"
                              v-model="form.name"
                              :class="errors[0] ? 'border-red-400' : 'border-gray-300'"
                              autofocus="true"
                              type="text"
                              name="game"
                              class="block w-full shadow-sm sm:text-sm focus:ring-theme-500 focus:border-theme-500 border-gray-300 rounded-md"
                            >
                            <span class="text-sm text-red-500">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="my-2">
                        <label for="code" class="block text-sm font-medium text-gray-900">
                          Code
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required"
                            class="required"
                            :bails="false"
                          >
                            <input
                              id="code"
                              v-model="form.code"
                              :class="errors[0] ? 'border-red-400' : 'border-gray-300'"
                              type="text"
                              name="code"
                              class="block w-full shadow-sm sm:text-sm focus:ring-theme-500 focus:border-theme-500 rounded-md"
                            >
                            <span class="text-sm text-red-500">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="my-2">
                        <label for="funding" class="block text-sm font-medium text-gray-900">
                          Funding
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required"
                            class="required"
                            :bails="false"
                          >
                            <input
                              id="funding"
                              v-model="form.funding"
                              :class="errors[0] ? 'border-red-400' : 'border-gray-300'"
                              type="number"
                              name="funding"
                              class="block w-full shadow-sm sm:text-sm focus:ring-theme-500 focus:border-theme-500 rounded-md"
                            >
                            <span class="text-sm text-red-500">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="my-2">
                        <label for="win" class="block text-sm font-medium text-gray-900">
                          Win Amount
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required"
                            class="required"
                            :bails="false"
                          >
                            <input
                              id="win"
                              v-model="form.win_amount"
                              :class="errors[0] ? 'border-red-400' : 'border-gray-300'"
                              type="number"
                              name="win"
                              class="block w-full shadow-sm sm:text-sm focus:ring-theme-500 focus:border-theme-500 rounded-md"
                            >
                            <span class="text-sm text-red-500">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="my-2">
                        <label for="win" class="block text-sm font-medium text-gray-900">
                          Type
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required"
                            class="required"
                            :bails="false"
                          >
                            <select id="location" v-model="form.type" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                              <option value="1">
                                National
                              </option>
                              <option value="0">
                                Local
                              </option>
                            </select>
                            <span class="text-sm text-red-500">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="my-2">
                        <label for="balls" class="block text-sm font-medium text-gray-900">
                          Payout (Percentage %)
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required"
                            class="required"
                            :bails="false"
                          >
                            <input
                              id="balls"
                              v-model="form.payout"
                              :class="errors[0] ? 'border-red-400' : 'border-gray-300'"
                              type="number"
                              name="balls"
                              class="block w-full shadow-sm sm:text-sm focus:ring-theme-500 focus:border-theme-500 rounded-md"
                            >
                            <span class="text-sm text-red-500">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="my-2">
                        <label for="balls" class="block text-sm font-medium text-gray-900">
                          Number of Balls (Game Balls)
                        </label>
                        <div class="mt-1">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required"
                            class="required"
                            :bails="false"
                          >
                            <input
                              id="balls"
                              v-model="form.balls"
                              :class="errors[0] ? 'border-red-400' : 'border-gray-300'"
                              type="number"
                              name="balls"
                              class="block w-full shadow-sm sm:text-sm focus:ring-theme-500 focus:border-theme-500 rounded-md"
                            >
                            <span class="text-sm text-red-500">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                  <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="close">
                    Cancel
                  </button>
                  <button type="submit" class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-theme-600 hover:bg-theme-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-500">
                    Save
                  </button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
    <Notification :show="notif" :message="message" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Notification from '@/components/Notification.vue'
export default {
  components: {
    Notification
  },
  props: {
    title: {
      type: String,
      default: 'New Title'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      closeState: false,
      form: {
        name: '',
        code: '',
        type: 0,
        win_amount: '',
        funding: '',
        payout: 0,
        balls: 2
      },
      message: '',
      notif: false
    }
  },
  watch: {
    show () {
      this.$store.commit('setGameForm', true)
    }
  },
  computed: {
    ...mapGetters({
      showGameForm: 'showGameForm'
    })
  },
  methods: {
    newGame () {
      this.$refs.game_form.validate()
        .then(async (valid) => {
          if (valid) {
            try {
              this.loading = true
              await this.$axios.post('api/game', this.form)
              this.close()
            } catch (err) {
              this.notif = true
              this.message = JSON.stringify(err.response.data.errors)
              setTimeout(() => { this.error = false }, 5000)
            } finally {
              this.loading = false
            }
          }
        })
    },
    close () {
      this.$store.commit('setGameForm', false)
    }
  }
}
</script>
