interface SectionTitleProps {
  badge: string;
  title: string;
  subtitle?: string;
  badgeColor?: string;
}

export default function SectionTitle({ badge, title, subtitle, badgeColor = 'bg-red-100 text-red-700 border-red-700' }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <span className={`inline-block ${badgeColor} border px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4`}>
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
        {title}
      </h2>
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-12 h-0.5 bg-red-700"></div>
        <div className="w-2 h-2 bg-yellow-400 rotate-45"></div>
        <div className="w-12 h-0.5 bg-red-700"></div>
      </div>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
