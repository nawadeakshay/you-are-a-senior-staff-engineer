import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-display-section mt-4 text-gradient-cinematic">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
