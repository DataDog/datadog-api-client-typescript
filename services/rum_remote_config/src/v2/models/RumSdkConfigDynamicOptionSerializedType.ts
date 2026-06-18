import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for a dynamic option. Always `dynamic`.
 */
export type RumSdkConfigDynamicOptionSerializedType =
  | typeof DYNAMIC
  | UnparsedObject;
export const DYNAMIC = "dynamic";
