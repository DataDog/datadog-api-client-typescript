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
export const CASE_CREATED = "case_created";
export const STATUS_TRANSITIONED = "status_transitioned";
export const ATTRIBUTE_VALUE_CHANGED = "attribute_value_changed";
export const EVENT_CORRELATION_SIGNAL_CORRELATED =
  "event_correlation_signal_correlated";
export const CASE_REVIEW_APPROVED = "case_review_approved";
export const COMMENT_ADDED = "comment_added";
