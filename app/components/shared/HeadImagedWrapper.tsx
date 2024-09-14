export default function HeadImagedWrapper({children, image, className, fixed}: {children: React.ReactNode, image?: string, className: string, fixed?: boolean}) {
  return (
    <div className={`relative ${!image && "bg-black"}  ${fixed && 'bg-fixed'} ${className}  `}
    style={{ backgroundImage: image ? `url(${image})` : 'none' }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      {/* Dark overlay */}
        {children}
    </div>
  );
}
