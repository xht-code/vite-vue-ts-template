<h1 align="center">Vite + Vue 3 + TypeScript</h1>

<p align="center">开箱即用，快速搭建 Vue3 移动端项目</p>

<p align="center">
  <img src="https://img.shields.io/github/license/xht-code/vite-vue-ts-template" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/xht-code/vite-vue-ts-template" alt="version" />
  <img src="https://img.shields.io/github/repo-size/xht-code/vite-vue-ts-template" alt="repo-size" />
  <img src="https://img.shields.io/github/languages/top/xht-code/vite-vue-ts-template" alt="languages" />
  <img src="https://img.shields.io/github/issues-closed/xht-code/vite-vue-ts-template" alt="issues" />
</p>

## 介绍

本项目为 `Vue3` 移动端模板。

模板集成：`Vite` + `Vue 3` + `Vue Router` + `VueUse` + `Vant` + `Axios` + `TypeScript` + `Windi CSS` + `ESLint` + `Prettier`

## 安装

> 推荐使用 `pnpm`

```shell
# 克隆项目
git clone https://github.com/xht-code/vite-vue-ts-template.git

# 进入项目目录
cd vite-vue-ts-template

# 安装依赖
pnpm i

# 启动项目
pnpm dev
```

## 特性

### 自动生成路由

只需在 `views` 目录下新增 `.vue` 文件，即可按目录生成路由，而 `components` 目录下会自动忽略。

**另可通过 `route` 标签自定义页面 `meta` 等属性。**

```html
<route lang="json5"> { meta: { title: 'Home' } } </route>
```

### 组件自动引入

不需要写`import`，直接调用即可。

```html
<van-button type="primary">Button</van-button>
```

### 支持 TSX

编写页面更灵活。

```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  render(props: Record<string, any>) {
    return <div {...props}>TSX</div>
  }
})
```

### 封装 useRequest

基于 `useAxios` 封装了 `useRequest`，支持 `axios` 配置的拦截器等。

```js
import { useRequest } from '@/utils/request'

// 直接发起 GET 请求
const { data } = useRequest('/api1')

// 延迟发起 POST 请求
const { execute, data } = useRequest(
  {
    method: 'POST',
    url: '/test2'
  },
  { immediate: false }
)
```

详细可查阅文档 [useAxios]('https://vueuse.org/integrations/useaxios/')

## 致谢

感谢您的阅读，若有问题可提 [issues]('https://github.com/xht-code/vite-vue-ts-template/issues')，也欢迎各位 PR。

Enjoy coding~
