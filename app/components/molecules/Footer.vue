<template>
  <footer class="bg-gray-50 border-t border-primary">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">
        <!-- Brand / About -->
        <div class="space-y-2.5">
          <NuxtLink to="/" class="inline-flex items-center">
            <span class="text-2xl font-bold text-gray-900">WishWeaver</span>
          </NuxtLink>
          <div class="mt-4 flex items-center gap-3">
            <UiIconButton
              ariaLabel="X (Twitter)"
              icon="lucide:twitter"
              size="sm"
            />
            <UiIconButton
              ariaLabel="Instagram"
              icon="lucide:instagram"
              size="sm"
            />
            <UiIconButton
              ariaLabel="LinkedIn"
              icon="lucide:linkedin"
              size="sm"
            />
            <UiIconButton
              ariaLabel="Facebook"
              icon="lucide:facebook"
              size="sm"
            />
          </div>
          <p class="text-xs">
            © {{ new Date().getFullYear() }} WishWeaver. All rights reserved.
          </p>
        </div>

        <div class="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Create -->
          <div>
            <h2
              class="text-sm font-semibold text-gray-900 tracking-wider uppercase"
            >
              Create
            </h2>
            <ul class="mt-4 space-y-2 text-sm">
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Occasions</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >See all</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h2
              class="text-sm font-semibold text-gray-900 tracking-wider uppercase"
            >
              Policies
            </h2>
            <ul class="mt-4 space-y-2 text-sm">
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Terms and Condition</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Cookie Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Acceptable Use Policy</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h2
              class="text-sm font-semibold text-gray-900 tracking-wider uppercase"
            >
              Resources
            </h2>
            <ul class="mt-4 space-y-2 text-sm">
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Resources</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Enterprise</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >Become a Gratitude Champion</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="text-gray-600 hover:text-gray-900" to="/"
                  >WishWeaver Calendar</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h2
              class="text-sm font-semibold text-gray-900 tracking-wider uppercase"
            >
              Company
            </h2>
            <ul class="mt-4 space-y-2 text-sm">
              <li>
                <NuxtLink
                  class="text-gray-600 hover:text-gray-900"
                  to="/features"
                  >Features</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="text-gray-600 hover:text-gray-900"
                  to="/how-it-works"
                  >How it works</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="text-gray-600 hover:text-gray-900"
                  to="/testimonials"
                  >Testimonials</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="text-gray-600 hover:text-gray-900"
                  to="/pricing"
                  >Pricing</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
