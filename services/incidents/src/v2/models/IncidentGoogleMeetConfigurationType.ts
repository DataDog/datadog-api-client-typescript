import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Google Meet configuration resource type.
 */
export type IncidentGoogleMeetConfigurationType =
  | typeof GOOGLE_MEET_CONFIGURATIONS
  | UnparsedObject;
export const GOOGLE_MEET_CONFIGURATIONS = "google_meet_configurations";
