---
id: pinia
slug: /pinia
title: Pinia
date: 2020-10-23
authors: littletaoist
tags: [vue, pinia]
keywords: [vue, pinia]
---

<!-- truncate -->

> 官方文档：[Introduction | Pinia (vuejs.org)](https://pinia.vuejs.org/introduction.html)

## 安装

```sh
yarn add pinia
# 或者使用 npm
npm install pinia\
# 或者使用 pnpm
pnpm install pinia
```

## 创建 Store

在 src/store 中创建 index.ts，并导出 store

```typescript title="src/store/index.ts"
import { createPinia } from 'pinia'

const store = createPinia()

export default store
```

在 main.ts 中引入并使用

```typescript title="main.ts"
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(store)
```

## Setup Store

```typescript title="store/test.ts"

export const useCounterStore = defineStore('testStore', () => {
  const count = ref<number>(0)
  const getCount = computed(() => {
     count.value++
     return count.value
  });
  function setCount(val:number) {
    count.value=val
  }

  return { count, increment }
})
```

在 Setup Store 中：

- ref() 就是 state 属性
- computed() 就是 getters
- function() 就是 actions

## 使用

### 获取 state

```vue
import { ref } from "vue";
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/store/test';

// composition API模式
const userStore = useCounterStore();
// 确保解构确保后的state具有响应式，要使用storeToRefs方法
const { count } = storeToRefs(userStore);
const { setCount } = userStore;

const count = ref(computed(() => userStore.count))
```



### 修改 state

可以直接使用`userStore.count = ` 来进行修改，但不建议，而是使用 actions 来修改，在上面已经定义一个 setCount 方法用来修改 state

```typescript
userStore.setCount(7)
```

## 数据持久化

安装

```sh
npm i pinia-plugin-persistedstate
```

使用

```typescript {2,5}
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersist)

export default store
```

在对应的 store 中开启 persist 即可，**默认情况下数据是存放在 sessionStorage(会话存储)，并以 store 中的 id 作为 key**

```typescript {8-10}
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => {
    return {
      name: 'taoist',
    }
  },
  persist: {
    enabled: true,
      strategies: [
    {
        // 自定义key
        key: 'my_user',
        // 自定义存储方式，默认sessionStorage
        storage: localStorage,
        //指定 state 持久化
        paths: ['name']
    }
  },
})
```

