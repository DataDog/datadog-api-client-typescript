import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { SecurityAgentInvestigationAttributes } from "./SecurityAgentInvestigationAttributes";
import { SecurityAgentInvestigationCount } from "./SecurityAgentInvestigationCount";
import { SecurityAgentInvestigationCountsAttributes } from "./SecurityAgentInvestigationCountsAttributes";
import { SecurityAgentInvestigationCountsData } from "./SecurityAgentInvestigationCountsData";
import { SecurityAgentInvestigationCountsResponse } from "./SecurityAgentInvestigationCountsResponse";
import { SecurityAgentInvestigationData } from "./SecurityAgentInvestigationData";
import { SecurityAgentInvestigationEntity } from "./SecurityAgentInvestigationEntity";
import { SecurityAgentInvestigationKeyEntities } from "./SecurityAgentInvestigationKeyEntities";
import { SecurityAgentInvestigationKeyEvidence } from "./SecurityAgentInvestigationKeyEvidence";
import { SecurityAgentInvestigationListItem } from "./SecurityAgentInvestigationListItem";
import { SecurityAgentInvestigationListItemAttributes } from "./SecurityAgentInvestigationListItemAttributes";
import { SecurityAgentInvestigationMitigationAction } from "./SecurityAgentInvestigationMitigationAction";
import { SecurityAgentInvestigationMitigationSuggestion } from "./SecurityAgentInvestigationMitigationSuggestion";
import { SecurityAgentInvestigationResponse } from "./SecurityAgentInvestigationResponse";
import { SecurityAgentInvestigationResponseSuggestions } from "./SecurityAgentInvestigationResponseSuggestions";
import { SecurityAgentInvestigationRuleTuningCondition } from "./SecurityAgentInvestigationRuleTuningCondition";
import { SecurityAgentInvestigationRuleTuningSuggestion } from "./SecurityAgentInvestigationRuleTuningSuggestion";
import { SecurityAgentInvestigationRuleTuningSuggestions } from "./SecurityAgentInvestigationRuleTuningSuggestions";
import { SecurityAgentInvestigationSignal } from "./SecurityAgentInvestigationSignal";
import { SecurityAgentInvestigationStep } from "./SecurityAgentInvestigationStep";
import { SecurityAgentInvestigationsListMeta } from "./SecurityAgentInvestigationsListMeta";
import { SecurityAgentInvestigationsListResponse } from "./SecurityAgentInvestigationsListResponse";
import { SecurityAgentOutreachDomainAddRequest } from "./SecurityAgentOutreachDomainAddRequest";
import { SecurityAgentOutreachDomainAddRequestData } from "./SecurityAgentOutreachDomainAddRequestData";
import { SecurityAgentOutreachDomainAddRequestDataAttributes } from "./SecurityAgentOutreachDomainAddRequestDataAttributes";
import { SecurityAgentOutreachModeAttributes } from "./SecurityAgentOutreachModeAttributes";
import { SecurityAgentOutreachModeResponse } from "./SecurityAgentOutreachModeResponse";
import { SecurityAgentOutreachModeResponseData } from "./SecurityAgentOutreachModeResponseData";
import { SecurityAgentOutreachModeUpdateData } from "./SecurityAgentOutreachModeUpdateData";
import { SecurityAgentOutreachModeUpdateRequest } from "./SecurityAgentOutreachModeUpdateRequest";
import { SecurityAgentOutreachPolicy } from "./SecurityAgentOutreachPolicy";
import { SecurityAgentOutreachPolicyAttributes } from "./SecurityAgentOutreachPolicyAttributes";
import { SecurityAgentOutreachPolicyResponse } from "./SecurityAgentOutreachPolicyResponse";
import { SecurityAgentOutreachRule } from "./SecurityAgentOutreachRule";
import { SecurityAgentOutreachRuleUpdate } from "./SecurityAgentOutreachRuleUpdate";
import { SecurityAgentOutreachRulesUpdateAttributes } from "./SecurityAgentOutreachRulesUpdateAttributes";
import { SecurityAgentOutreachRulesUpdateRequest } from "./SecurityAgentOutreachRulesUpdateRequest";
import { SecurityAgentOutreachRulesUpdateRequestData } from "./SecurityAgentOutreachRulesUpdateRequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SecurityAgentInvestigationCountField: [
      "verdict",
      "rule_type",
      "signal_source",
      "entity",
    ],
    SecurityAgentInvestigationCountsType: ["investigation_counts"],
    SecurityAgentInvestigationField: [
      "signal_id",
      "rule_id",
      "state",
      "verdict",
      "conclusion",
      "signal",
      "key_entities",
      "key_evidence",
      "steps",
      "response_suggestions",
      "created_at",
      "updated_at",
    ],
    SecurityAgentInvestigationNoRunReason: [
      "investigation_not_started",
      "not_investigated",
      "rule_not_enabled",
      "signal_not_found",
      "org_not_activated",
    ],
    SecurityAgentInvestigationState: ["investigating", "completed", "failed"],
    SecurityAgentInvestigationType: ["investigations"],
    SecurityAgentInvestigationVerdict: ["benign", "suspicious", "malicious"],
    SecurityAgentOutreachDomainAddType: ["outreach_policy_domain_add"],
    SecurityAgentOutreachMode: ["off", "manual", "automated"],
    SecurityAgentOutreachPolicyType: ["outreach_policy"],
    SecurityAgentOutreachRulesUpdateType: ["outreach_policy_rules_update"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    SecurityAgentInvestigationAttributes: SecurityAgentInvestigationAttributes,
    SecurityAgentInvestigationCount: SecurityAgentInvestigationCount,
    SecurityAgentInvestigationCountsAttributes:
      SecurityAgentInvestigationCountsAttributes,
    SecurityAgentInvestigationCountsData: SecurityAgentInvestigationCountsData,
    SecurityAgentInvestigationCountsResponse:
      SecurityAgentInvestigationCountsResponse,
    SecurityAgentInvestigationData: SecurityAgentInvestigationData,
    SecurityAgentInvestigationEntity: SecurityAgentInvestigationEntity,
    SecurityAgentInvestigationKeyEntities:
      SecurityAgentInvestigationKeyEntities,
    SecurityAgentInvestigationKeyEvidence:
      SecurityAgentInvestigationKeyEvidence,
    SecurityAgentInvestigationListItem: SecurityAgentInvestigationListItem,
    SecurityAgentInvestigationListItemAttributes:
      SecurityAgentInvestigationListItemAttributes,
    SecurityAgentInvestigationMitigationAction:
      SecurityAgentInvestigationMitigationAction,
    SecurityAgentInvestigationMitigationSuggestion:
      SecurityAgentInvestigationMitigationSuggestion,
    SecurityAgentInvestigationResponse: SecurityAgentInvestigationResponse,
    SecurityAgentInvestigationResponseSuggestions:
      SecurityAgentInvestigationResponseSuggestions,
    SecurityAgentInvestigationRuleTuningCondition:
      SecurityAgentInvestigationRuleTuningCondition,
    SecurityAgentInvestigationRuleTuningSuggestion:
      SecurityAgentInvestigationRuleTuningSuggestion,
    SecurityAgentInvestigationRuleTuningSuggestions:
      SecurityAgentInvestigationRuleTuningSuggestions,
    SecurityAgentInvestigationSignal: SecurityAgentInvestigationSignal,
    SecurityAgentInvestigationStep: SecurityAgentInvestigationStep,
    SecurityAgentInvestigationsListMeta: SecurityAgentInvestigationsListMeta,
    SecurityAgentInvestigationsListResponse:
      SecurityAgentInvestigationsListResponse,
    SecurityAgentOutreachDomainAddRequest:
      SecurityAgentOutreachDomainAddRequest,
    SecurityAgentOutreachDomainAddRequestData:
      SecurityAgentOutreachDomainAddRequestData,
    SecurityAgentOutreachDomainAddRequestDataAttributes:
      SecurityAgentOutreachDomainAddRequestDataAttributes,
    SecurityAgentOutreachModeAttributes: SecurityAgentOutreachModeAttributes,
    SecurityAgentOutreachModeResponse: SecurityAgentOutreachModeResponse,
    SecurityAgentOutreachModeResponseData:
      SecurityAgentOutreachModeResponseData,
    SecurityAgentOutreachModeUpdateData: SecurityAgentOutreachModeUpdateData,
    SecurityAgentOutreachModeUpdateRequest:
      SecurityAgentOutreachModeUpdateRequest,
    SecurityAgentOutreachPolicy: SecurityAgentOutreachPolicy,
    SecurityAgentOutreachPolicyAttributes:
      SecurityAgentOutreachPolicyAttributes,
    SecurityAgentOutreachPolicyResponse: SecurityAgentOutreachPolicyResponse,
    SecurityAgentOutreachRule: SecurityAgentOutreachRule,
    SecurityAgentOutreachRuleUpdate: SecurityAgentOutreachRuleUpdate,
    SecurityAgentOutreachRulesUpdateAttributes:
      SecurityAgentOutreachRulesUpdateAttributes,
    SecurityAgentOutreachRulesUpdateRequest:
      SecurityAgentOutreachRulesUpdateRequest,
    SecurityAgentOutreachRulesUpdateRequestData:
      SecurityAgentOutreachRulesUpdateRequestData,
  },
};
