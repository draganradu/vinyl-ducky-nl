<script setup lang="ts">
import { ref } from 'vue';
import Card from "../../components/scaffolding/Card.vue"
import { useRouter } from 'vue-router'

// Data ---------------------------
const router = useRouter();
const sitemapData = ref("")

// Methods -------------------------
const generateSitemap = () => {
  const temp: any = []
  router.options.routes.forEach((e) => {
    const localTemp = []
    const time = new Date()
    const formatedTime = time.toISOString().split('T')[0]
    localTemp.push(`    <loc>https://vinylducky.nl${e.path}</loc>`)
    localTemp.push(`    <lastmod>${formatedTime}</lastmod>`)
    localTemp.push(`    <changefreq>weekly</changefreq>`)
    temp.push(`  <url>\r\n${localTemp.join('\r\n')}\r\n  </url>\r\n`)
  })

  sitemapData.value = `<?xml version="1.0" encoding="UTF-8"?>\r\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\r\n${temp.join("")}</urlset>`
  return
}
</script>

<template>
  <Card class="col">
    <span @click="generateSitemap">generateSitemap</span>
    <pre v-if="sitemapData.length" class="mt-5">{{ sitemapData }}</pre>
  </Card>
</template>