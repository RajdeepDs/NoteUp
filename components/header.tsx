type DashboardHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function DashboardHeader({
  children,
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="noteup text-4xl leading-none">{title}</h1>
        <p className="text-lg text-accent-3">{description}</p>
      </div>
      {children}
    </div>
  );
}
