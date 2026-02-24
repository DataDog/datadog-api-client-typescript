import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CampaignResponse } from "./CampaignResponse";
import { CampaignResponseAttributes } from "./CampaignResponseAttributes";
import { CampaignResponseData } from "./CampaignResponseData";
import { CreateCampaignRequest } from "./CreateCampaignRequest";
import { CreateCampaignRequestAttributes } from "./CreateCampaignRequestAttributes";
import { CreateCampaignRequestData } from "./CreateCampaignRequestData";
import { CreateRuleRequest } from "./CreateRuleRequest";
import { CreateRuleRequestData } from "./CreateRuleRequestData";
import { CreateRuleResponse } from "./CreateRuleResponse";
import { CreateRuleResponseData } from "./CreateRuleResponseData";
import { DefaultRuleResponseAttributes } from "./DefaultRuleResponseAttributes";
import { DefaultRuleResponseData } from "./DefaultRuleResponseData";
import { EntityOwnerDestination } from "./EntityOwnerDestination";
import { FacetItem } from "./FacetItem";
import { FacetResponseAttributes } from "./FacetResponseAttributes";
import { FacetResponseData } from "./FacetResponseData";
import { GenerateCampaignReportRequest } from "./GenerateCampaignReportRequest";
import { GenerateCampaignReportRequestAttributes } from "./GenerateCampaignReportRequestAttributes";
import { GenerateCampaignReportRequestData } from "./GenerateCampaignReportRequestData";
import { GenerateCampaignTeamReportsRequest } from "./GenerateCampaignTeamReportsRequest";
import { GenerateCampaignTeamReportsRequestAttributes } from "./GenerateCampaignTeamReportsRequestAttributes";
import { GenerateCampaignTeamReportsRequestData } from "./GenerateCampaignTeamReportsRequestData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListCampaignsResponse } from "./ListCampaignsResponse";
import { ListDefaultRulesResponse } from "./ListDefaultRulesResponse";
import { ListFacetsResponse } from "./ListFacetsResponse";
import { ListFacetsResponseMeta } from "./ListFacetsResponseMeta";
import { ListRulesResponse } from "./ListRulesResponse";
import { ListRulesResponseDataItem } from "./ListRulesResponseDataItem";
import { ListRulesResponseLinks } from "./ListRulesResponseLinks";
import { ListScorecardsResponse } from "./ListScorecardsResponse";
import { ListScoresResponse } from "./ListScoresResponse";
import { OutcomesBatchAttributes } from "./OutcomesBatchAttributes";
import { OutcomesBatchRequest } from "./OutcomesBatchRequest";
import { OutcomesBatchRequestData } from "./OutcomesBatchRequestData";
import { OutcomesBatchRequestItem } from "./OutcomesBatchRequestItem";
import { OutcomesBatchResponse } from "./OutcomesBatchResponse";
import { OutcomesBatchResponseAttributes } from "./OutcomesBatchResponseAttributes";
import { OutcomesBatchResponseMeta } from "./OutcomesBatchResponseMeta";
import { OutcomesResponse } from "./OutcomesResponse";
import { OutcomesResponseDataItem } from "./OutcomesResponseDataItem";
import { OutcomesResponseIncludedItem } from "./OutcomesResponseIncludedItem";
import { OutcomesResponseIncludedRuleAttributes } from "./OutcomesResponseIncludedRuleAttributes";
import { OutcomesResponseLinks } from "./OutcomesResponseLinks";
import { PaginatedResponseMeta } from "./PaginatedResponseMeta";
import { RelationshipToOutcome } from "./RelationshipToOutcome";
import { RelationshipToOutcomeData } from "./RelationshipToOutcomeData";
import { RelationshipToRule } from "./RelationshipToRule";
import { RelationshipToRuleData } from "./RelationshipToRuleData";
import { RelationshipToRuleDataObject } from "./RelationshipToRuleDataObject";
import { RuleAttributes } from "./RuleAttributes";
import { RuleOutcomeRelationships } from "./RuleOutcomeRelationships";
import { ScoreResponseAttributes } from "./ScoreResponseAttributes";
import { ScoreResponseData } from "./ScoreResponseData";
import { ScorecardListResponseAttributes } from "./ScorecardListResponseAttributes";
import { ScorecardListResponseData } from "./ScorecardListResponseData";
import { SetupRulesRequest } from "./SetupRulesRequest";
import { SetupRulesRequestAttributes } from "./SetupRulesRequestAttributes";
import { SetupRulesRequestData } from "./SetupRulesRequestData";
import { SlackRoutingOptions } from "./SlackRoutingOptions";
import { UpdateCampaignRequest } from "./UpdateCampaignRequest";
import { UpdateCampaignRequestAttributes } from "./UpdateCampaignRequestAttributes";
import { UpdateCampaignRequestData } from "./UpdateCampaignRequestData";
import { UpdateOutcomesAsyncAttributes } from "./UpdateOutcomesAsyncAttributes";
import { UpdateOutcomesAsyncRequest } from "./UpdateOutcomesAsyncRequest";
import { UpdateOutcomesAsyncRequestData } from "./UpdateOutcomesAsyncRequestData";
import { UpdateOutcomesAsyncRequestItem } from "./UpdateOutcomesAsyncRequestItem";
import { UpdateRuleRequest } from "./UpdateRuleRequest";
import { UpdateRuleRequestData } from "./UpdateRuleRequestData";
import { UpdateRuleResponse } from "./UpdateRuleResponse";
import { UpdateRuleResponseData } from "./UpdateRuleResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CampaignStatus: ["in_progress", "not_started", "completed"],
    CampaignType: ["campaign"],
    DefaultRuleType: ["default-rule"],
    FacetType: ["facet"],
    GenerateCampaignReportRequestDataType: ["campaign-report"],
    GenerateCampaignTeamReportsRequestDataType: ["campaign-team-report"],
    OutcomeType: ["outcome"],
    OutcomesBatchType: ["batched-outcome"],
    RuleType: ["rule"],
    ScoreType: ["score"],
    ScorecardListType: ["scorecard"],
    ScorecardType: ["scorecard"],
    SetupRulesRequestDataType: ["setup"],
    State: ["pass", "fail", "skip"],
    UpdateOutcomesAsyncType: ["batched-outcome"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CampaignResponse: CampaignResponse,
    CampaignResponseAttributes: CampaignResponseAttributes,
    CampaignResponseData: CampaignResponseData,
    CreateCampaignRequest: CreateCampaignRequest,
    CreateCampaignRequestAttributes: CreateCampaignRequestAttributes,
    CreateCampaignRequestData: CreateCampaignRequestData,
    CreateRuleRequest: CreateRuleRequest,
    CreateRuleRequestData: CreateRuleRequestData,
    CreateRuleResponse: CreateRuleResponse,
    CreateRuleResponseData: CreateRuleResponseData,
    DefaultRuleResponseAttributes: DefaultRuleResponseAttributes,
    DefaultRuleResponseData: DefaultRuleResponseData,
    EntityOwnerDestination: EntityOwnerDestination,
    FacetItem: FacetItem,
    FacetResponseAttributes: FacetResponseAttributes,
    FacetResponseData: FacetResponseData,
    GenerateCampaignReportRequest: GenerateCampaignReportRequest,
    GenerateCampaignReportRequestAttributes:
      GenerateCampaignReportRequestAttributes,
    GenerateCampaignReportRequestData: GenerateCampaignReportRequestData,
    GenerateCampaignTeamReportsRequest: GenerateCampaignTeamReportsRequest,
    GenerateCampaignTeamReportsRequestAttributes:
      GenerateCampaignTeamReportsRequestAttributes,
    GenerateCampaignTeamReportsRequestData:
      GenerateCampaignTeamReportsRequestData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListCampaignsResponse: ListCampaignsResponse,
    ListDefaultRulesResponse: ListDefaultRulesResponse,
    ListFacetsResponse: ListFacetsResponse,
    ListFacetsResponseMeta: ListFacetsResponseMeta,
    ListRulesResponse: ListRulesResponse,
    ListRulesResponseDataItem: ListRulesResponseDataItem,
    ListRulesResponseLinks: ListRulesResponseLinks,
    ListScorecardsResponse: ListScorecardsResponse,
    ListScoresResponse: ListScoresResponse,
    OutcomesBatchAttributes: OutcomesBatchAttributes,
    OutcomesBatchRequest: OutcomesBatchRequest,
    OutcomesBatchRequestData: OutcomesBatchRequestData,
    OutcomesBatchRequestItem: OutcomesBatchRequestItem,
    OutcomesBatchResponse: OutcomesBatchResponse,
    OutcomesBatchResponseAttributes: OutcomesBatchResponseAttributes,
    OutcomesBatchResponseMeta: OutcomesBatchResponseMeta,
    OutcomesResponse: OutcomesResponse,
    OutcomesResponseDataItem: OutcomesResponseDataItem,
    OutcomesResponseIncludedItem: OutcomesResponseIncludedItem,
    OutcomesResponseIncludedRuleAttributes:
      OutcomesResponseIncludedRuleAttributes,
    OutcomesResponseLinks: OutcomesResponseLinks,
    PaginatedResponseMeta: PaginatedResponseMeta,
    RelationshipToOutcome: RelationshipToOutcome,
    RelationshipToOutcomeData: RelationshipToOutcomeData,
    RelationshipToRule: RelationshipToRule,
    RelationshipToRuleData: RelationshipToRuleData,
    RelationshipToRuleDataObject: RelationshipToRuleDataObject,
    RuleAttributes: RuleAttributes,
    RuleOutcomeRelationships: RuleOutcomeRelationships,
    ScoreResponseAttributes: ScoreResponseAttributes,
    ScoreResponseData: ScoreResponseData,
    ScorecardListResponseAttributes: ScorecardListResponseAttributes,
    ScorecardListResponseData: ScorecardListResponseData,
    SetupRulesRequest: SetupRulesRequest,
    SetupRulesRequestAttributes: SetupRulesRequestAttributes,
    SetupRulesRequestData: SetupRulesRequestData,
    SlackRoutingOptions: SlackRoutingOptions,
    UpdateCampaignRequest: UpdateCampaignRequest,
    UpdateCampaignRequestAttributes: UpdateCampaignRequestAttributes,
    UpdateCampaignRequestData: UpdateCampaignRequestData,
    UpdateOutcomesAsyncAttributes: UpdateOutcomesAsyncAttributes,
    UpdateOutcomesAsyncRequest: UpdateOutcomesAsyncRequest,
    UpdateOutcomesAsyncRequestData: UpdateOutcomesAsyncRequestData,
    UpdateOutcomesAsyncRequestItem: UpdateOutcomesAsyncRequestItem,
    UpdateRuleRequest: UpdateRuleRequest,
    UpdateRuleRequestData: UpdateRuleRequestData,
    UpdateRuleResponse: UpdateRuleResponse,
    UpdateRuleResponseData: UpdateRuleResponseData,
  },
};
