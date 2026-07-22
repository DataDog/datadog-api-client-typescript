import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GovernanceBestPracticeDefinition } from "./GovernanceBestPracticeDefinition";
import { GovernanceInsightAttributes } from "./GovernanceInsightAttributes";
import { GovernanceInsightAuditCompute } from "./GovernanceInsightAuditCompute";
import { GovernanceInsightAuditQuery } from "./GovernanceInsightAuditQuery";
import { GovernanceInsightData } from "./GovernanceInsightData";
import { GovernanceInsightEventCompute } from "./GovernanceInsightEventCompute";
import { GovernanceInsightEventQuery } from "./GovernanceInsightEventQuery";
import { GovernanceInsightMetricQuery } from "./GovernanceInsightMetricQuery";
import { GovernanceInsightPercentageQuery } from "./GovernanceInsightPercentageQuery";
import { GovernanceInsightQueryConfig } from "./GovernanceInsightQueryConfig";
import { GovernanceInsightUsageQuery } from "./GovernanceInsightUsageQuery";
import { GovernanceInsightsResponse } from "./GovernanceInsightsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GovernanceInsightResourceType: ["insight"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GovernanceBestPracticeDefinition: GovernanceBestPracticeDefinition,
    GovernanceInsightAttributes: GovernanceInsightAttributes,
    GovernanceInsightAuditCompute: GovernanceInsightAuditCompute,
    GovernanceInsightAuditQuery: GovernanceInsightAuditQuery,
    GovernanceInsightData: GovernanceInsightData,
    GovernanceInsightEventCompute: GovernanceInsightEventCompute,
    GovernanceInsightEventQuery: GovernanceInsightEventQuery,
    GovernanceInsightMetricQuery: GovernanceInsightMetricQuery,
    GovernanceInsightPercentageQuery: GovernanceInsightPercentageQuery,
    GovernanceInsightQueryConfig: GovernanceInsightQueryConfig,
    GovernanceInsightUsageQuery: GovernanceInsightUsageQuery,
    GovernanceInsightsResponse: GovernanceInsightsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};