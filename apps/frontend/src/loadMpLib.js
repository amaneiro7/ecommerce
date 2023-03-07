import { config } from "./config";

export const loadMpLib = () => {
  const mp_script = document.createElement("script");
  mp_script.async = true
  mp_script.src = config.libraryUri;
  document.head.append(mp_script);
};
