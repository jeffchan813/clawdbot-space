# BOSSAPP - 科技感老板看板

一个具有科技感的老板看板系统，使用 React + TypeScript + Tailwind CSS 构建。

## 🚀 功能特性

- **实时监控面板** - 显示关键业务指标
- **科技感UI设计** - 赛博朋克风格界面
- **响应式布局** - 适配各种屏幕尺寸
- **动态数据** - 实时更新的模拟数据
- **系统状态监控** - 服务器、数据库等状态显示
- **项目进度跟踪** - 可视化项目进度管理

## 🛠️ 技术栈

- **React 19** - 前端框架
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 样式框架
- **Vite** - 构建工具
- **Lucide React** - 图标库

## 📦 安装与运行

### 1. 克隆项目
```bash
git clone https://github.com/jeffchan813/BOSSAPP.git
cd BOSSAPP
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 构建生产版本
```bash
npm run build
```

### 5. 预览生产版本
```bash
npm run preview
```

## 🎨 设计特色

### 科技感元素
- 赛博朋克配色方案（蓝紫色调）
- 动态发光效果
- 网格背景和扫描线动画
- 渐变边框和悬浮效果

### 交互功能
- 实时时间显示
- 动态CPU使用率模拟
- 可交互的图表组件
- 响应式按钮和面板

### 数据可视化
- 收入趋势图表
- 项目进度条
- 系统状态指示器
- 警报通知系统

## 📱 页面结构

### 头部区域
- 应用Logo和标题
- 实时时间和系统状态
- 关键指标概览

### 主内容区
- **左侧**：收入趋势图表和项目进度
- **右侧**：系统警报、快速操作和系统状态

### 底部状态栏
- 系统运行状态
- 版本信息和用户信息

## 🔧 配置说明

### Tailwind CSS 配置
项目使用 Tailwind CSS v4，配置位于 `tailwind.config.js`：
- 自定义颜色方案（cyber-blue, cyber-purple等）
- 动画效果（glow, float, pulse-glow）
- 字体配置（Orbitron, Rajdhani）

### 字体配置
- **Orbitron** - 用于标题和数字显示
- **Rajdhani** - 用于正文内容

## 🚀 部署

### Vercel 部署
```bash
npm install -g vercel
vercel
```

### Netlify 部署
```bash
npm run build
# 上传 dist 文件夹到 Netlify
```

### GitHub Pages 部署
```bash
npm run build
# 配置 GitHub Actions 自动部署
```

## 📄 许可证

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

如有问题或建议，请通过 GitHub Issues 联系。

---

**BOSSAPP** - 为老板打造的科技感监控看板 🚀