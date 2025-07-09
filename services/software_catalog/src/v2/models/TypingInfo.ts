import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { EntityAttributes } from "./EntityAttributes";
import { EntityData } from "./EntityData";
import { EntityMeta } from "./EntityMeta";
import { EntityRelationships } from "./EntityRelationships";
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
import { KindAttributes } from "./KindAttributes";
import { KindData } from "./KindData";
import { KindMetadata } from "./KindMetadata";
import { KindObj } from "./KindObj";
import { KindResponseMeta } from "./KindResponseMeta";
import { ListEntityCatalogResponse } from "./ListEntityCatalogResponse";
import { ListEntityCatalogResponseLinks } from "./ListEntityCatalogResponseLinks";
import { ListKindCatalogResponse } from "./ListKindCatalogResponse";
import { ListRelationCatalogResponse } from "./ListRelationCatalogResponse";
import { ListRelationCatalogResponseLinks } from "./ListRelationCatalogResponseLinks";
import { RelationAttributes } from "./RelationAttributes";
import { RelationEntity } from "./RelationEntity";
import { RelationMeta } from "./RelationMeta";
import { RelationRelationships } from "./RelationRelationships";
import { RelationResponse } from "./RelationResponse";
import { RelationResponseMeta } from "./RelationResponseMeta";
import { RelationToEntity } from "./RelationToEntity";
import { RelationshipItem } from "./RelationshipItem";
import { UpsertCatalogEntityResponse } from "./UpsertCatalogEntityResponse";
import { UpsertCatalogKindResponse } from "./UpsertCatalogKindResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
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
    UpsertCatalogEntityRequest: ["EntityV3", "string"],
    UpsertCatalogEntityResponseIncludedItem: ["EntityResponseIncludedSchema"],
    UpsertCatalogKindRequest: ["KindObj", "string"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    EntityAttributes: EntityAttributes,
    EntityData: EntityData,
    EntityMeta: EntityMeta,
    EntityRelationships: EntityRelationships,
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
    KindAttributes: KindAttributes,
    KindData: KindData,
    KindMetadata: KindMetadata,
    KindObj: KindObj,
    KindResponseMeta: KindResponseMeta,
    ListEntityCatalogResponse: ListEntityCatalogResponse,
    ListEntityCatalogResponseLinks: ListEntityCatalogResponseLinks,
    ListKindCatalogResponse: ListKindCatalogResponse,
    ListRelationCatalogResponse: ListRelationCatalogResponse,
    ListRelationCatalogResponseLinks: ListRelationCatalogResponseLinks,
    RelationAttributes: RelationAttributes,
    RelationEntity: RelationEntity,
    RelationMeta: RelationMeta,
    RelationRelationships: RelationRelationships,
    RelationResponse: RelationResponse,
    RelationResponseMeta: RelationResponseMeta,
    RelationToEntity: RelationToEntity,
    RelationshipItem: RelationshipItem,
    UpsertCatalogEntityResponse: UpsertCatalogEntityResponse,
    UpsertCatalogKindResponse: UpsertCatalogKindResponse,
  },
};
