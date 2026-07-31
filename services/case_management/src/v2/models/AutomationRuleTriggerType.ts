import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The case event that activates the automation rule.
 */
export type AutomationRuleTriggerType =
  | typeof CASE_CREATED
  | typeof STATUS_TRANSITIONED
  | typeof ATTRIBUTE_VALUE_CHANGED
  | typeof EVENT_CORRELATION_SIGNAL_CORRELATED
  | typeof CASE_REVIEW_APPROVED
  | typeof COMMENT_ADDED
  | UnparsedObject;
export const CASE_CREATED = "CASE_CREATED";
export const STATUS_TRANSITIONED = "STATUS_TRANSITIONED";
export const ATTRIBUTE_VALUE_CHANGED = "ATTRIBUTE_VALUE_CHANGED";
export const EVENT_CORRELATION_SIGNAL_CORRELATED =
  "EVENT_CORRELATION_SIGNAL_CORRELATED";
export const CASE_REVIEW_APPROVED = "CASE_REVIEW_APPROVED";
export const COMMENT_ADDED = "COMMENT_ADDED";
