"use client";
import { cn } from "../../lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            className="relative group block h-full w-full"
          >
            {/* Hover background effect */}
            <div className="absolute inset-0 h-full w-full bg-burgundy-100 dark:bg-burgundy-900/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
            
            <Card>
              {IconComponent && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-burgundy-800 dark:bg-burgundy-600 p-3 rounded-lg">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </div>
              )}
              {!IconComponent && <CardTitle>{item.title}</CardTitle>}
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-8 overflow-hidden bg-accent dark:bg-black border border-slate-200 dark:border-slate-800 group-hover:border-burgundy-300 dark:group-hover:border-burgundy-700 relative z-10 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-2xl font-bold tracking-wide text-black dark:text-white",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-black dark:text-white/80 leading-relaxed tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
};

