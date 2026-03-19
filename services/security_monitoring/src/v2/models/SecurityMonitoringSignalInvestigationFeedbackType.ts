import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of feedback.
 */
export type SecurityMonitoringSignalInvestigationFeedbackType =
  | typeof INVESTIGATION_FEEDBACK
  | UnparsedObject;
export const INVESTIGATION_FEEDBACK = "investigation_feedback";
