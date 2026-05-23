export type DashboardMetric = {
  label: string;
  value: string;
  trend?: "up" | "down" | "flat";
};
