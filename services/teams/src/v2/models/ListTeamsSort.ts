import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the order of the returned teams
 */
export type ListTeamsSort =
  | typeof NAME
  | typeof _NAME
  | typeof USER_COUNT
  | typeof _USER_COUNT
  | UnparsedObject;
export const NAME = "name";
export const _NAME = "-name";
export const USER_COUNT = "user_count";
export const _USER_COUNT = "-user_count";
