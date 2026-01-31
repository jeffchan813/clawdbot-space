import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  BarChart3,
  Target,
  Clock,
  Shield,
  Zap,
  Globe,
  Cpu,
  Database
} from 'lucide-react'
import './App.css'

// 模拟数据
const metrics = [
  { id: 1, title: '总收入', value: '$1,248,560', change: '+12.5%', icon: DollarSign, color: 'text-green-400' },
  { id: 2, title: '活跃用户', value: '45,892', change: '+8.2%', icon: Users, color: 'text-blue-400' },
  { id: 3, title: '转化率', value: '24.7%', change: '+3.1%', icon: TrendingUp, color: 'text-purple-400' },
  { id: 4, title: '系统负载', value: '78%', change: '-2.4%', icon: Activity, color: 'text-orange-400' },
]

const alerts = [
  { id: 1, type: 'warning', message: '服务器负载过高', time: '2分钟前', icon: Cpu },
  { id: 2, type: 'success', message: '新用户注册峰值', time: '15分钟前', icon: Users },
  { id: 3, type: 'info', message: '数据库备份完成', time: '30分钟前', icon: Database },
  { id: 4, type: 'error', message: '支付网关延迟', time: '1小时前', icon: Shield },
]

const projects = [
  { id: 1, name: 'AI助手升级', progress: 85, deadline: '2天后', team: 8 },
  { id: 2, name: '移动端优化', progress: 60, deadline: '1周后', team: 5 },
  { id: 3, name: '数据迁移', progress: 45, deadline: '3天后', team: 12 },
  { id: 4, name: '安全审计', progress: 95, deadline: '明天', team: 3 },
]

function App() {
  const [time, setTime] = useState('')
  const [cpuUsage, setCpuUsage] = useState(0)

  useEffect(() => {
    // 更新时间
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('zh-CN', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }
    
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)
    
    // 模拟CPU使用率变化
    const cpuInterval = setInterval(() => {
      setCpuUsage(prev => {
        const change = Math.random() * 10 - 5
        const newValue = prev + change
        return Math.max(20, Math.min(95, newValue))
      })
    }, 2000)
    
    return () => {
      clearInterval(timeInterval)
      clearInterval(cpuInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8">
      {/* 头部 */}
      <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              BOSS<span className="glow-text">APP</span>
            </h1>
            <p className="text-gray-400 mt-2">科技感老板看板 - 实时监控与决策系统</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="dashboard-panel flex items-center gap-3">
              <Clock className="text-cyber-blue" />
              <div>
                <div className="text-2xl font-orbitron">{time}</div>
                <div className="text-sm text-gray-400">系统时间</div>
              </div>
            </div>
            
            <div className="dashboard-panel flex items-center gap-3">
              <Zap className="text-yellow-400" />
              <div>
                <div className="text-2xl font-orbitron">{cpuUsage.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">CPU使用率</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 主要指标 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map(metric => {
          const Icon = metric.icon
          return (
            <div key={metric.id} className="metric-card group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm">{metric.title}</p>
                  <p className="text-3xl font-bold mt-2">{metric.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${metric.color} group-hover:scale-110 transition-transform`} />
              </div>
              <div className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change} 较上月
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：图表区域 */}
        <div className="lg:col-span-2 space-y-8">
          {/* 收入图表 */}
          <div className="dashboard-panel">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 className="text-cyber-blue" />
                收入趋势
              </h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition">日</button>
                <button className="px-4 py-2 bg-cyber-blue text-black rounded-lg text-sm font-bold">月</button>
                <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition">年</button>
              </div>
            </div>
            
            <div className="h-64 relative">
              {/* 模拟图表 */}
              <div className="absolute inset-0 flex items-end">
                {[40, 65, 80, 60, 90, 75, 85, 95].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 mx-1"
                    style={{ height: `${height}%` }}
                  >
                    <div className="h-full bg-gradient-to-t from-cyber-blue to-cyber-purple rounded-t-lg transition-all hover:opacity-80"></div>
                  </div>
                ))}
              </div>
              
              {/* 网格线 */}
              <div className="absolute inset-0 grid grid-rows-4 gap-0">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-t border-gray-800"></div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between mt-4 text-sm text-gray-400">
              <span>1月</span>
              <span>2月</span>
              <span>3月</span>
              <span>4月</span>
              <span>5月</span>
              <span>6月</span>
              <span>7月</span>
              <span>8月</span>
            </div>
          </div>

          {/* 项目进度 */}
          <div className="dashboard-panel">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="text-cyber-blue" />
              项目进度
            </h2>
            
            <div className="space-y-6">
              {projects.map(project => (
                <div key={project.id} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-gray-400">{project.deadline} • {project.team}人</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">进度</span>
                    <span className="font-bold">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：通知和快速操作 */}
        <div className="space-y-8">
          {/* 系统警报 */}
          <div className="dashboard-panel">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Shield className="text-cyber-blue" />
              系统警报
            </h2>
            
            <div className="space-y-4">
              {alerts.map(alert => {
                const Icon = alert.icon
                const typeColors = {
                  warning: 'border-yellow-500/30 bg-yellow-500/10',
                  success: 'border-green-500/30 bg-green-500/10',
                  info: 'border-blue-500/30 bg-blue-500/10',
                  error: 'border-red-500/30 bg-red-500/10',
                }
                
                return (
                  <div 
                    key={alert.id} 
                    className={`p-4 rounded-lg border ${typeColors[alert.type as keyof typeof typeColors]} flex items-start gap-3`}
                  >
                    <Icon className="w-5 h-5 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-gray-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 快速操作 */}
          <div className="dashboard-panel">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-cyber-blue" />
              快速操作
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="cyber-button flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" />
                全局刷新
              </button>
              <button className="px-4 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition">
                生成报告
              </button>
              <button className="px-4 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition">
                数据导出
              </button>
              <button className="px-4 py-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-medium hover:bg-red-500/30 transition">
                紧急停止
              </button>
            </div>
          </div>

          {/* 系统状态 */}
          <div className="dashboard-panel">
            <h2 className="text-xl font-bold mb-6">系统状态</h2>
            
            <div className="space-y-4">
              {[
                { name: 'Web服务器', status: '正常', value: 95 },
                { name: '数据库', status: '正常', value: 88 },
                { name: '缓存服务', status: '警告', value: 65 },
                { name: 'API网关', status: '正常', value: 92 },
              ].map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{service.name}</span>
                    <span className={service.status === '正常' ? 'text-green-400' : 'text-yellow-400'}>
                      {service.status}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        service.status === '正常' 
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                          : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                      }`}
                      style={{ width: `${service.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部状态栏 */}
      <footer className="mt-8 pt-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>系统运行正常</span>
            </div>
            <span>•</span>
            <span>最后更新: {new Date().toLocaleTimeString('zh-CN', { hour12: false })}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span>版本: v2.1.0</span>
            <span>•</span>
            <span>用户: Admin</span>
            <span>•</span>
            <button className="text-cyber-blue hover:text-cyber-purple transition">
              退出系统
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App