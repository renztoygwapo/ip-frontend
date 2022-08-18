<template>
  <nav
    class="flex fixed z-10"
  >
    <div
      class="z-10 fixed inset-0 transition-opacity"
      @keydown.esc="closeDrawer"
    >
      <div
        class="absolute inset-0 bg-black opacity-50"
        tabindex="0"
        @click.prevent="closeDrawer"
      />
    </div>
    <aside
      class="transform top-0 right-0 bg-gray-100 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="`${isOpen ? 'translate-x-0' : 'translate-x-full'} ${widthClass}`"
    >
      <div class="px-4 py-8 bg-theme-700 flex justify-between">
        <h2
          class="text-2xl text-white font-medium rounded-l-md"
          v-html="title"
        />
        <div>
          <button
            type="button"
            class="bg-theme-700 rounded-md text-theme-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            @click.prevent="closeDrawer"
          >
            <span class="sr-only">Close panel</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <slot />
    </aside>
  </nav>
</template>

<script>
export default {
  props: {
    widthClass: {
      type: String,
      required: false,
      default: 'w-1/2 md:w-1/3'
    },
    title: {
      type: String,
      required: false,
      default: 'Drawer'
    },
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return {
      selectedMenu: '/home'
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeDrawer()
      }
    })
  },
  methods: {
    closeDrawer () {
      this.$emit('toggle', this.isOpen)
    }
  }
}
</script>
