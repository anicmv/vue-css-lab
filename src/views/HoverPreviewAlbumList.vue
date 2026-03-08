<template>
  <!-- 整个页面容器：背景图会随 hover 变化 -->
  <div class="page-bg" :style="{ backgroundImage: `url('${currentBg}')` }">
    <!-- 半透明列表卡片 -->
    <div class="list-card">
      <table class="file-table">
        <thead>
        <tr>
          <th>上传时间</th>
          <th>文件名</th>
          <th>相册</th>
          <th>大小</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in files" :key="item.id">
          <td>{{ item.uploadTime }}</td>
          <td
              class="filename-cell"
              @mouseenter="onNameEnter(item)"
              @mouseleave="onNameLeave"
          >
            <span class="filename-text">{{ item.fileName }}</span>
            <div v-if="hoveredId === item.id" class="preview-box">
              <img :src="item.previewUrl" :alt="item.fileName" />
            </div>
          </td>
          <td>{{ item.album }}</td>
          <td>{{ item.size }}</td>
        </tr>
        </tbody>
      </table>

      <p v-if="files.length === 0" class="empty-tip">
        未检测到图片，请把文件放到：
        <code>src/assets/imgs/MultiColumnWaterfall/</code>
      </p>
    </div>
  </div>
</template>

<script setup>
// 引入 Vue 的 ref，用于创建响应式变量
import { ref } from 'vue'

// 使用 import.meta.glob 一次性读取本地目录中的图片资源（Vite 语法）
const imageModules = import.meta.glob(
    // 指定要扫描的目录与文件类型
    '/src/assets/imgs/MultiColumnWaterfall/*.{png,jpg,jpeg,webp,gif}',
    {
      // eager=true 表示构建时立即导入，而不是懒加载函数
      eager: true,
      // import='default' 表示只拿到每个模块的默认导出（即图片 URL）
      import: 'default',
    }
)

// 把导入结果对象转换成数组，得到所有图片 URL
const localImages = Object.values(imageModules)

// 记录当前鼠标悬停的行 id，初始为 null（无悬停）
const hoveredId = ref(null)

// 默认背景图使用第一张本地图片；如果目录为空则回退为空字符串
const defaultBg = localImages[0] || ''

// 当前页面背景图，初始显示默认背景图
const currentBg = ref(defaultBg)

// 根据本地图片数组构造表格数据（演示数据）
const files = ref(
    // 遍历每一张图片生成一条记录
    localImages.map((img, index) => {
      // 从图片 URL 中提取文件名（取最后一段路径）
      const rawName = decodeURIComponent(img.split('/').pop() || `image_${index + 1}.png`)
      // 返回一条列表记录对象
      return {
        // 唯一 id
        id: index + 1,
        // 模拟上传时间（可改成接口字段）
        uploadTime: `2026-03-${String((index % 9) + 1).padStart(2, '0')} 10:12:33`,
        // 文件名
        fileName: rawName,
        // 相册名
        album: 'MultiColumnWaterfall',
        // 文件大小（本地静态图不方便直接拿，先占位）
        size: '1kb',
        // 预览图地址
        previewUrl: img,
      }
    })
)

// 鼠标进入文件名单元格：设置悬停 id，并切换整页背景图
function onNameEnter(item) {
  // 记录当前悬停行
  hoveredId.value = item.id
  // 将页面背景切换为当前行图片
  currentBg.value = item.previewUrl
}

// 鼠标离开文件名单元格：清除悬停，并恢复默认背景图
function onNameLeave() {
  // 清空当前悬停行
  hoveredId.value = null
  // 页面背景恢复默认图
  currentBg.value = defaultBg
}
</script>

<style scoped>
/* 页面根容器样式 */
.page-bg {
  /* 让页面最小高度占满整个视口 */
  min-height: 100vh;
  /* 页面内边距：上下 40px，左右 24px */
  padding: 40px 24px;
  /* 让 padding 计入元素总宽高 */
  box-sizing: border-box;
  /* 背景图铺满容器（保持比例，可能裁切） */
  background-size: cover;
  /* 背景图居中显示 */
  background-position: center;
  /* 背景图不重复平铺 */
  background-repeat: no-repeat;
  /* 背景图固定，滚动时产生视差感 */
  background-attachment: fixed;
  /* 背景图切换时做轻微过渡（兼容性有限） */
  transition: background-image 0.25s ease-in-out;
}

/* 半透明卡片容器样式 */
.list-card {
  /* 最大宽度限制，避免超宽影响阅读 */
  max-width: 980px;
  /* 居中显示 */
  margin: 0 auto;
  /* 卡片内边距 */
  padding: 16px;
  /* 卡片圆角 */
  border-radius: 12px;
  /* 半透明深色背景 */
  background: rgba(15, 23, 42, 0.45);
  /* 毛玻璃模糊效果 */
  backdrop-filter: blur(6px);
  /* Safari 毛玻璃兼容写法 */
  -webkit-backdrop-filter: blur(6px);
  /* 轻边框提升层次 */
  border: 1px solid rgba(255, 255, 255, 0.16);
}

/* 表格整体样式 */
.file-table {
  /* 表格占满容器宽度 */
  width: 100%;
  /* 合并边框，线条更干净 */
  border-collapse: collapse;
  /* 固定布局，列宽稳定 */
  table-layout: fixed;
  /* 默认文字颜色 */
  color: #fff;
  /* 字体大小 */
  font-size: 14px;
}

/* 表头与单元格通用样式 */
.file-table th,
.file-table td {
  /* 单元格内边距 */
  padding: 12px 10px;
  /* 底部细分割线 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  /* 文字左对齐 */
  text-align: left;
  /* 内容垂直居中 */
  vertical-align: middle;
}

/* 表头额外样式 */
.file-table th {
  /* 字重稍加粗 */
  font-weight: 600;
  /* 表头文字颜色稍亮 */
  color: rgba(255, 255, 255, 0.92);
}

/* 文件名单元格样式 */
.filename-cell {
  /* 作为预览框绝对定位的参考父级 */
  position: relative;
  /* 允许预览框超出单元格显示 */
  overflow: visible;
  /* 鼠标手型提示可交互 */
  cursor: pointer;
  /* 文件名颜色 */
  color: #dbeafe;
}

/* 文件名文本样式 */
.filename-text {
  /* 行内块，便于控制宽度与省略 */
  display: inline-block;
  /* 最大可见宽度 */
  max-width: 260px;
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出显示省略号 */
  text-overflow: ellipsis;
  /* 禁止换行 */
  white-space: nowrap;
}

/* 预览容器样式（只负责定位，不做装饰） */
.preview-box {
  /* 绝对定位，跟随文件名单元格 */
  position: absolute;
  /* 放到文件名列右侧，间距 4px */
  left: 50%;
  /* 垂直居中对齐到当前单元格 */
  top: 50%;
  /* 配合 top 形成垂直居中 */
  transform: translateY(-50%);
  /* 提升层级，防止被其他元素遮挡 */
  z-index: 20;
  /* 禁止鼠标事件，避免 hover 抖动 */
  pointer-events: none;
  /* 不固定容器宽度，随图片实际尺寸 */
  width: auto;
  /* 不固定容器高度，随图片实际尺寸 */
  height: auto;
}

/* 预览图片样式 */
.preview-box img {
  /* 块级显示，去除行内元素空隙 */
  display: block;
  /* 限制最大宽度，避免图片过大 */
  max-width: 520px;
  /* 限制最大高度，避免超出视窗 */
  max-height: 360px;
  /* 宽度按图片原始比例自动计算 */
  width: auto;
  /* 高度按图片原始比例自动计算 */
  height: auto;
  /* 保持比例完整显示，不裁切 */
  object-fit: contain;
}

/* 空数据提示样式 */
.empty-tip {
  /* 与表格保持一点上间距 */
  margin-top: 12px;
  /* 提示文字颜色 */
  color: rgba(255, 255, 255, 0.9);
}
</style>
