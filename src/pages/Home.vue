<script setup lang="ts">
import Vue from 'vue'

const yearsSinceDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
}

const about = {
  name: 'Guilherme',
  role: 'Software Engineer',
  since: yearsSinceDate(new Date(2014, 8, 18)),
  from: 'Brazil',
  flag: '🇧🇷',
  currentJob: {
    name: 'ProjectMark',
    url: 'https://projectmark.com',
    role: 'Frontend Engineer',
  },
}
</script>

<template>
  <div class="grid min-h-screen place-items-center p-6">
    <div class="flex flex-col space-y-3">
      <h1 class="text-5xl">Hi there, I'm <span class="text-animated from-indigo-500 via-pink-500 to-indigo-500 font-medium">{{ about.name }}</span> 👋🏻!</h1>
      <h2 class="text-3xl">A {{ about.role }} from <span class="text-animated from-lime-500 via-yellow-500 to-lime-500">{{ about.from }}</span> {{ about.flag }} with {{ about.since }} years of experience</h2>
      <p class="text-2xl">Currently working at <a :href="about.currentJob.url" target="_blank" rel="noopener noreferrer"><span class="text-animated from-blue-700 via-cyan-500 to-blue-700">{{ about.currentJob.name }}</span></a> as {{ about.currentJob.role }}</p>
      <div class="flex space-x-6 pt-2 text-2xl">
        <a href="mailto:devguih@gmail.com" target="_blank" rel="noopener noreferrer" title="Send an email">
          <BIconEnvelope />
        </a>
        <a href="https://github.com/devguih" target="_blank" rel="noopener noreferrer" title="Github">
          <BIconGithub />
        </a>
        <a href="https://twitter.com/devguih" target="_blank" rel="noopener noreferrer" title="Twitter">
          <BIconTwitter />
        </a>
        <a href="https://instagram.com/devguih" target="_blank" rel="noopener noreferrer" title="Instagram">
          <BIconInstagram />
        </a>
        <a href="https://linkedin.com/in/devguih" target="_blank" rel="noopener noreferrer" title="Linkedin">
          <BIconLinkedin />
        </a>
        <a href="https://twitch.com/devguih" target="_blank" rel="noopener noreferrer" title="Twitch">
          <BIconTwitch />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.text-animated {
  @apply bg-gradient-to-r animate-move-bg bg-[length:400%] bg-clip-text text-transparent;
}
</style>
