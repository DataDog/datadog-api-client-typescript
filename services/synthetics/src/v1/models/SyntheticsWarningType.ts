import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * User locator used.
 */
export type SyntheticsWarningType = typeof USER_LOCATOR | UnparsedObject;
export const USER_LOCATOR = "user_locator";
