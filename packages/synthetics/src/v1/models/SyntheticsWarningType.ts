import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * User locator used.
 */
export type SyntheticsWarningType = typeof USER_LOCATOR | UnparsedObject;
export const USER_LOCATOR = "user_locator";
