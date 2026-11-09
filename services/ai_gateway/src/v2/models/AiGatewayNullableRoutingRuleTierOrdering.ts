import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How a tier orders its targets. Omitted or null defaults to configured, which preserves target order. The weighted_affinity ordering distributes first-choice assignments by relative target weights and accepts only model targets with an explicit provider, without repeated provider and model pairs in the same tier. The classified ordering lets a decision model pick one destination for each request by its rubric. It is allowed only on the first tier, and it needs a classifier and exactly one default destination.
 *
 * **Note**: Classified routing is in Preview and may not be available for all organizations. Saving a classified tier returns 403 Forbidden unless the feature is enabled for your organization.
 */
export type AiGatewayNullableRoutingRuleTierOrdering =
  | typeof CONFIGURED
  | typeof WEIGHTED_AFFINITY
  | typeof CLASSIFIED
  | UnparsedObject;
export const CONFIGURED = "configured";
export const WEIGHTED_AFFINITY = "weighted_affinity";
export const CLASSIFIED = "classified";
