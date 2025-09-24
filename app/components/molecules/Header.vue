<script setup lang="ts">
  const mobileMenuOpen = ref(false)
  const mobileCreateOpen = ref(false)
  const mobileResourcesOpen = ref(false)
</script>
<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">WishWeaver</h1>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <!-- Create Dropdown -->
          <UiDropdownMenu>
            <template #trigger>
              <UiButton
                variant="ghost"
                icon="lucide:chevron-down"
                icon-position="right"
              >
                Create
              </UiButton>
            </template>
            <UiDropdownMenuItem icon="lucide:calendar">
              <NuxtLink to="/">Occasions</NuxtLink>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem icon="lucide:eye">
              <NuxtLink to="/">See all</NuxtLink>
            </UiDropdownMenuItem>
          </UiDropdownMenu>

          <!-- Resources Dropdown -->
          <UiDropdownMenu>
            <template #trigger>
              <UiButton
                variant="ghost"
                icon="lucide:chevron-down"
                icon-position="right"
              >
                Resources
              </UiButton>
            </template>
            <UiDropdownMenuItem icon="lucide:book-open">
              <NuxtLink to="/">Resources</NuxtLink>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem icon="lucide:building">
              <NuxtLink to="/">Enterprise</NuxtLink>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem icon="lucide:heart">
              <NuxtLink to="/">Become a Gratitude Champion</NuxtLink>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem icon="lucide:calendar-days">
              <NuxtLink to="/">WishWeaver Calendar</NuxtLink>
            </UiDropdownMenuItem>
          </UiDropdownMenu>

          <!-- Simple Navigation Links -->
          <UiNavLink to="/features">Features</UiNavLink>
          <UiNavLink to="/how-it-works">How it works</UiNavLink>
          <UiNavLink to="/testimonials">Testimonials</UiNavLink>
          <UiNavLink to="/pricing">Pricing</UiNavLink>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden lg:flex items-center space-x-4">
          <UiButton variant="primary"> Weave a Group Card </UiButton>
          <UiButton variant="outline" class="hidden sm:inline-flex">
            Sign In
          </UiButton>
        </div>

        <!-- Mobile menu button -->
        <div
          class="md:hidden border border-gray-100 rounded-lg flex justify-end"
        >
          <UiButton
            variant="ghost"
            icon="lucide:menu"
            iconPosition="default"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
      <UiCollapsible v-model:open="mobileMenuOpen" class="md:hidden">
        <div class="border-t border-gray-200 py-4" v-if="mobileMenuOpen">
          <nav class="space-y-4 flex flex-col">
            <!-- Mobile Create Section (collapsible) -->
            <UiCollapsible v-model:open="mobileCreateOpen">
              <template #trigger>
                <UiButton
                  variant="ghost"
                  class="w-full !justify-between !px-3"
                  icon="lucide:chevron-down"
                >
                  Create
                </UiButton>
              </template>
              <div class="space-y-2 flex flex-col border-t border-gray-100">
                <UiNavLink to="/" variant="mobile">Occasions</UiNavLink>
                <UiNavLink to="/" variant="mobile">See all</UiNavLink>
              </div>
            </UiCollapsible>

            <!-- Mobile Resources Section (collapsible) -->
            <UiCollapsible v-model:open="mobileResourcesOpen">
              <template #trigger>
                <UiButton
                  variant="ghost"
                  class="w-full !justify-between !px-3"
                  icon="lucide:chevron-down"
                >
                  Resources
                </UiButton>
              </template>
              <div class="flex flex-col space-y-2">
                <UiNavLink to="/" variant="mobile">Resources</UiNavLink>
                <UiNavLink to="/" variant="mobile">Enterprise</UiNavLink>
                <UiNavLink to="/" variant="mobile">
                  Become a Gratitude Champion
                </UiNavLink>
                <UiNavLink to="/" variant="mobile">
                  WishWeaver Calendar
                </UiNavLink>
              </div>
            </UiCollapsible>

            <!-- Mobile Simple Links -->
            <UiNavLink to="/features" variant="mobile">Features</UiNavLink>
            <UiNavLink to="/how-it-works" variant="mobile">
              How it works
            </UiNavLink>
            <UiNavLink to="/testimonials" variant="mobile">
              Testimonials
            </UiNavLink>
            <UiNavLink to="/pricing" variant="mobile">Pricing</UiNavLink>

            <!-- Mobile CTA Buttons -->
            <div class="pt-4 space-y-2">
              <UiButton variant="outline" class="w-full"> Sign In </UiButton>
              <UiButton variant="primary" class="w-full">
                Weave a Group Card
              </UiButton>
            </div>
          </nav>
        </div>
      </UiCollapsible>
    </div>
  </header>
</template>
