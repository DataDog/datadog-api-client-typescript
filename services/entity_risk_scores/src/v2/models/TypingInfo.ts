import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { SecurityEntityConfigRisks } from "./SecurityEntityConfigRisks";
import { SecurityEntityMetadata } from "./SecurityEntityMetadata";
import { SecurityEntityRiskScore } from "./SecurityEntityRiskScore";
import { SecurityEntityRiskScoreAttributes } from "./SecurityEntityRiskScoreAttributes";
import { SecurityEntityRiskScoresMeta } from "./SecurityEntityRiskScoresMeta";
import { SecurityEntityRiskScoresResponse } from "./SecurityEntityRiskScoresResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SecurityEntityRiskScoreAttributesSeverity: [
      "critical",
      "high",
      "medium",
      "low",
      "info",
    ],
    SecurityEntityRiskScoreType: ["security_entity_risk_score"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    SecurityEntityConfigRisks: SecurityEntityConfigRisks,
    SecurityEntityMetadata: SecurityEntityMetadata,
    SecurityEntityRiskScore: SecurityEntityRiskScore,
    SecurityEntityRiskScoreAttributes: SecurityEntityRiskScoreAttributes,
    SecurityEntityRiskScoresMeta: SecurityEntityRiskScoresMeta,
    SecurityEntityRiskScoresResponse: SecurityEntityRiskScoresResponse,
  },
};
