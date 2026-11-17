import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for a governance insight.
 */
export type GovernanceInsightResourceType = typeof INSIGHT | UnparsedObject;
export const INSIGHT = "insight";
