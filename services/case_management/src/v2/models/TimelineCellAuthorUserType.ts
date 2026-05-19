import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of timeline cell author. Currently only `USER` is supported.
 */
export type TimelineCellAuthorUserType = typeof USER | UnparsedObject;
export const USER = "USER";
