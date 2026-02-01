import React from 'react';
import { CheckCircle, Clock, Zap } from 'lucide-react';

const DeployStatus: React.FC = () => {
  const deployTime = new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="dashboard-panel animate-pulse-glow max-w-xs">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="w-5 h-5 text-cyber-blue" />
          <h3 className="font-bold text-lg">部署状态</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm">GitHub Pages 已启用</span>
          </div>
          
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm">自动部署配置完成</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">正在构建中...</span>
          </div>
          
          <div className="pt-2 border-t border-gray-800">
            <p className="text-xs text-gray-400">部署时间: {deployTime}</p>
            <p className="text-xs text-gray-400 mt-1">
              访问链接: 
              <a 
                href="https://jeffchan813.github.io/clawdbot-space/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-blue hover:text-cyber-purple ml-1"
              >
                jeffchan813.github.io/clawdbot-space
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployStatus;