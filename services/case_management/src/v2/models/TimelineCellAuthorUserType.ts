import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * user author type.
 */
export type TimelineCellAuthorUserType = typeof USER | UnparsedObject;
export const USER = "USER";
