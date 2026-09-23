import { SiteConfig } from '../App';

interface TopBarProps {
  config: SiteConfig;
}

export default function TopBar({ config }: TopBarProps) {
  return (
    <div className="bg-red-700 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-8">
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline font-bold uppercase tracking-wider">{config.site.portalTitle}</span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden lg:inline">Hotline: {config.site.hotline}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="hidden md:inline">Thứ {new Date().getDay() === 0 ? 'Chủ nhật' : new Date().getDay() + 1}, ngày {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-3 bg-red-600 border border-yellow-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-400"></div>
              </div>
              <span className="text-[10px]">VI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
