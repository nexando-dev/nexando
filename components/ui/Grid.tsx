export const Grid = ({
  children,
  cols = 3,
  gap = "gap-6",
  className = "",
}: {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: string;
  className?: string;
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[cols]} ${gap} ${className}`}>
      {children}
    </div>
  );
};
