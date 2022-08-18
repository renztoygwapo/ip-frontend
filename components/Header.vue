<template>
  <div class="flex items-center">
    <div class="flex-shrink-0 text-white">
      IP Management
    </div>
    <div class="block">
      <div class="ml-10 flex items-baseline space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
          Dashboard
        </nuxt-link>

        <nuxt-link to="/log" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Activity Logs
        </nuxt-link>
        <button
          id="menu-item-3"
          type="button"
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          role="menuitem"
          tabindex="-1"
          @click="$auth.logout()"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
