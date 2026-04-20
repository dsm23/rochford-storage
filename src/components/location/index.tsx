import type { ComponentProps, FunctionComponent } from "react";
import Map from "~/components/map";

type Props = ComponentProps<"section">;

const Location: FunctionComponent<Props> = (props) => (
  <section {...props}>
    <Map />
  </section>
);

export default Location;
