import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Platform associated with the issue.
 */
export type IssuePlatform =
  | typeof ANDROID
  | typeof BACKEND
  | typeof BROWSER
  | typeof FLUTTER
  | typeof IOS
  | typeof REACT_NATIVE
  | typeof ROKU
  | typeof UNKNOWN
  | UnparsedObject;
export const ANDROID = "ANDROID";
export const BACKEND = "BACKEND";
export const BROWSER = "BROWSER";
export const FLUTTER = "FLUTTER";
export const IOS = "IOS";
export const REACT_NATIVE = "REACT_NATIVE";
export const ROKU = "ROKU";
export const UNKNOWN = "UNKNOWN";
