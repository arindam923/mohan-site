import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento  transition duration-200 shadow-input dark:shadow-none py-4 lg:p-4 dark:bg-black dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <img
        src={image}
        className="absolute w-full h-full rounded-md object-cover"
      />
      {header}
      <div className="group-hover/bento:translate-x-2 bg-gradient-to-b from-transparent to-neutral-900 text-white rounded-md p-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold  mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-xs">{description}</div>
      </div>
    </div>
  );
};
