import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { GeneralInvestigationAttributesWithTimeBounds } from "./GeneralInvestigationAttributesWithTimeBounds";
import { GeneralInvestigationAttributesWithoutTimeBounds } from "./GeneralInvestigationAttributesWithoutTimeBounds";
import { GeneralInvestigationTrigger } from "./GeneralInvestigationTrigger";
import { GetInvestigationResponse } from "./GetInvestigationResponse";
import { GetInvestigationResponseData } from "./GetInvestigationResponseData";
import { GetInvestigationResponseDataAttributes } from "./GetInvestigationResponseDataAttributes";
import { GetInvestigationResponseLinks } from "./GetInvestigationResponseLinks";
import { InvestigationConclusion } from "./InvestigationConclusion";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListInvestigationsResponse } from "./ListInvestigationsResponse";
import { ListInvestigationsResponseData } from "./ListInvestigationsResponseData";
import { ListInvestigationsResponseDataAttributes } from "./ListInvestigationsResponseDataAttributes";
import { ListInvestigationsResponseLinks } from "./ListInvestigationsResponseLinks";
import { ListInvestigationsResponseMeta } from "./ListInvestigationsResponseMeta";
import { ListInvestigationsResponseMetaPage } from "./ListInvestigationsResponseMetaPage";
import { MonitorAlertTrigger } from "./MonitorAlertTrigger";
import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
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
import { TriggerInvestigationRequest } from "./TriggerInvestigationRequest";
import { TriggerInvestigationRequestData } from "./TriggerInvestigationRequestData";
import { TriggerInvestigationRequestDataAttributes } from "./TriggerInvestigationRequestDataAttributes";
import { TriggerInvestigationResponse } from "./TriggerInvestigationResponse";
import { TriggerInvestigationResponseData } from "./TriggerInvestigationResponseData";
import { TriggerInvestigationResponseDataAttributes } from "./TriggerInvestigationResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GeneralInvestigationTriggerType: ["general_investigation"],
    InvestigationType: ["investigation"],
    MonitorAlertTriggerType: ["monitor_alert_trigger"],
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
    TriggerInvestigationRequestType: ["trigger_investigation_request"],
    TriggerInvestigationResponseType: ["trigger_investigation_response"],
  },
  oneOfMap: {
    GeneralInvestigationAttributes: [
      "GeneralInvestigationAttributesWithoutTimeBounds",
      "GeneralInvestigationAttributesWithTimeBounds",
    ],
    TriggerAttributes: ["MonitorAlertTrigger", "GeneralInvestigationTrigger"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GeneralInvestigationAttributesWithTimeBounds:
      GeneralInvestigationAttributesWithTimeBounds,
    GeneralInvestigationAttributesWithoutTimeBounds:
      GeneralInvestigationAttributesWithoutTimeBounds,
    GeneralInvestigationTrigger: GeneralInvestigationTrigger,
    GetInvestigationResponse: GetInvestigationResponse,
    GetInvestigationResponseData: GetInvestigationResponseData,
    GetInvestigationResponseDataAttributes:
      GetInvestigationResponseDataAttributes,
    GetInvestigationResponseLinks: GetInvestigationResponseLinks,
    InvestigationConclusion: InvestigationConclusion,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListInvestigationsResponse: ListInvestigationsResponse,
    ListInvestigationsResponseData: ListInvestigationsResponseData,
    ListInvestigationsResponseDataAttributes:
      ListInvestigationsResponseDataAttributes,
    ListInvestigationsResponseLinks: ListInvestigationsResponseLinks,
    ListInvestigationsResponseMeta: ListInvestigationsResponseMeta,
    ListInvestigationsResponseMetaPage: ListInvestigationsResponseMetaPage,
    MonitorAlertTrigger: MonitorAlertTrigger,
    MonitorAlertTriggerAttributes: MonitorAlertTriggerAttributes,
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
    TriggerInvestigationRequest: TriggerInvestigationRequest,
    TriggerInvestigationRequestData: TriggerInvestigationRequestData,
    TriggerInvestigationRequestDataAttributes:
      TriggerInvestigationRequestDataAttributes,
    TriggerInvestigationResponse: TriggerInvestigationResponse,
    TriggerInvestigationResponseData: TriggerInvestigationResponseData,
    TriggerInvestigationResponseDataAttributes:
      TriggerInvestigationResponseDataAttributes,
  },
};
