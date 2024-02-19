<template>
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-secondary">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <router-link
                to="/"
                @click="sidebarOpen = false"
                class="flex-shrink-0 flex items-center px-4 py-4"
              >
                <div class="mt-1.5 ml-0.5 font-bold text-xl text-gray-200"></div>
              </router-link>
              <nav
                class="mt-2 flex-shrink-0 h-full divide-y divide-gray-400 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div class="px-2 space-y-1">
                  <a
                    v-for="item in navigation"
                    @click="sidebarOpen = false"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray -800 text-white'
                        : 'text-white hover:text-white hover:bg-gray-900',
                      'group flex items-center px-2 py-2 text-xs font-medium rounded-md'
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      class="mr-4 flex-shrink-0 h-4 w-4 text-gray-200"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-40 lg:flex-col lg:fixed lg:inset-y-0">
      <div class="flex flex-col flex-grow bg-secondary pb-4 overflow-y-auto">
        <router-link
          to="/"
          class="flex items-center justify-center mt-5 flex-shrink-0 border-b border-gray-200 lg:border-none py-2"
        >
          <h3 class="text-primary">Dashboard</h3>
        </router-link>
        <nav
          class="mt-2 flex-1 bg-secondary flex flex-col divide-y divide-gray-400 overflow-y-auto"
          aria-label="Sidebar"
        >
          <div class="space-y-1 flex justify-center items-center flex-col overflow-hidden">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current ? 'bg-primary text-secondary' : '',
                'group flex items-center px-2 py-1.5 text-xs leading-6 font-medium rounded-md'
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <div
                class="group flex justify-center items-center bg-primary p-2 rounded-full hover:rounded-md transition-all"
              >
                <component
                  :is="item.icon"
                  class="flex-shrink-0 h-[50px] w-[50px] text-secondary hover:text-secondary"
                  aria-hidden="true"
                />
              </div>
              <div
                class="absolute left-32 bg-primary text-secondary group-hover:opacity-100 p-2 px-4 w-28 text-center mt-2 opacity-0 rounded-md shadow-md duration-150 font-semibold"
              >
                {{ item.name }}
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>

    <div class="lg:pl-60 flex flex-col flex-1">
      <div
        class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none shadow-lg"
      >
        <button
          type="button"
          class="px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars4Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <!-- Search bar -->
        <div class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-auto lg:mx-auto lg:px-8">
          <div class="flex-1 flex"></div>
          <div class="ml-4 flex items-center md:ml-6">
            <router-link
              to="/support"
              class="bg-white p-1 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
            </router-link>
            <router-link
              to="/notifikasi"
              class="ml-3 bg-white p-1 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-5 w-5" aria-hidden="true" />
            </router-link>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="max-w-xs bg-white rounded-md flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                >
                  <UserCircleIcon
                    class="flex-shrink-0 ml-1 h-8 w-8 text-gray-400 lg:block"
                    aria-hidden="true"
                  />
                  <!-- <span class="ml-3 text-gray-700 text-xs font-medium lg:block"
                    ><span class="sr-only">Open user menu for </span>{{ auth?.username }}</span
                  > -->
                  <ChevronDownIcon
                    class="flex-shrink-0 ml-2 h-4 w-4 text-gray-400 lg:block"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#/profile"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-xs text-gray-700'
                      ]"
                      >Profile</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      @click="Logout()"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-xs text-gray-700'
                      ]"
                      >Logout</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex flex-col">
        <!-- Page header -->
        <div class="px-2 sm:px-8 pt-8 py-32">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import {
  BellIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
  Bars4Icon,
  CheckBadgeIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  UserCircleIcon,
  ChevronDownIcon,
  PrinterIcon,
  ArrowPathRoundedSquareIcon,
  BanknotesIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
  ArrowDownOnSquareStackIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/vue/24/outline'

import useAuth from '@/services/auth'

const { Logout, getAuth, auth } = useAuth()

getAuth()

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: RectangleGroupIcon,
    current: false
  },
  {
    name: 'Project',
    href: '/project',
    icon: CheckBadgeIcon,
    current: false
  },
  {
    name: 'Verifikasi User',
    href: '/verifikasi',
    icon: CheckBadgeIcon,
    current: false
  },
  {
    name: 'User',
    href: '/user',
    icon: BuildingStorefrontIcon,
    current: false
  },
  {
    name: 'Tools',
    href: '/tool',
    icon: AdjustmentsHorizontalIcon,
    current: false
  },
  {
    name: 'Pengaturan',
    href: '/pengaturan',
    icon: Cog8ToothIcon,
    current: false
  }
]

const sidebarOpen = ref(false)
</script>
