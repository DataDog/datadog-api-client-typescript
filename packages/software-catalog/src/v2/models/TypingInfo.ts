import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { CampaignResponse } from "./CampaignResponse";
import { CampaignResponseAttributes } from "./CampaignResponseAttributes";
import { CampaignResponseData } from "./CampaignResponseData";
import { CreateCampaignRequest } from "./CreateCampaignRequest";
import { CreateCampaignRequestAttributes } from "./CreateCampaignRequestAttributes";
import { CreateCampaignRequestData } from "./CreateCampaignRequestData";
import { CreateOpenAPIResponse } from "./CreateOpenAPIResponse";
import { CreateOpenAPIResponseAttributes } from "./CreateOpenAPIResponseAttributes";
import { CreateOpenAPIResponseData } from "./CreateOpenAPIResponseData";
import { CreateRuleRequest } from "./CreateRuleRequest";
import { CreateRuleRequestData } from "./CreateRuleRequestData";
import { CreateRuleResponse } from "./CreateRuleResponse";
import { CreateRuleResponseData } from "./CreateRuleResponseData";
import { EntityAttributes } from "./EntityAttributes";
import { EntityData } from "./EntityData";
import { EntityIntegrationConfigAttributes } from "./EntityIntegrationConfigAttributes";
import { EntityIntegrationConfigData } from "./EntityIntegrationConfigData";
import { EntityIntegrationConfigRequest } from "./EntityIntegrationConfigRequest";
import { EntityIntegrationConfigRequestAttributes } from "./EntityIntegrationConfigRequestAttributes";
import { EntityIntegrationConfigRequestData } from "./EntityIntegrationConfigRequestData";
import { EntityIntegrationConfigResponse } from "./EntityIntegrationConfigResponse";
import { EntityMeta } from "./EntityMeta";
import { EntityRelationships } from "./EntityRelationships";
import { EntityResponseArray } from "./EntityResponseArray";
import { EntityResponseDataAttributes } from "./EntityResponseDataAttributes";
import { EntityResponseDataRelationships } from "./EntityResponseDataRelationships";
import { EntityResponseDataRelationshipsIncidents } from "./EntityResponseDataRelationshipsIncidents";
import { EntityResponseDataRelationshipsIncidentsDataItems } from "./EntityResponseDataRelationshipsIncidentsDataItems";
import { EntityResponseDataRelationshipsOncalls } from "./EntityResponseDataRelationshipsOncalls";
import { EntityResponseDataRelationshipsOncallsDataItems } from "./EntityResponseDataRelationshipsOncallsDataItems";
import { EntityResponseDataRelationshipsRawSchema } from "./EntityResponseDataRelationshipsRawSchema";
import { EntityResponseDataRelationshipsRawSchemaData } from "./EntityResponseDataRelationshipsRawSchemaData";
import { EntityResponseDataRelationshipsRelatedEntities } from "./EntityResponseDataRelationshipsRelatedEntities";
import { EntityResponseDataRelationshipsRelatedEntitiesDataItems } from "./EntityResponseDataRelationshipsRelatedEntitiesDataItems";
import { EntityResponseDataRelationshipsSchema } from "./EntityResponseDataRelationshipsSchema";
import { EntityResponseDataRelationshipsSchemaData } from "./EntityResponseDataRelationshipsSchemaData";
import { EntityResponseIncludedIncident } from "./EntityResponseIncludedIncident";
import { EntityResponseIncludedOncall } from "./EntityResponseIncludedOncall";
import { EntityResponseIncludedRawSchema } from "./EntityResponseIncludedRawSchema";
import { EntityResponseIncludedRawSchemaAttributes } from "./EntityResponseIncludedRawSchemaAttributes";
import { EntityResponseIncludedRelatedEntity } from "./EntityResponseIncludedRelatedEntity";
import { EntityResponseIncludedRelatedEntityAttributes } from "./EntityResponseIncludedRelatedEntityAttributes";
import { EntityResponseIncludedRelatedEntityMeta } from "./EntityResponseIncludedRelatedEntityMeta";
import { EntityResponseIncludedRelatedIncidentAttributes } from "./EntityResponseIncludedRelatedIncidentAttributes";
import { EntityResponseIncludedRelatedOncallAttributes } from "./EntityResponseIncludedRelatedOncallAttributes";
import { EntityResponseIncludedRelatedOncallEscalationItem } from "./EntityResponseIncludedRelatedOncallEscalationItem";
import { EntityResponseIncludedSchema } from "./EntityResponseIncludedSchema";
import { EntityResponseIncludedSchemaAttributes } from "./EntityResponseIncludedSchemaAttributes";
import { EntityResponseMeta } from "./EntityResponseMeta";
import { EntityToIncidents } from "./EntityToIncidents";
import { EntityToOncalls } from "./EntityToOncalls";
import { EntityToRawSchema } from "./EntityToRawSchema";
import { EntityToRelatedEntities } from "./EntityToRelatedEntities";
import { EntityToSchema } from "./EntityToSchema";
import { EntityV3API } from "./EntityV3API";
import { EntityV3APIDatadog } from "./EntityV3APIDatadog";
import { EntityV3APISpec } from "./EntityV3APISpec";
import { EntityV3APISpecInterfaceDefinition } from "./EntityV3APISpecInterfaceDefinition";
import { EntityV3APISpecInterfaceFileRef } from "./EntityV3APISpecInterfaceFileRef";
import { EntityV3DatadogCodeLocationItem } from "./EntityV3DatadogCodeLocationItem";
import { EntityV3DatadogEventItem } from "./EntityV3DatadogEventItem";
import { EntityV3DatadogIntegrationOpsgenie } from "./EntityV3DatadogIntegrationOpsgenie";
import { EntityV3DatadogIntegrationPagerduty } from "./EntityV3DatadogIntegrationPagerduty";
import { EntityV3DatadogLogItem } from "./EntityV3DatadogLogItem";
import { EntityV3DatadogPerformance } from "./EntityV3DatadogPerformance";
import { EntityV3DatadogPipelines } from "./EntityV3DatadogPipelines";
import { EntityV3Datastore } from "./EntityV3Datastore";
import { EntityV3DatastoreDatadog } from "./EntityV3DatastoreDatadog";
import { EntityV3DatastoreSpec } from "./EntityV3DatastoreSpec";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";
import { EntityV3MetadataAdditionalOwnersItems } from "./EntityV3MetadataAdditionalOwnersItems";
import { EntityV3MetadataContactsItems } from "./EntityV3MetadataContactsItems";
import { EntityV3MetadataLinksItems } from "./EntityV3MetadataLinksItems";
import { EntityV3Queue } from "./EntityV3Queue";
import { EntityV3QueueDatadog } from "./EntityV3QueueDatadog";
import { EntityV3QueueSpec } from "./EntityV3QueueSpec";
import { EntityV3Service } from "./EntityV3Service";
import { EntityV3ServiceDatadog } from "./EntityV3ServiceDatadog";
import { EntityV3ServiceSpec } from "./EntityV3ServiceSpec";
import { EntityV3System } from "./EntityV3System";
import { EntityV3SystemDatadog } from "./EntityV3SystemDatadog";
import { EntityV3SystemSpec } from "./EntityV3SystemSpec";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { KindAttributes } from "./KindAttributes";
import { KindData } from "./KindData";
import { KindMetadata } from "./KindMetadata";
import { KindObj } from "./KindObj";
import { KindResponseMeta } from "./KindResponseMeta";
import { ListAPIsResponse } from "./ListAPIsResponse";
import { ListAPIsResponseData } from "./ListAPIsResponseData";
import { ListAPIsResponseDataAttributes } from "./ListAPIsResponseDataAttributes";
import { ListAPIsResponseMeta } from "./ListAPIsResponseMeta";
import { ListAPIsResponseMetaPagination } from "./ListAPIsResponseMetaPagination";
import { ListCampaignsResponse } from "./ListCampaignsResponse";
import { ListEntityCatalogResponse } from "./ListEntityCatalogResponse";
import { ListEntityCatalogResponseLinks } from "./ListEntityCatalogResponseLinks";
import { ListKindCatalogResponse } from "./ListKindCatalogResponse";
import { ListRelationCatalogResponse } from "./ListRelationCatalogResponse";
import { ListRelationCatalogResponseLinks } from "./ListRelationCatalogResponseLinks";
import { ListRulesResponse } from "./ListRulesResponse";
import { ListRulesResponseDataItem } from "./ListRulesResponseDataItem";
import { ListRulesResponseLinks } from "./ListRulesResponseLinks";
import { ListScorecardScoresMeta } from "./ListScorecardScoresMeta";
import { ListScorecardScoresResponse } from "./ListScorecardScoresResponse";
import { ListScorecardsResponse } from "./ListScorecardsResponse";
import { OpenAPIEndpoint } from "./OpenAPIEndpoint";
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
import { PreviewEntityResponseData } from "./PreviewEntityResponseData";
import { RelationAttributes } from "./RelationAttributes";
import { RelationEntity } from "./RelationEntity";
import { RelationMeta } from "./RelationMeta";
import { RelationRelationships } from "./RelationRelationships";
import { RelationResponse } from "./RelationResponse";
import { RelationResponseMeta } from "./RelationResponseMeta";
import { RelationToEntity } from "./RelationToEntity";
import { RelationshipItem } from "./RelationshipItem";
import { RelationshipToOutcome } from "./RelationshipToOutcome";
import { RelationshipToOutcomeData } from "./RelationshipToOutcomeData";
import { RelationshipToRule } from "./RelationshipToRule";
import { RelationshipToRuleData } from "./RelationshipToRuleData";
import { RelationshipToRuleDataObject } from "./RelationshipToRuleDataObject";
import { RuleAttributes } from "./RuleAttributes";
import { RuleAttributesRequest } from "./RuleAttributesRequest";
import { RuleOutcomeRelationships } from "./RuleOutcomeRelationships";
import { ScorecardListResponseAttributes } from "./ScorecardListResponseAttributes";
import { ScorecardListResponseData } from "./ScorecardListResponseData";
import { ScorecardScoreAttributes } from "./ScorecardScoreAttributes";
import { ScorecardScoreData } from "./ScorecardScoreData";
import { ScorecardScoreRelationshipData } from "./ScorecardScoreRelationshipData";
import { ScorecardScoreRelationshipItem } from "./ScorecardScoreRelationshipItem";
import { ScorecardScoreRelationships } from "./ScorecardScoreRelationships";
import { ServiceDefinitionCreateResponse } from "./ServiceDefinitionCreateResponse";
import { ServiceDefinitionData } from "./ServiceDefinitionData";
import { ServiceDefinitionDataAttributes } from "./ServiceDefinitionDataAttributes";
import { ServiceDefinitionGetResponse } from "./ServiceDefinitionGetResponse";
import { ServiceDefinitionMeta } from "./ServiceDefinitionMeta";
import { ServiceDefinitionMetaWarnings } from "./ServiceDefinitionMetaWarnings";
import { ServiceDefinitionV1 } from "./ServiceDefinitionV1";
import { ServiceDefinitionV1Contact } from "./ServiceDefinitionV1Contact";
import { ServiceDefinitionV1Info } from "./ServiceDefinitionV1Info";
import { ServiceDefinitionV1Integrations } from "./ServiceDefinitionV1Integrations";
import { ServiceDefinitionV1Org } from "./ServiceDefinitionV1Org";
import { ServiceDefinitionV1Resource } from "./ServiceDefinitionV1Resource";
import { ServiceDefinitionV2 } from "./ServiceDefinitionV2";
import { ServiceDefinitionV2Doc } from "./ServiceDefinitionV2Doc";
import { ServiceDefinitionV2Dot1 } from "./ServiceDefinitionV2Dot1";
import { ServiceDefinitionV2Dot1Email } from "./ServiceDefinitionV2Dot1Email";
import { ServiceDefinitionV2Dot1Integrations } from "./ServiceDefinitionV2Dot1Integrations";
import { ServiceDefinitionV2Dot1Link } from "./ServiceDefinitionV2Dot1Link";
import { ServiceDefinitionV2Dot1MSTeams } from "./ServiceDefinitionV2Dot1MSTeams";
import { ServiceDefinitionV2Dot1Opsgenie } from "./ServiceDefinitionV2Dot1Opsgenie";
import { ServiceDefinitionV2Dot1Pagerduty } from "./ServiceDefinitionV2Dot1Pagerduty";
import { ServiceDefinitionV2Dot1Slack } from "./ServiceDefinitionV2Dot1Slack";
import { ServiceDefinitionV2Dot2 } from "./ServiceDefinitionV2Dot2";
import { ServiceDefinitionV2Dot2Contact } from "./ServiceDefinitionV2Dot2Contact";
import { ServiceDefinitionV2Dot2Integrations } from "./ServiceDefinitionV2Dot2Integrations";
import { ServiceDefinitionV2Dot2Link } from "./ServiceDefinitionV2Dot2Link";
import { ServiceDefinitionV2Dot2Opsgenie } from "./ServiceDefinitionV2Dot2Opsgenie";
import { ServiceDefinitionV2Dot2Pagerduty } from "./ServiceDefinitionV2Dot2Pagerduty";
import { ServiceDefinitionV2Email } from "./ServiceDefinitionV2Email";
import { ServiceDefinitionV2Integrations } from "./ServiceDefinitionV2Integrations";
import { ServiceDefinitionV2Link } from "./ServiceDefinitionV2Link";
import { ServiceDefinitionV2MSTeams } from "./ServiceDefinitionV2MSTeams";
import { ServiceDefinitionV2Opsgenie } from "./ServiceDefinitionV2Opsgenie";
import { ServiceDefinitionV2Repo } from "./ServiceDefinitionV2Repo";
import { ServiceDefinitionV2Slack } from "./ServiceDefinitionV2Slack";
import { ServiceDefinitionsListResponse } from "./ServiceDefinitionsListResponse";
import { UpdateCampaignRequest } from "./UpdateCampaignRequest";
import { UpdateCampaignRequestAttributes } from "./UpdateCampaignRequestAttributes";
import { UpdateCampaignRequestData } from "./UpdateCampaignRequestData";
import { UpdateOpenAPIResponse } from "./UpdateOpenAPIResponse";
import { UpdateOpenAPIResponseAttributes } from "./UpdateOpenAPIResponseAttributes";
import { UpdateOpenAPIResponseData } from "./UpdateOpenAPIResponseData";
import { UpdateOutcomesAsyncAttributes } from "./UpdateOutcomesAsyncAttributes";
import { UpdateOutcomesAsyncRequest } from "./UpdateOutcomesAsyncRequest";
import { UpdateOutcomesAsyncRequestData } from "./UpdateOutcomesAsyncRequestData";
import { UpdateOutcomesAsyncRequestItem } from "./UpdateOutcomesAsyncRequestItem";
import { UpdateRuleRequest } from "./UpdateRuleRequest";
import { UpdateRuleRequestData } from "./UpdateRuleRequestData";
import { UpdateRuleResponse } from "./UpdateRuleResponse";
import { UpdateRuleResponseData } from "./UpdateRuleResponseData";
import { UpsertCatalogEntityResponse } from "./UpsertCatalogEntityResponse";
import { UpsertCatalogKindResponse } from "./UpsertCatalogKindResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CampaignStatus: ["in_progress", "not_started", "completed"],
    CampaignType: ["campaign"],
    EntityIntegrationConfigRequestType: ["entity_integration_config_requests"],
    EntityIntegrationConfigType: ["entity_integration_configs"],
    EntityResponseDataRelationshipsIncidentsDataItemsType: ["incident"],
    EntityResponseDataRelationshipsOncallsDataItemsType: ["oncall"],
    EntityResponseDataRelationshipsRawSchemaDataType: ["rawSchema"],
    EntityResponseDataRelationshipsRelatedEntitiesDataItemsType: [
      "relatedEntity",
    ],
    EntityResponseDataRelationshipsSchemaDataType: ["schema"],
    EntityResponseDataType: ["entity"],
    EntityResponseIncludedIncidentType: ["incident"],
    EntityResponseIncludedOncallType: ["oncall"],
    EntityResponseIncludedRawSchemaType: ["rawSchema"],
    EntityResponseIncludedRelatedEntityType: ["relatedEntity"],
    EntityResponseIncludedSchemaType: ["schema"],
    EntityV3APIKind: ["api"],
    EntityV3APIVersion: ["v3", "v2.2", "v2.1", "v2"],
    EntityV3DatastoreKind: ["datastore"],
    EntityV3QueueKind: ["queue"],
    EntityV3ServiceKind: ["service"],
    EntityV3SystemKind: ["system"],
    IncludeType: ["schema", "raw_schema", "oncall", "incident", "relation"],
    OutcomeType: ["outcome"],
    OutcomesBatchType: ["batched-outcome"],
    RelationIncludeType: ["entity", "schema"],
    RelationResponseType: ["relation"],
    RelationType: [
      "RelationTypeOwns",
      "RelationTypeOwnedBy",
      "RelationTypeDependsOn",
      "RelationTypeDependencyOf",
      "RelationTypePartsOf",
      "RelationTypeHasPart",
      "RelationTypeOtherOwns",
      "RelationTypeOtherOwnedBy",
      "RelationTypeImplementedBy",
      "RelationTypeImplements",
    ],
    RuleType: ["rule"],
    ScorecardListType: ["scorecard"],
    ScorecardScoreDataType: ["score"],
    ScorecardScoresAggregation: [
      "by-entity",
      "by-rule",
      "by-scorecard",
      "by-team",
      "by-kind",
    ],
    ScorecardType: ["scorecard"],
    ServiceDefinitionSchemaVersions: ["v1", "v2", "v2.1", "v2.2"],
    ServiceDefinitionV1ResourceType: [
      "doc",
      "wiki",
      "runbook",
      "url",
      "repo",
      "dashboard",
      "oncall",
      "code",
      "link",
    ],
    ServiceDefinitionV1Version: ["v1"],
    ServiceDefinitionV2Dot1EmailType: ["email"],
    ServiceDefinitionV2Dot1LinkType: [
      "doc",
      "repo",
      "runbook",
      "dashboard",
      "other",
    ],
    ServiceDefinitionV2Dot1MSTeamsType: ["microsoft-teams"],
    ServiceDefinitionV2Dot1OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2Dot1SlackType: ["slack"],
    ServiceDefinitionV2Dot1Version: ["v2.1"],
    ServiceDefinitionV2Dot2OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2Dot2Version: ["v2.2"],
    ServiceDefinitionV2EmailType: ["email"],
    ServiceDefinitionV2LinkType: [
      "doc",
      "wiki",
      "runbook",
      "url",
      "repo",
      "dashboard",
      "oncall",
      "code",
      "link",
    ],
    ServiceDefinitionV2MSTeamsType: ["microsoft-teams"],
    ServiceDefinitionV2OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2SlackType: ["slack"],
    ServiceDefinitionV2Version: ["v2"],
    State: ["pass", "fail", "skip"],
    UpdateOutcomesAsyncType: ["batched-outcome"],
  },
  oneOfMap: {
    EntityV3: [
      "EntityV3Service",
      "EntityV3Datastore",
      "EntityV3Queue",
      "EntityV3System",
      "EntityV3API",
    ],
    EntityV3APISpecInterface: [
      "EntityV3APISpecInterfaceFileRef",
      "EntityV3APISpecInterfaceDefinition",
    ],
    ListEntityCatalogResponseIncludedItem: [
      "EntityResponseIncludedSchema",
      "EntityResponseIncludedRawSchema",
      "EntityResponseIncludedRelatedEntity",
      "EntityResponseIncludedOncall",
      "EntityResponseIncludedIncident",
    ],
    ServiceDefinitionSchema: [
      "ServiceDefinitionV1",
      "ServiceDefinitionV2",
      "ServiceDefinitionV2Dot1",
      "ServiceDefinitionV2Dot2",
    ],
    ServiceDefinitionV2Contact: [
      "ServiceDefinitionV2Email",
      "ServiceDefinitionV2Slack",
      "ServiceDefinitionV2MSTeams",
    ],
    ServiceDefinitionV2Dot1Contact: [
      "ServiceDefinitionV2Dot1Email",
      "ServiceDefinitionV2Dot1Slack",
      "ServiceDefinitionV2Dot1MSTeams",
    ],
    ServiceDefinitionsCreateRequest: [
      "ServiceDefinitionV2Dot2",
      "ServiceDefinitionV2Dot1",
      "ServiceDefinitionV2",
      "string",
    ],
    UpsertCatalogEntityRequest: ["EntityV3", "string"],
    UpsertCatalogEntityResponseIncludedItem: ["EntityResponseIncludedSchema"],
    UpsertCatalogKindRequest: ["KindObj", "string"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CampaignResponse: CampaignResponse,
    CampaignResponseAttributes: CampaignResponseAttributes,
    CampaignResponseData: CampaignResponseData,
    CreateCampaignRequest: CreateCampaignRequest,
    CreateCampaignRequestAttributes: CreateCampaignRequestAttributes,
    CreateCampaignRequestData: CreateCampaignRequestData,
    CreateOpenAPIResponse: CreateOpenAPIResponse,
    CreateOpenAPIResponseAttributes: CreateOpenAPIResponseAttributes,
    CreateOpenAPIResponseData: CreateOpenAPIResponseData,
    CreateRuleRequest: CreateRuleRequest,
    CreateRuleRequestData: CreateRuleRequestData,
    CreateRuleResponse: CreateRuleResponse,
    CreateRuleResponseData: CreateRuleResponseData,
    EntityAttributes: EntityAttributes,
    EntityData: EntityData,
    EntityIntegrationConfigAttributes: EntityIntegrationConfigAttributes,
    EntityIntegrationConfigData: EntityIntegrationConfigData,
    EntityIntegrationConfigRequest: EntityIntegrationConfigRequest,
    EntityIntegrationConfigRequestAttributes:
      EntityIntegrationConfigRequestAttributes,
    EntityIntegrationConfigRequestData: EntityIntegrationConfigRequestData,
    EntityIntegrationConfigResponse: EntityIntegrationConfigResponse,
    EntityMeta: EntityMeta,
    EntityRelationships: EntityRelationships,
    EntityResponseArray: EntityResponseArray,
    EntityResponseDataAttributes: EntityResponseDataAttributes,
    EntityResponseDataRelationships: EntityResponseDataRelationships,
    EntityResponseDataRelationshipsIncidents:
      EntityResponseDataRelationshipsIncidents,
    EntityResponseDataRelationshipsIncidentsDataItems:
      EntityResponseDataRelationshipsIncidentsDataItems,
    EntityResponseDataRelationshipsOncalls:
      EntityResponseDataRelationshipsOncalls,
    EntityResponseDataRelationshipsOncallsDataItems:
      EntityResponseDataRelationshipsOncallsDataItems,
    EntityResponseDataRelationshipsRawSchema:
      EntityResponseDataRelationshipsRawSchema,
    EntityResponseDataRelationshipsRawSchemaData:
      EntityResponseDataRelationshipsRawSchemaData,
    EntityResponseDataRelationshipsRelatedEntities:
      EntityResponseDataRelationshipsRelatedEntities,
    EntityResponseDataRelationshipsRelatedEntitiesDataItems:
      EntityResponseDataRelationshipsRelatedEntitiesDataItems,
    EntityResponseDataRelationshipsSchema:
      EntityResponseDataRelationshipsSchema,
    EntityResponseDataRelationshipsSchemaData:
      EntityResponseDataRelationshipsSchemaData,
    EntityResponseIncludedIncident: EntityResponseIncludedIncident,
    EntityResponseIncludedOncall: EntityResponseIncludedOncall,
    EntityResponseIncludedRawSchema: EntityResponseIncludedRawSchema,
    EntityResponseIncludedRawSchemaAttributes:
      EntityResponseIncludedRawSchemaAttributes,
    EntityResponseIncludedRelatedEntity: EntityResponseIncludedRelatedEntity,
    EntityResponseIncludedRelatedEntityAttributes:
      EntityResponseIncludedRelatedEntityAttributes,
    EntityResponseIncludedRelatedEntityMeta:
      EntityResponseIncludedRelatedEntityMeta,
    EntityResponseIncludedRelatedIncidentAttributes:
      EntityResponseIncludedRelatedIncidentAttributes,
    EntityResponseIncludedRelatedOncallAttributes:
      EntityResponseIncludedRelatedOncallAttributes,
    EntityResponseIncludedRelatedOncallEscalationItem:
      EntityResponseIncludedRelatedOncallEscalationItem,
    EntityResponseIncludedSchema: EntityResponseIncludedSchema,
    EntityResponseIncludedSchemaAttributes:
      EntityResponseIncludedSchemaAttributes,
    EntityResponseMeta: EntityResponseMeta,
    EntityToIncidents: EntityToIncidents,
    EntityToOncalls: EntityToOncalls,
    EntityToRawSchema: EntityToRawSchema,
    EntityToRelatedEntities: EntityToRelatedEntities,
    EntityToSchema: EntityToSchema,
    EntityV3API: EntityV3API,
    EntityV3APIDatadog: EntityV3APIDatadog,
    EntityV3APISpec: EntityV3APISpec,
    EntityV3APISpecInterfaceDefinition: EntityV3APISpecInterfaceDefinition,
    EntityV3APISpecInterfaceFileRef: EntityV3APISpecInterfaceFileRef,
    EntityV3DatadogCodeLocationItem: EntityV3DatadogCodeLocationItem,
    EntityV3DatadogEventItem: EntityV3DatadogEventItem,
    EntityV3DatadogIntegrationOpsgenie: EntityV3DatadogIntegrationOpsgenie,
    EntityV3DatadogIntegrationPagerduty: EntityV3DatadogIntegrationPagerduty,
    EntityV3DatadogLogItem: EntityV3DatadogLogItem,
    EntityV3DatadogPerformance: EntityV3DatadogPerformance,
    EntityV3DatadogPipelines: EntityV3DatadogPipelines,
    EntityV3Datastore: EntityV3Datastore,
    EntityV3DatastoreDatadog: EntityV3DatastoreDatadog,
    EntityV3DatastoreSpec: EntityV3DatastoreSpec,
    EntityV3Integrations: EntityV3Integrations,
    EntityV3Metadata: EntityV3Metadata,
    EntityV3MetadataAdditionalOwnersItems:
      EntityV3MetadataAdditionalOwnersItems,
    EntityV3MetadataContactsItems: EntityV3MetadataContactsItems,
    EntityV3MetadataLinksItems: EntityV3MetadataLinksItems,
    EntityV3Queue: EntityV3Queue,
    EntityV3QueueDatadog: EntityV3QueueDatadog,
    EntityV3QueueSpec: EntityV3QueueSpec,
    EntityV3Service: EntityV3Service,
    EntityV3ServiceDatadog: EntityV3ServiceDatadog,
    EntityV3ServiceSpec: EntityV3ServiceSpec,
    EntityV3System: EntityV3System,
    EntityV3SystemDatadog: EntityV3SystemDatadog,
    EntityV3SystemSpec: EntityV3SystemSpec,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    KindAttributes: KindAttributes,
    KindData: KindData,
    KindMetadata: KindMetadata,
    KindObj: KindObj,
    KindResponseMeta: KindResponseMeta,
    ListAPIsResponse: ListAPIsResponse,
    ListAPIsResponseData: ListAPIsResponseData,
    ListAPIsResponseDataAttributes: ListAPIsResponseDataAttributes,
    ListAPIsResponseMeta: ListAPIsResponseMeta,
    ListAPIsResponseMetaPagination: ListAPIsResponseMetaPagination,
    ListCampaignsResponse: ListCampaignsResponse,
    ListEntityCatalogResponse: ListEntityCatalogResponse,
    ListEntityCatalogResponseLinks: ListEntityCatalogResponseLinks,
    ListKindCatalogResponse: ListKindCatalogResponse,
    ListRelationCatalogResponse: ListRelationCatalogResponse,
    ListRelationCatalogResponseLinks: ListRelationCatalogResponseLinks,
    ListRulesResponse: ListRulesResponse,
    ListRulesResponseDataItem: ListRulesResponseDataItem,
    ListRulesResponseLinks: ListRulesResponseLinks,
    ListScorecardScoresMeta: ListScorecardScoresMeta,
    ListScorecardScoresResponse: ListScorecardScoresResponse,
    ListScorecardsResponse: ListScorecardsResponse,
    OpenAPIEndpoint: OpenAPIEndpoint,
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
    PreviewEntityResponseData: PreviewEntityResponseData,
    RelationAttributes: RelationAttributes,
    RelationEntity: RelationEntity,
    RelationMeta: RelationMeta,
    RelationRelationships: RelationRelationships,
    RelationResponse: RelationResponse,
    RelationResponseMeta: RelationResponseMeta,
    RelationToEntity: RelationToEntity,
    RelationshipItem: RelationshipItem,
    RelationshipToOutcome: RelationshipToOutcome,
    RelationshipToOutcomeData: RelationshipToOutcomeData,
    RelationshipToRule: RelationshipToRule,
    RelationshipToRuleData: RelationshipToRuleData,
    RelationshipToRuleDataObject: RelationshipToRuleDataObject,
    RuleAttributes: RuleAttributes,
    RuleAttributesRequest: RuleAttributesRequest,
    RuleOutcomeRelationships: RuleOutcomeRelationships,
    ScorecardListResponseAttributes: ScorecardListResponseAttributes,
    ScorecardListResponseData: ScorecardListResponseData,
    ScorecardScoreAttributes: ScorecardScoreAttributes,
    ScorecardScoreData: ScorecardScoreData,
    ScorecardScoreRelationshipData: ScorecardScoreRelationshipData,
    ScorecardScoreRelationshipItem: ScorecardScoreRelationshipItem,
    ScorecardScoreRelationships: ScorecardScoreRelationships,
    ServiceDefinitionCreateResponse: ServiceDefinitionCreateResponse,
    ServiceDefinitionData: ServiceDefinitionData,
    ServiceDefinitionDataAttributes: ServiceDefinitionDataAttributes,
    ServiceDefinitionGetResponse: ServiceDefinitionGetResponse,
    ServiceDefinitionMeta: ServiceDefinitionMeta,
    ServiceDefinitionMetaWarnings: ServiceDefinitionMetaWarnings,
    ServiceDefinitionV1: ServiceDefinitionV1,
    ServiceDefinitionV1Contact: ServiceDefinitionV1Contact,
    ServiceDefinitionV1Info: ServiceDefinitionV1Info,
    ServiceDefinitionV1Integrations: ServiceDefinitionV1Integrations,
    ServiceDefinitionV1Org: ServiceDefinitionV1Org,
    ServiceDefinitionV1Resource: ServiceDefinitionV1Resource,
    ServiceDefinitionV2: ServiceDefinitionV2,
    ServiceDefinitionV2Doc: ServiceDefinitionV2Doc,
    ServiceDefinitionV2Dot1: ServiceDefinitionV2Dot1,
    ServiceDefinitionV2Dot1Email: ServiceDefinitionV2Dot1Email,
    ServiceDefinitionV2Dot1Integrations: ServiceDefinitionV2Dot1Integrations,
    ServiceDefinitionV2Dot1Link: ServiceDefinitionV2Dot1Link,
    ServiceDefinitionV2Dot1MSTeams: ServiceDefinitionV2Dot1MSTeams,
    ServiceDefinitionV2Dot1Opsgenie: ServiceDefinitionV2Dot1Opsgenie,
    ServiceDefinitionV2Dot1Pagerduty: ServiceDefinitionV2Dot1Pagerduty,
    ServiceDefinitionV2Dot1Slack: ServiceDefinitionV2Dot1Slack,
    ServiceDefinitionV2Dot2: ServiceDefinitionV2Dot2,
    ServiceDefinitionV2Dot2Contact: ServiceDefinitionV2Dot2Contact,
    ServiceDefinitionV2Dot2Integrations: ServiceDefinitionV2Dot2Integrations,
    ServiceDefinitionV2Dot2Link: ServiceDefinitionV2Dot2Link,
    ServiceDefinitionV2Dot2Opsgenie: ServiceDefinitionV2Dot2Opsgenie,
    ServiceDefinitionV2Dot2Pagerduty: ServiceDefinitionV2Dot2Pagerduty,
    ServiceDefinitionV2Email: ServiceDefinitionV2Email,
    ServiceDefinitionV2Integrations: ServiceDefinitionV2Integrations,
    ServiceDefinitionV2Link: ServiceDefinitionV2Link,
    ServiceDefinitionV2MSTeams: ServiceDefinitionV2MSTeams,
    ServiceDefinitionV2Opsgenie: ServiceDefinitionV2Opsgenie,
    ServiceDefinitionV2Repo: ServiceDefinitionV2Repo,
    ServiceDefinitionV2Slack: ServiceDefinitionV2Slack,
    ServiceDefinitionsListResponse: ServiceDefinitionsListResponse,
    UpdateCampaignRequest: UpdateCampaignRequest,
    UpdateCampaignRequestAttributes: UpdateCampaignRequestAttributes,
    UpdateCampaignRequestData: UpdateCampaignRequestData,
    UpdateOpenAPIResponse: UpdateOpenAPIResponse,
    UpdateOpenAPIResponseAttributes: UpdateOpenAPIResponseAttributes,
    UpdateOpenAPIResponseData: UpdateOpenAPIResponseData,
    UpdateOutcomesAsyncAttributes: UpdateOutcomesAsyncAttributes,
    UpdateOutcomesAsyncRequest: UpdateOutcomesAsyncRequest,
    UpdateOutcomesAsyncRequestData: UpdateOutcomesAsyncRequestData,
    UpdateOutcomesAsyncRequestItem: UpdateOutcomesAsyncRequestItem,
    UpdateRuleRequest: UpdateRuleRequest,
    UpdateRuleRequestData: UpdateRuleRequestData,
    UpdateRuleResponse: UpdateRuleResponse,
    UpdateRuleResponseData: UpdateRuleResponseData,
    UpsertCatalogEntityResponse: UpsertCatalogEntityResponse,
    UpsertCatalogKindResponse: UpsertCatalogKindResponse,
  },
};
