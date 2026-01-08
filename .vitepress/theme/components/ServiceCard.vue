<template>
  <a :href="link" class="service-card" :class="{ 'no-link': !link }">
    <span class="service-icon" v-if="icon" v-html="icon"></span>
    <img v-else-if="iconSrc" :src="iconSrc" :alt="name" class="service-icon-img" />
    <span v-else class="service-icon-placeholder">{{ name.charAt(0) }}</span>
    <span class="service-name">{{ name }}</span>
  </a>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconSrc: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.service-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.25s ease;
  cursor: pointer;
}

.service-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.service-card.no-link {
  cursor: default;
}

.service-card.no-link:hover {
  transform: none;
  box-shadow: none;
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 24px;
  flex-shrink: 0;
}

.service-icon :deep(svg) {
  width: 28px;
  height: 28px;
}

.service-icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 6px;
}

.service-icon-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  flex-shrink: 0;
}

.service-name {
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
