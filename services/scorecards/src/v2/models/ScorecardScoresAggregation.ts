import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Dimension to group scores by.
 */
export type ScorecardScoresAggregation =
  | typeof BY_ENTITY
  | typeof BY_RULE
  | typeof BY_SCORECARD
  | typeof BY_TEAM
  | typeof BY_KIND
  | UnparsedObject;
export const BY_ENTITY = "by-entity";
export const BY_RULE = "by-rule";
export const BY_SCORECARD = "by-scorecard";
export const BY_TEAM = "by-team";
export const BY_KIND = "by-kind";
