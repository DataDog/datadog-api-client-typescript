import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the campaign.
 */
export type CampaignStatus =
  | typeof IN_PROGRESS
  | typeof NOT_STARTED
  | typeof COMPLETED
  | UnparsedObject;
export const IN_PROGRESS = "in_progress";
export const NOT_STARTED = "not_started";
export const COMPLETED = "completed";
