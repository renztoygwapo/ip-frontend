<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <!-- <div class="flex-1 flex justify-between sm:hidden">
      <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
      <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
    </div> -->
    <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">{{ meta.current_page }}</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{ meta.to }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{ meta.total }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a v-for="(page,index) in links" :key="`${index+page}`" href="#" :class="`bg-white ${(page.active) ? 'bg-green-400 border-green-600 text-gray-600' : 'border-gray-300 text-gray-500 hover:bg-gray-50'} relative items-center px-4 py-2 border text-sm font-medium`" @click.prevent="next(page.url)">
            <div v-html="page.label" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    meta: {
      type: Object,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  },
  methods: {
    next (url) {
      this.$emit('toggle', url)
    }
  }
})
</script>
