import { Iwhatsapp } from "./icon.interface";

export const Whatsapp = ({
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
    viewBox="0 0 20 20"
  >
    <path
      fill={color}
      d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2c.2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5c-.1.1-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1z"
    ></path>
  </svg>
);