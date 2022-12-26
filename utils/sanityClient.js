import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "gylmzmsj",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});
