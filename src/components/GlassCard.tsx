import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};
export default function GlassCard({ title, children }: Props) {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-lg border border-white/6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
}
