<template>
  <v-app-bar
    id="the-navbar"
    class="align-stretch px-4"
    :collapse="collapsed"
    density="compact"
  >
    <v-btn-group divided tile>
      <v-btn
        tile
        :to="localePath('/')"
      >
        {{ $t('Welcome') }}
      </v-btn>
      <v-btn
        style="color: rgba(var(--v-theme-on-surface))"
        :to="localePath('home')"
      >
        {{ $t('Home') }}
      </v-btn>
      <v-btn
        style="color: rgba(var(--v-theme-on-surface))"
        :to="localePath('about')"
      >
        {{ $t('About') }}
      </v-btn>
    </v-btn-group>

    <v-spacer />

    <div class="px-4">
      <div class="mx-n4 d-flex">
        <v-select
          class="d-flex align-center"
          density="compact"
          hide-details
          :items="locales"
          :min-width="80"
          :model-value="locale"
          tile
          variant="solo"
          @update:model-value="setLocale($event)"
        />

        <v-divider vertical />

        <v-btn
          icon="mdi-theme-light-dark"
          tile
          @click="toggleTheme"
        />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const locales = ['pl', 'en', 'ru', 'ua', 'de']

const theme = useTheme()
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const collapsed = ref()
</script>

<style lang="scss">
#the-navbar {
  .v-toolbar__content {
    //align-items: stretch;
    //align-content: stretch;
  }

  .v-toolbar-title__placeholder {
  }
}
</style>
