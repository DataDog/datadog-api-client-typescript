import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the action is a send Slack message action.
 */
export type SendSlackMessageActionType =
  | typeof SEND_SLACK_MESSAGE
  | UnparsedObject;
export const SEND_SLACK_MESSAGE = "send_slack_message";
