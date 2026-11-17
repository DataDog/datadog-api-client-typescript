import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type.
 */
export type SecurityEntityRiskScoreType =
  | typeof SECURITY_ENTITY_RISK_SCORE
  | UnparsedObject;
export const SECURITY_ENTITY_RISK_SCORE = "SecurityEntityRiskScore";
