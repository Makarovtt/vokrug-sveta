import { Iwhatsapp } from "./icon.interface";

export const Email = ({
  width = "1em",
  height = "1em",
  color = "currentColor",
  props,
}: Iwhatsapp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
    viewBox="0 0 42 42"
  >
    <path
      fill={color}
      d="M40.5 31.5v-18S22.3 26.2 20.53 26.859C18.79 26.23.5 13.5.5 13.5v18c0 2.5.53 3 3 3h34c2.529 0 3-.439 3-3zm-.029-21.529c0-1.821-.531-2.471-2.971-2.471h-34c-2.51 0-3 .78-3 2.6l.03.28s18.069 12.44 20 13.12c2.04-.79 19.97-13.4 19.97-13.4l-.029-.129z"
    ></path>
  </svg>
);