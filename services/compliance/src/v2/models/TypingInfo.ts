import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RuleBasedViewAttributes } from "./RuleBasedViewAttributes";
import { RuleBasedViewComplianceFramework } from "./RuleBasedViewComplianceFramework";
import { RuleBasedViewData } from "./RuleBasedViewData";
import { RuleBasedViewResponse } from "./RuleBasedViewResponse";
import { RuleBasedViewRule } from "./RuleBasedViewRule";
import { RuleBasedViewRuleStats } from "./RuleBasedViewRuleStats";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RuleBasedViewRuleCategory: [
      "cloud_configuration",
      "infrastructure_configuration",
      "api_security",
    ],
    RuleBasedViewType: ["rule_based_view"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RuleBasedViewAttributes: RuleBasedViewAttributes,
    RuleBasedViewComplianceFramework: RuleBasedViewComplianceFramework,
    RuleBasedViewData: RuleBasedViewData,
    RuleBasedViewResponse: RuleBasedViewResponse,
    RuleBasedViewRule: RuleBasedViewRule,
    RuleBasedViewRuleStats: RuleBasedViewRuleStats,
  },
};
