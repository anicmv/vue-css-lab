# Vue CSS Lab

一个基于 **Vue 3 + Vite** 的 CSS 小实验项目。
每个实验都是一个独立页面，通过首页卡片快速进入，适合练习动画、布局、交互和组件样式。

## 技术栈

- Vue 3（`<script setup>`）
- Vue Router
- Vite
- 原生 CSS（按页面分离样式）

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```text
src/
├─ components/
│  └─ BackHome.vue           # 返回首页按钮
├─ router/
│  └─ index.js               # 路由配置 + 实验页面清单
├─ styles/
│  └─ reset.css
├─ views/
│  ├─ Home.vue               # 首页（实验导航）
│  ├─ ExpandingCardsView.vue # 实验 01：可扩展卡片
│  └─ ProgressSteps.vue      # 实验 02：进度步骤
├─ App.vue
└─ main.js
```

## 已有实验

1. 可扩展卡片（Expanding Cards）  
   点击卡片后，选中卡片横向展开并显示标题。
2. 进度步骤（Progress Steps）  
   点击 `Next/Prev` 按钮切换步骤，并同步更新进度条宽度。

## 灵感来源

- [Hub-yang/50projects-vue3](https://github.com/Hub-yang/50projects-vue3)
- [bradtraversy/50projects50days](https://github.com/bradtraversy/50projects50days)

本项目在练习形式和实验主题上参考了以上仓库，并基于 Vue 3 进行实现与扩展。

## 如何新增一个 CSS 实验

1. 在 `src/views/` 新建页面，例如：`MyDemo.vue`。
2. 在 `src/router/index.js` 的 `pages` 数组新增一项：

```js
{
  path: '/mydemo',
  name: 'MyDemo',
  title: '我的实验',
  component: () => import('../views/MyDemo.vue')
}
```

3. 启动开发环境后，首页会自动显示新卡片入口（基于 `pages` 渲染）。

## 建议

- 每个实验保持“单页面 + scoped 样式”，避免互相污染。
- 实验样式复杂时，可按实验拆分 `views/xxx.css` 提升可维护性。
- 提交前建议执行 `npm run build` 确认可正常打包。

## License

[MIT](./LICENSE)
