import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The routing mode for the notification rule. `manual` sends notifications to the configured targets.
 */
export type NotificationRuleRoutingMode = typeof MANUAL | UnparsedObject;
export const MANUAL = "manual";
