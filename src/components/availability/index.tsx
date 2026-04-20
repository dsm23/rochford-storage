import type { ComponentProps, CSSProperties, FunctionComponent } from "react";
import { cn } from "~/utils/class-names";

interface Props extends ComponentProps<"section"> {
  capacity?: number;
  occupied?: number;
}

const Availability: FunctionComponent<Props> = ({
  capacity = 1,
  occupied = 1,
  className,
  ...props
}) => {
  const filled = `${((occupied / capacity) * 100).toFixed(0)}%`;

  return (
    <section className={cn("px-12 py-20", className)} {...props}>
      <div
        className="border bg-slate-100 p-10 dark:bg-slate-900"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="mb-2 font-heading text-3xl font-bold">
              Current Capacity
            </h2>
            <p className="">
              Real-time status of available storage units in our facility.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mb-4 flex items-end justify-between">
              <span className="font-heading text-4xl font-bold text-green-800 dark:text-green-300">
                {capacity - occupied} Spaces Currently Available
              </span>
              <span className="text-xs tracking-widest text-green-800 uppercase dark:text-green-300">
                {filled} Occupied
              </span>
            </div>
            <div className="h-3 w-full bg-background">
              <div
                className="h-full w-(--filled) bg-green-800 dark:bg-green-300"
                style={{ "--filled": filled } as CSSProperties}
              />
            </div>
            <div className="mt-4 flex justify-between text-[10px] tracking-wider text-neutral-100 uppercase">
              <span>{occupied} Units In Use</span>
              <span>{capacity} Units Total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;
