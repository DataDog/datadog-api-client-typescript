import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Cost setting resource type.
 */
export type CostSettingType = typeof SETTING | UnparsedObject;
export const SETTING = "setting";
