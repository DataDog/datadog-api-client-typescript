import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Statuspage URL setting resource type.
 */
export type StatuspageUrlSettingType =
  | typeof STATUSPAGE_URL_SETTING
  | UnparsedObject;
export const STATUSPAGE_URL_SETTING = "statuspage-url-setting";
