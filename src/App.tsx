import React from 'react';
import {
  LayoutDashboard,
  Megaphone,
  Calendar,
  Activity,
  Users,
  Bell,
  ChevronRight,
  ChevronDown,
  Plus,
  PanelLeftClose,
  FileText,
  FileOutput,
  Info,
  Settings2,
  Paperclip,
  Tag,
  Send,
  X,
  Image as ImageIcon,
  Loader2,
  MessageSquare,
  Bot,
  Sparkles,
  ArrowRight,
  Zap
} from 'lucide-react';

function NavItem({ icon, label, active, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
  return (
    <button className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl transition-all duration-300 ${active ? 'bg-indigo-50/80 text-indigo-700 font-semibold shadow-sm shadow-indigo-100/50 border border-indigo-100/50' : 'text-slate-500 hover:bg-slate-100/80 hover:text-slate-900 border border-transparent'}`}>
      <div className="flex items-center gap-3">
        <div className={`${active ? 'text-indigo-600' : 'text-slate-400'}`}>
          {icon}
        </div>
        <span className="text-sm tracking-wide">{label}</span>
      </div>
      {badge && (
        <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${active ? 'bg-indigo-200/50 text-indigo-700' : 'bg-slate-200/70 text-slate-600'}`}>
          {badge}
        </span>
      )}
    </button>
  );
}

export default function App() {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Sidebar - Glassmorphic */}
      <aside className="w-[260px] bg-white/80 backdrop-blur-2xl border-r border-slate-200/60 flex flex-col h-full shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20 shrink-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent pointer-events-none"></div>
        
        <div className="p-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 text-white p-2 rounded-xl shadow-lg shadow-indigo-500/20 ring-1 ring-white/50">
              <Bot size={24} />
            </div>
            <span className="font-bold text-lg text-slate-800 tracking-tight">电商多智能体</span>
          </div>
          <button className="text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-xl transition-colors">
            <PanelLeftClose size={18} />
          </button>
        </div>

        <div className="px-5 pb-5 relative z-10">
          <div className="flex items-center justify-between bg-slate-100/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-1.5 shadow-inner">
            <button className="flex-1 flex items-center justify-between px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-xl transition-all">
              历史对话
              <ChevronRight size={16} className="text-slate-400" />
            </button>
            <div className="w-px h-5 bg-slate-200 mx-1.5"></div>
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-indigo-600 hover:bg-white hover:shadow-sm rounded-xl transition-all">
              <Plus size={16} strokeWidth={2.5} />
              新建
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2 relative z-10 space-y-6">
          <div>
            <button className="w-full flex items-center justify-between px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
              功能导航
              <ChevronDown size={14} />
            </button>
            <div className="space-y-1 mt-2">
              <NavItem icon={<LayoutDashboard size={18} />} label="产品看板" active />
              <NavItem icon={<Megaphone size={18} />} label="营销活动" />
              <NavItem icon={<Calendar size={18} />} label="每日简报" />
              <NavItem icon={<Activity size={18} />} label="系统看板" />
              <NavItem icon={<Users size={18} />} label="AI 团队介绍" />
              <NavItem icon={<Bell size={18} />} label="预警中心" badge="4" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0 bg-[#FAFCFF] overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-200/40 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-200/40 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-purple-200/30 blur-[120px] pointer-events-none"></div>

        {/* Header */}
        <header className="h-20 bg-white/40 backdrop-blur-xl border-b border-white/60 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">当前对话</h1>
            <div className="h-5 w-px bg-slate-300"></div>
            <span className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              智能体已就绪
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-600 bg-white/80 border border-slate-200/80 rounded-xl hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <FileText size={16} className="text-slate-400" />
              导出原文
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 border border-transparent rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300">
              <FileOutput size={16} className="text-indigo-100" />
              生成报告
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-8 pb-56 relative z-0">
          <div className="max-w-4xl mx-auto">
            
            {/* Instruction Card - Bento Style */}
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-xl shadow-slate-200/40 border border-white overflow-hidden mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none"></div>
              
              {/* Card Header */}
              <div className="relative px-8 py-6 border-b border-slate-100/80 flex items-center gap-4 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-blue-500/5">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg shadow-indigo-500/20 text-white ring-4 ring-white/50">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">使用说明</h2>
                  <p className="text-sm font-medium text-slate-500 mt-1">快速了解如何与电商多智能体高效协作</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="relative p-8 text-slate-600 text-sm leading-relaxed">
                <p className="mb-6 text-slate-700 text-base font-medium">在输入框直接写你的目标或问题；需要分析资料时，点击附件上传；再按需切换“策略”控制回答方式。</p>
                
                <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl p-6 mb-8 border border-slate-100/80 shadow-inner">
                  <ol className="space-y-4 text-slate-700">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">1</span>
                      <div><span className="font-bold text-slate-900">问题尽量写清楚：</span>对象、时间范围、你要的结果。</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">2</span>
                      <div><span className="font-bold text-slate-900">图片和文件可同时上传：</span>文件名建议用业务名称（如“2025销量表”“图片1”）。</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">3</span>
                      <div><span className="font-bold text-slate-900">如果回答不符合预期：</span>切换“策略”后重问同一个问题即可。</div>
                    </li>
                  </ol>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                      <MessageSquare size={16} />
                    </div>
                    <p className="font-bold text-slate-800 text-base">示例提问 <span className="text-xs font-medium text-slate-400 ml-2 bg-slate-100 px-2 py-1 rounded-md">可直接复制后改关键词</span></p>
                  </div>
                  <div className="grid gap-3">
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer rounded-2xl p-4 text-slate-700 flex items-start gap-3.5 group/item">
                      <div className="mt-0.5 p-1.5 rounded-full bg-indigo-50 text-indigo-400 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                        <ArrowRight size={14} strokeWidth={3} />
                      </div>
                      <p className="font-medium group-hover/item:text-slate-900 transition-colors">这款新品本周如何上新？请给我7天执行计划（每天要做什么）。</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer rounded-2xl p-4 text-slate-700 flex items-start gap-3.5 group/item">
                      <div className="mt-0.5 p-1.5 rounded-full bg-purple-50 text-purple-400 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                        <ArrowRight size={14} strokeWidth={3} />
                      </div>
                      <p className="font-medium group-hover/item:text-slate-900 transition-colors">我已上传图片1和详情页，请指出3个转化率问题，并给出修改建议。</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer rounded-2xl p-4 text-slate-700 flex items-start gap-3.5 group/item">
                      <div className="mt-0.5 p-1.5 rounded-full bg-blue-50 text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <ArrowRight size={14} strokeWidth={3} />
                      </div>
                      <p className="font-medium group-hover/item:text-slate-900 transition-colors">根据上传的2025销量表，分析最近30天下滑原因，并给可执行改进动作。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Input Area */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FAFCFF] via-[#FAFCFF]/90 to-transparent pt-20 pb-8 px-8 z-20 pointer-events-none">
          <div className="max-w-4xl mx-auto pointer-events-auto">
            
            {/* Upload Status - Floating Pill */}
            <div className="mb-5 flex flex-col gap-3">
              <div className="flex items-center gap-3 self-start bg-white/90 backdrop-blur-xl border border-indigo-100 shadow-lg shadow-indigo-500/5 rounded-2xl p-2.5 pr-4 transform transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-inner">
                  <ImageIcon size={22} />
                </div>
                <div className="flex flex-col justify-center min-w-[140px]">
                  <span className="text-sm font-bold text-slate-800 truncate max-w-[200px]">苏宁营销设计.jpeg</span>
                  <div className="flex items-center gap-1.5 text-xs text-indigo-600 mt-1">
                    <Loader2 size={12} className="animate-spin" />
                    <span className="font-semibold">上传中...</span>
                  </div>
                </div>
                <button className="ml-3 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                  <X size={16} strokeWidth={2.5} />
                </button>
              </div>
              
              {/* Status Text */}
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-600 bg-white/80 backdrop-blur-xl py-2.5 px-5 rounded-full border border-white shadow-sm self-start">
                <Loader2 size={14} className="animate-spin text-indigo-600" />
                <span>正在上传并解析 <span className="font-bold text-indigo-900">苏宁营销设计.jpeg</span></span>
                <span className="text-slate-300 mx-1">|</span>
                <span>已选1个 (1张图片) · 待上传0 · 上传中1 · 解析中0 · 右侧×可取消单个</span>
              </div>
            </div>

            {/* Input Box - Island Style */}
            <div className="bg-white/90 backdrop-blur-2xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-[2rem] p-3 flex items-end gap-3 focus-within:ring-4 focus-within:ring-indigo-500/20 focus-within:border-indigo-200 transition-all duration-300">
              <div className="flex items-center gap-1.5 pb-1.5 pl-2">
                <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-2xl transition-colors">
                  <Zap size={18} className="text-indigo-500" />
                  策略
                </button>
                <div className="w-px h-6 bg-slate-200 mx-1"></div>
                <button className="p-2.5 text-slate-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-2xl transition-colors relative group">
                  <Paperclip size={22} className="group-hover:scale-110 transition-transform" />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">1</span>
                </button>
                <button className="p-2.5 text-slate-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-2xl transition-colors group">
                  <Tag size={22} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              <textarea 
                className="flex-1 max-h-40 min-h-[52px] py-3.5 px-3 bg-transparent border-none focus:ring-0 outline-none resize-none text-base text-slate-800 placeholder:text-slate-400 font-medium leading-relaxed"
                placeholder="输入电商任务或问题，可上传图片/文件（Ctrl+Enter发送）"
                rows={1}
              />
              
              <button className="mb-1.5 mr-1.5 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/40 active:scale-95">
                <Send size={18} />
                发送
              </button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
