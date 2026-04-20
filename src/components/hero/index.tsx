import type { ComponentProps, FunctionComponent } from "react";
import { Link } from "react-router";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/class-names";

type Props = ComponentProps<"section">;

const Hero: FunctionComponent<Props> = ({ className, ...props }) => (
  <section
    className={cn(
      "relative flex h-[calc(100dvh-10rem)] items-center overflow-hidden border-b",
      className,
    )}
    {...props}
  >
    {/* <div className="absolute inset-0">
      <img
        className="h-full w-full object-cover opacity-40"
        alt="Classic British Leyland car parked in a clean warehouse storage facility."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN62cuwFFxOpUh8vsu0W71boeGE_HRxZgap1snY-iK2_MaWRT5SsWdRI2WrqvspALxvIUmEztLq-opl8qV1OuY58kHyKsnuKrrqc4pnaA5jiqUMeN-QWjxZLR5kum3D3WJACNKm-n87FaUSpjVJhzkclTAX1m5VFGNp6Yr7n11VuRhsutz5ODpwnmvzIZdTK8Xou5ECm2-Ug_PPN95nsjGg16uL3TQ9E7PMGsAPrSru9wTqPg6BF4TsLTX6U1V4COmoY7D-6v5DBKv"
      />
    </div> */}
    <div className="mx-auto w-full max-w-7xl px-12">
      <div className="max-w-3xl">
        <span className="mb-6 inline-block px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase">
          Professional Storage
        </span>
        <h1 className="mb-8 font-heading text-6xl/tight font-bold tracking-tighter md:text-7xl">
          Safe Warehouse{" "}
          <span className="text-green-800 dark:text-green-300">Storage</span>
        </h1>
        <p className="mb-12 max-w-xl text-lg/relaxed md:text-xl">
          Reliable, secure storage facility for vehicles. Our units provide a
          clean and safe environment for long-term or short-term parking.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/rates"
            className={buttonVariants({
              variant: "hero-default",
              className: "font-heading",
            })}
          >
            Check Rates
          </Link>
          <Link
            to="/gallery"
            className="border border-green-800 px-10 py-4 text-center font-heading font-bold tracking-widest text-green-800 uppercase transition-colors hover:border-primary dark:border-green-300 dark:text-green-300"
          >
            Facility Gallery
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
