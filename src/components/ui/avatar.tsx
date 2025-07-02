import * as React from "react"

export function Avatar({
  children,
  className = "",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function AvatarFallback({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`text-sm font-medium text-gray-500 ${className}`} {...props}>
      {children}
    </span>
  );
}

