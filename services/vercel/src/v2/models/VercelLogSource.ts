import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source of logs that Vercel forwards to Datadog.
 */
export type VercelLogSource =
  | typeof STATIC
  | typeof LAMBDA
  | typeof EDGE
  | typeof BUILD
  | typeof EXTERNAL
  | typeof FIREWALL
  | UnparsedObject;
export const STATIC = "static";
export const LAMBDA = "lambda";
export const EDGE = "edge";
export const BUILD = "build";
export const EXTERNAL = "external";
export const FIREWALL = "firewall";
