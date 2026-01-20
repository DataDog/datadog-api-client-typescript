import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type
 */
export type SecurityEntityRiskScoreType =
  | typeof SECURITY_ENTITY_RISK_SCORE
  | UnparsedObject;
export const SECURITY_ENTITY_RISK_SCORE = "security_entity_risk_score";
