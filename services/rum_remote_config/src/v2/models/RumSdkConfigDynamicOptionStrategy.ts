import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The strategy used to extract the dynamic value.
 */
export type RumSdkConfigDynamicOptionStrategy =
  | typeof JS
  | typeof COOKIE
  | typeof DOM
  | typeof LOCAL_STORAGE
  | UnparsedObject;
export const JS = "js";
export const COOKIE = "cookie";
export const DOM = "dom";
export const LOCAL_STORAGE = "localStorage";
