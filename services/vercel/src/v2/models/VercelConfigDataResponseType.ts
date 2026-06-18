import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for a Vercel configuration resource.
 */
export type VercelConfigDataResponseType =
  | typeof VERCEL_CONFIGURATION
  | UnparsedObject;
export const VERCEL_CONFIGURATION = "vercelConfiguration";
