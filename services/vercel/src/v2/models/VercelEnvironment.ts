import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Vercel deployment environment.
 */
export type VercelEnvironment =
  | typeof PRODUCTION
  | typeof PREVIEW
  | UnparsedObject;
export const PRODUCTION = "production";
export const PREVIEW = "preview";
