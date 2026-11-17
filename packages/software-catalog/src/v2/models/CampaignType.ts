import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API type for campaigns.
 */
export type CampaignType = typeof CAMPAIGN | UnparsedObject;
export const CAMPAIGN = "campaign";
