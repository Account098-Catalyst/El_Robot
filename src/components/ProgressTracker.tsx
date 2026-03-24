import { motion } from "framer-motion";

interface ProgressTrackerProps {
  total: number;
  completed: number;
}

const ProgressTracker = ({ total, completed }: ProgressTrackerProps) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-body uppercase tracking-widest text-muted-foreground">
          Progression
        </span>
        <span className="text-sm font-body font-semibold text-primary">
          {completed}/{total}
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-gold-glow"
          style={{
            background: `linear-gradient(90deg, hsl(43 80% 55%), hsl(43 90% 65%))`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
