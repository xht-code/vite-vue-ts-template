<script setup lang="ts">
import { useRequest } from '@/utils/request'
import { useCounter } from '@vueuse/core'

const { count, inc } = useCounter()
const handleIncrease = () => inc()

const { execute: handleRequest } = useRequest('/test', { immediate: false })
</script>

<template>
  <hello-world msg="Vite + Vue + Typescript" />
  <router-link to="/about" w:text="24px">about</router-link>
  <div w:bg="blue-100" w:py="20px">
    <div>Count: {{ count }}</div>
    <van-button type="primary" @click="handleIncrease">Increase</van-button>
    <van-button type="primary" @click="handleRequest">Request</van-button>
  </div>
</template>

<route lang="json5">
{
  meta: { title: 'Home' }
}
</route>
