import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for onboarding content pack details.
 */
export type SecurityMonitoringContentPackOnboardingDetailsType =
  | typeof ONBOARDING
  | UnparsedObject;
export const ONBOARDING = "onboarding";
