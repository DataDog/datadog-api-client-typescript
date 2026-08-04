import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateBackfilledDegradationRequest } from "./CreateBackfilledDegradationRequest";
import { CreateBackfilledDegradationRequestData } from "./CreateBackfilledDegradationRequestData";
import { CreateBackfilledDegradationRequestDataAttributes } from "./CreateBackfilledDegradationRequestDataAttributes";
import { CreateBackfilledDegradationRequestDataAttributesUpdatesItems } from "./CreateBackfilledDegradationRequestDataAttributesUpdatesItems";
import { CreateBackfilledDegradationRequestDataRelationships } from "./CreateBackfilledDegradationRequestDataRelationships";
import { CreateBackfilledDegradationRequestDataRelationshipsTemplate } from "./CreateBackfilledDegradationRequestDataRelationshipsTemplate";
import { CreateBackfilledDegradationRequestDataRelationshipsTemplateData } from "./CreateBackfilledDegradationRequestDataRelationshipsTemplateData";
import { CreateBackfilledMaintenanceRequest } from "./CreateBackfilledMaintenanceRequest";
import { CreateBackfilledMaintenanceRequestData } from "./CreateBackfilledMaintenanceRequestData";
import { CreateBackfilledMaintenanceRequestDataAttributes } from "./CreateBackfilledMaintenanceRequestDataAttributes";
import { CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems } from "./CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems";
import { CreateBackfilledMaintenanceRequestDataRelationships } from "./CreateBackfilledMaintenanceRequestDataRelationships";
import { CreateBackfilledMaintenanceRequestDataRelationshipsTemplate } from "./CreateBackfilledMaintenanceRequestDataRelationshipsTemplate";
import { CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData } from "./CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData";
import { CreateComponentRequest } from "./CreateComponentRequest";
import { CreateComponentRequestData } from "./CreateComponentRequestData";
import { CreateComponentRequestDataAttributes } from "./CreateComponentRequestDataAttributes";
import { CreateComponentRequestDataAttributesComponentsItems } from "./CreateComponentRequestDataAttributesComponentsItems";
import { CreateComponentRequestDataRelationships } from "./CreateComponentRequestDataRelationships";
import { CreateComponentRequestDataRelationshipsGroup } from "./CreateComponentRequestDataRelationshipsGroup";
import { CreateComponentRequestDataRelationshipsGroupData } from "./CreateComponentRequestDataRelationshipsGroupData";
import { CreateDegradationRequest } from "./CreateDegradationRequest";
import { CreateDegradationRequestData } from "./CreateDegradationRequestData";
import { CreateDegradationRequestDataAttributes } from "./CreateDegradationRequestDataAttributes";
import { CreateDegradationRequestDataAttributesComponentsAffectedItems } from "./CreateDegradationRequestDataAttributesComponentsAffectedItems";
import { CreateDegradationRequestDataRelationships } from "./CreateDegradationRequestDataRelationships";
import { CreateDegradationRequestDataRelationshipsTemplate } from "./CreateDegradationRequestDataRelationshipsTemplate";
import { CreateDegradationRequestDataRelationshipsTemplateData } from "./CreateDegradationRequestDataRelationshipsTemplateData";
import { CreateDegradationTemplateRequest } from "./CreateDegradationTemplateRequest";
import { CreateDegradationTemplateRequestData } from "./CreateDegradationTemplateRequestData";
import { CreateDegradationTemplateRequestDataAttributes } from "./CreateDegradationTemplateRequestDataAttributes";
import { CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems } from "./CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems";
import { CreateDegradationTemplateRequestDataAttributesUpdatesItems } from "./CreateDegradationTemplateRequestDataAttributesUpdatesItems";
import { CreateMaintenanceRequest } from "./CreateMaintenanceRequest";
import { CreateMaintenanceRequestData } from "./CreateMaintenanceRequestData";
import { CreateMaintenanceRequestDataAttributes } from "./CreateMaintenanceRequestDataAttributes";
import { CreateMaintenanceRequestDataAttributesComponentsAffectedItems } from "./CreateMaintenanceRequestDataAttributesComponentsAffectedItems";
import { CreateMaintenanceRequestDataRelationships } from "./CreateMaintenanceRequestDataRelationships";
import { CreateMaintenanceRequestDataRelationshipsTemplate } from "./CreateMaintenanceRequestDataRelationshipsTemplate";
import { CreateMaintenanceRequestDataRelationshipsTemplateData } from "./CreateMaintenanceRequestDataRelationshipsTemplateData";
import { CreateMaintenanceTemplateRequest } from "./CreateMaintenanceTemplateRequest";
import { CreateMaintenanceTemplateRequestData } from "./CreateMaintenanceTemplateRequestData";
import { CreateMaintenanceTemplateRequestDataAttributes } from "./CreateMaintenanceTemplateRequestDataAttributes";
import { CreateStatusPageRequest } from "./CreateStatusPageRequest";
import { CreateStatusPageRequestData } from "./CreateStatusPageRequestData";
import { CreateStatusPageRequestDataAttributes } from "./CreateStatusPageRequestDataAttributes";
import { CreateStatusPageRequestDataAttributesComponentsItems } from "./CreateStatusPageRequestDataAttributesComponentsItems";
import { CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems } from "./CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems";
import { Degradation } from "./Degradation";
import { DegradationArray } from "./DegradationArray";
import { DegradationData } from "./DegradationData";
import { DegradationDataAttributes } from "./DegradationDataAttributes";
import { DegradationDataAttributesComponentsAffectedItems } from "./DegradationDataAttributesComponentsAffectedItems";
import { DegradationDataAttributesSource } from "./DegradationDataAttributesSource";
import { DegradationDataAttributesUpdatesItems } from "./DegradationDataAttributesUpdatesItems";
import { DegradationDataAttributesUpdatesItemsComponentsAffectedItems } from "./DegradationDataAttributesUpdatesItemsComponentsAffectedItems";
import { DegradationDataRelationships } from "./DegradationDataRelationships";
import { DegradationDataRelationshipsCreatedByUser } from "./DegradationDataRelationshipsCreatedByUser";
import { DegradationDataRelationshipsCreatedByUserData } from "./DegradationDataRelationshipsCreatedByUserData";
import { DegradationDataRelationshipsLastModifiedByUser } from "./DegradationDataRelationshipsLastModifiedByUser";
import { DegradationDataRelationshipsLastModifiedByUserData } from "./DegradationDataRelationshipsLastModifiedByUserData";
import { DegradationDataRelationshipsStatusPage } from "./DegradationDataRelationshipsStatusPage";
import { DegradationDataRelationshipsStatusPageData } from "./DegradationDataRelationshipsStatusPageData";
import { DegradationDataRelationshipsTemplate } from "./DegradationDataRelationshipsTemplate";
import { DegradationDataRelationshipsTemplateData } from "./DegradationDataRelationshipsTemplateData";
import { DegradationTemplate } from "./DegradationTemplate";
import { DegradationTemplateArray } from "./DegradationTemplateArray";
import { DegradationTemplateData } from "./DegradationTemplateData";
import { DegradationTemplateDataAttributes } from "./DegradationTemplateDataAttributes";
import { DegradationTemplateDataAttributesComponentsAffectedItems } from "./DegradationTemplateDataAttributesComponentsAffectedItems";
import { DegradationTemplateDataAttributesUpdatesItems } from "./DegradationTemplateDataAttributesUpdatesItems";
import { DegradationTemplateDataRelationships } from "./DegradationTemplateDataRelationships";
import { DegradationTemplateDataRelationshipsCreatedByUser } from "./DegradationTemplateDataRelationshipsCreatedByUser";
import { DegradationTemplateDataRelationshipsCreatedByUserData } from "./DegradationTemplateDataRelationshipsCreatedByUserData";
import { DegradationTemplateDataRelationshipsLastModifiedByUser } from "./DegradationTemplateDataRelationshipsLastModifiedByUser";
import { DegradationTemplateDataRelationshipsLastModifiedByUserData } from "./DegradationTemplateDataRelationshipsLastModifiedByUserData";
import { DegradationTemplateDataRelationshipsStatusPage } from "./DegradationTemplateDataRelationshipsStatusPage";
import { DegradationTemplateDataRelationshipsStatusPageData } from "./DegradationTemplateDataRelationshipsStatusPageData";
import { DegradationUpdate } from "./DegradationUpdate";
import { DegradationUpdateData } from "./DegradationUpdateData";
import { DegradationUpdateDataAttributes } from "./DegradationUpdateDataAttributes";
import { DegradationUpdateDataAttributesComponentsAffectedItems } from "./DegradationUpdateDataAttributesComponentsAffectedItems";
import { DegradationUpdateDataRelationships } from "./DegradationUpdateDataRelationships";
import { DegradationUpdateDataRelationshipsDegradation } from "./DegradationUpdateDataRelationshipsDegradation";
import { DegradationUpdateDataRelationshipsDegradationData } from "./DegradationUpdateDataRelationshipsDegradationData";
import { DegradationUpdateDataRelationshipsStatusPage } from "./DegradationUpdateDataRelationshipsStatusPage";
import { DegradationUpdateDataRelationshipsStatusPageData } from "./DegradationUpdateDataRelationshipsStatusPageData";
import { DegradationUpdateDataRelationshipsUser } from "./DegradationUpdateDataRelationshipsUser";
import { DegradationUpdateDataRelationshipsUserData } from "./DegradationUpdateDataRelationshipsUserData";
import { Maintenance } from "./Maintenance";
import { MaintenanceArray } from "./MaintenanceArray";
import { MaintenanceData } from "./MaintenanceData";
import { MaintenanceDataAttributes } from "./MaintenanceDataAttributes";
import { MaintenanceDataAttributesComponentsAffectedItems } from "./MaintenanceDataAttributesComponentsAffectedItems";
import { MaintenanceDataAttributesUpdatesItems } from "./MaintenanceDataAttributesUpdatesItems";
import { MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems } from "./MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems";
import { MaintenanceDataRelationships } from "./MaintenanceDataRelationships";
import { MaintenanceDataRelationshipsCreatedByUser } from "./MaintenanceDataRelationshipsCreatedByUser";
import { MaintenanceDataRelationshipsCreatedByUserData } from "./MaintenanceDataRelationshipsCreatedByUserData";
import { MaintenanceDataRelationshipsLastModifiedByUser } from "./MaintenanceDataRelationshipsLastModifiedByUser";
import { MaintenanceDataRelationshipsLastModifiedByUserData } from "./MaintenanceDataRelationshipsLastModifiedByUserData";
import { MaintenanceDataRelationshipsStatusPage } from "./MaintenanceDataRelationshipsStatusPage";
import { MaintenanceDataRelationshipsStatusPageData } from "./MaintenanceDataRelationshipsStatusPageData";
import { MaintenanceDataRelationshipsTemplate } from "./MaintenanceDataRelationshipsTemplate";
import { MaintenanceDataRelationshipsTemplateData } from "./MaintenanceDataRelationshipsTemplateData";
import { MaintenanceTemplate } from "./MaintenanceTemplate";
import { MaintenanceTemplateArray } from "./MaintenanceTemplateArray";
import { MaintenanceTemplateData } from "./MaintenanceTemplateData";
import { MaintenanceTemplateDataAttributes } from "./MaintenanceTemplateDataAttributes";
import { MaintenanceTemplateDataRelationships } from "./MaintenanceTemplateDataRelationships";
import { MaintenanceTemplateDataRelationshipsCreatedByUser } from "./MaintenanceTemplateDataRelationshipsCreatedByUser";
import { MaintenanceTemplateDataRelationshipsCreatedByUserData } from "./MaintenanceTemplateDataRelationshipsCreatedByUserData";
import { MaintenanceTemplateDataRelationshipsLastModifiedByUser } from "./MaintenanceTemplateDataRelationshipsLastModifiedByUser";
import { MaintenanceTemplateDataRelationshipsLastModifiedByUserData } from "./MaintenanceTemplateDataRelationshipsLastModifiedByUserData";
import { MaintenanceTemplateDataRelationshipsStatusPage } from "./MaintenanceTemplateDataRelationshipsStatusPage";
import { MaintenanceTemplateDataRelationshipsStatusPageData } from "./MaintenanceTemplateDataRelationshipsStatusPageData";
import { PaginationMeta } from "./PaginationMeta";
import { PaginationMetaPage } from "./PaginationMetaPage";
import { PatchComponentRequest } from "./PatchComponentRequest";
import { PatchComponentRequestData } from "./PatchComponentRequestData";
import { PatchComponentRequestDataAttributes } from "./PatchComponentRequestDataAttributes";
import { PatchDegradationRequest } from "./PatchDegradationRequest";
import { PatchDegradationRequestData } from "./PatchDegradationRequestData";
import { PatchDegradationRequestDataAttributes } from "./PatchDegradationRequestDataAttributes";
import { PatchDegradationRequestDataAttributesComponentsAffectedItems } from "./PatchDegradationRequestDataAttributesComponentsAffectedItems";
import { PatchDegradationRequestDataRelationships } from "./PatchDegradationRequestDataRelationships";
import { PatchDegradationRequestDataRelationshipsTemplate } from "./PatchDegradationRequestDataRelationshipsTemplate";
import { PatchDegradationRequestDataRelationshipsTemplateData } from "./PatchDegradationRequestDataRelationshipsTemplateData";
import { PatchDegradationTemplateRequest } from "./PatchDegradationTemplateRequest";
import { PatchDegradationTemplateRequestData } from "./PatchDegradationTemplateRequestData";
import { PatchDegradationTemplateRequestDataAttributes } from "./PatchDegradationTemplateRequestDataAttributes";
import { PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems } from "./PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems";
import { PatchDegradationTemplateRequestDataAttributesUpdatesItems } from "./PatchDegradationTemplateRequestDataAttributesUpdatesItems";
import { PatchDegradationUpdateRequest } from "./PatchDegradationUpdateRequest";
import { PatchDegradationUpdateRequestData } from "./PatchDegradationUpdateRequestData";
import { PatchDegradationUpdateRequestDataAttributes } from "./PatchDegradationUpdateRequestDataAttributes";
import { PatchMaintenanceRequest } from "./PatchMaintenanceRequest";
import { PatchMaintenanceRequestData } from "./PatchMaintenanceRequestData";
import { PatchMaintenanceRequestDataAttributes } from "./PatchMaintenanceRequestDataAttributes";
import { PatchMaintenanceRequestDataAttributesComponentsAffectedItems } from "./PatchMaintenanceRequestDataAttributesComponentsAffectedItems";
import { PatchMaintenanceRequestDataRelationships } from "./PatchMaintenanceRequestDataRelationships";
import { PatchMaintenanceRequestDataRelationshipsTemplate } from "./PatchMaintenanceRequestDataRelationshipsTemplate";
import { PatchMaintenanceRequestDataRelationshipsTemplateData } from "./PatchMaintenanceRequestDataRelationshipsTemplateData";
import { PatchMaintenanceTemplateRequest } from "./PatchMaintenanceTemplateRequest";
import { PatchMaintenanceTemplateRequestData } from "./PatchMaintenanceTemplateRequestData";
import { PatchMaintenanceTemplateRequestDataAttributes } from "./PatchMaintenanceTemplateRequestDataAttributes";
import { PatchStatusPageRequest } from "./PatchStatusPageRequest";
import { PatchStatusPageRequestData } from "./PatchStatusPageRequestData";
import { PatchStatusPageRequestDataAttributes } from "./PatchStatusPageRequestDataAttributes";
import { StatusPage } from "./StatusPage";
import { StatusPageArray } from "./StatusPageArray";
import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPageAsIncludedAttributes } from "./StatusPageAsIncludedAttributes";
import { StatusPageAsIncludedAttributesComponentsItems } from "./StatusPageAsIncludedAttributesComponentsItems";
import { StatusPageAsIncludedAttributesComponentsItemsComponentsItems } from "./StatusPageAsIncludedAttributesComponentsItemsComponentsItems";
import { StatusPageAsIncludedRelationships } from "./StatusPageAsIncludedRelationships";
import { StatusPageAsIncludedRelationshipsCreatedByUser } from "./StatusPageAsIncludedRelationshipsCreatedByUser";
import { StatusPageAsIncludedRelationshipsCreatedByUserData } from "./StatusPageAsIncludedRelationshipsCreatedByUserData";
import { StatusPageAsIncludedRelationshipsLastModifiedByUser } from "./StatusPageAsIncludedRelationshipsLastModifiedByUser";
import { StatusPageAsIncludedRelationshipsLastModifiedByUserData } from "./StatusPageAsIncludedRelationshipsLastModifiedByUserData";
import { StatusPageData } from "./StatusPageData";
import { StatusPageDataAttributes } from "./StatusPageDataAttributes";
import { StatusPageDataAttributesComponentsItems } from "./StatusPageDataAttributesComponentsItems";
import { StatusPageDataAttributesComponentsItemsComponentsItems } from "./StatusPageDataAttributesComponentsItemsComponentsItems";
import { StatusPageDataRelationships } from "./StatusPageDataRelationships";
import { StatusPageDataRelationshipsCreatedByUser } from "./StatusPageDataRelationshipsCreatedByUser";
import { StatusPageDataRelationshipsCreatedByUserData } from "./StatusPageDataRelationshipsCreatedByUserData";
import { StatusPageDataRelationshipsLastModifiedByUser } from "./StatusPageDataRelationshipsLastModifiedByUser";
import { StatusPageDataRelationshipsLastModifiedByUserData } from "./StatusPageDataRelationshipsLastModifiedByUserData";
import { StatusPagesComponent } from "./StatusPagesComponent";
import { StatusPagesComponentArray } from "./StatusPagesComponentArray";
import { StatusPagesComponentData } from "./StatusPagesComponentData";
import { StatusPagesComponentDataAttributes } from "./StatusPagesComponentDataAttributes";
import { StatusPagesComponentDataAttributesComponentsItems } from "./StatusPagesComponentDataAttributesComponentsItems";
import { StatusPagesComponentDataRelationships } from "./StatusPagesComponentDataRelationships";
import { StatusPagesComponentDataRelationshipsCreatedByUser } from "./StatusPagesComponentDataRelationshipsCreatedByUser";
import { StatusPagesComponentDataRelationshipsCreatedByUserData } from "./StatusPagesComponentDataRelationshipsCreatedByUserData";
import { StatusPagesComponentDataRelationshipsGroup } from "./StatusPagesComponentDataRelationshipsGroup";
import { StatusPagesComponentDataRelationshipsGroupData } from "./StatusPagesComponentDataRelationshipsGroupData";
import { StatusPagesComponentDataRelationshipsLastModifiedByUser } from "./StatusPagesComponentDataRelationshipsLastModifiedByUser";
import { StatusPagesComponentDataRelationshipsLastModifiedByUserData } from "./StatusPagesComponentDataRelationshipsLastModifiedByUserData";
import { StatusPagesComponentDataRelationshipsStatusPage } from "./StatusPagesComponentDataRelationshipsStatusPage";
import { StatusPagesComponentDataRelationshipsStatusPageData } from "./StatusPagesComponentDataRelationshipsStatusPageData";
import { StatusPagesComponentGroup } from "./StatusPagesComponentGroup";
import { StatusPagesComponentGroupAttributes } from "./StatusPagesComponentGroupAttributes";
import { StatusPagesComponentGroupAttributesComponentsItems } from "./StatusPagesComponentGroupAttributesComponentsItems";
import { StatusPagesComponentGroupRelationships } from "./StatusPagesComponentGroupRelationships";
import { StatusPagesComponentGroupRelationshipsCreatedByUser } from "./StatusPagesComponentGroupRelationshipsCreatedByUser";
import { StatusPagesComponentGroupRelationshipsCreatedByUserData } from "./StatusPagesComponentGroupRelationshipsCreatedByUserData";
import { StatusPagesComponentGroupRelationshipsGroup } from "./StatusPagesComponentGroupRelationshipsGroup";
import { StatusPagesComponentGroupRelationshipsGroupData } from "./StatusPagesComponentGroupRelationshipsGroupData";
import { StatusPagesComponentGroupRelationshipsLastModifiedByUser } from "./StatusPagesComponentGroupRelationshipsLastModifiedByUser";
import { StatusPagesComponentGroupRelationshipsLastModifiedByUserData } from "./StatusPagesComponentGroupRelationshipsLastModifiedByUserData";
import { StatusPagesComponentGroupRelationshipsStatusPage } from "./StatusPagesComponentGroupRelationshipsStatusPage";
import { StatusPagesComponentGroupRelationshipsStatusPageData } from "./StatusPagesComponentGroupRelationshipsStatusPageData";
import { StatusPagesUser } from "./StatusPagesUser";
import { StatusPagesUserAttributes } from "./StatusPagesUserAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CreateComponentRequestDataAttributesType: ["component", "group"],
    CreateDegradationRequestDataAttributesStatus: [
      "investigating",
      "identified",
      "monitoring",
      "resolved",
    ],
    CreateMaintenanceRequestDataAttributesUpdatesItemsStatus: [
      "in_progress",
      "completed",
    ],
    CreateStatusPageRequestDataAttributesType: ["public", "internal"],
    CreateStatusPageRequestDataAttributesVisualizationType: [
      "bars_and_uptime_percentage",
      "bars_only",
      "component_name_only",
    ],
    DegradationDataAttributesSourceType: ["incident"],
    MaintenanceDataAttributesStatus: ["scheduled", "in_progress", "completed"],
    PaginationMetaPageType: ["offset_limit"],
    PatchDegradationRequestDataAttributesStatus: [
      "investigating",
      "identified",
      "monitoring",
      "resolved",
    ],
    PatchDegradationRequestDataType: ["degradations"],
    PatchDegradationTemplateRequestDataAttributesComponentsAffectedItemsStatus:
      ["operational", "degraded", "partial_outage", "major_outage"],
    PatchDegradationTemplateRequestDataType: ["degradation_templates"],
    PatchDegradationUpdateRequestDataAttributesStatus: [
      "investigating",
      "identified",
      "monitoring",
    ],
    PatchDegradationUpdateRequestDataType: ["degradation_updates"],
    PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus: [
      "operational",
      "maintenance",
    ],
    PatchMaintenanceRequestDataType: ["maintenances"],
    PatchMaintenanceTemplateRequestDataType: ["maintenance_templates"],
    StatusPageDataType: ["status_pages"],
    StatusPagesComponentDataAttributesStatus: [
      "operational",
      "degraded",
      "partial_outage",
      "major_outage",
      "maintenance",
    ],
    StatusPagesComponentGroupAttributesComponentsItemsStatus: [
      "operational",
      "degraded",
      "partial_outage",
      "major_outage",
      "maintenance",
    ],
    StatusPagesComponentGroupAttributesComponentsItemsType: ["component"],
    StatusPagesComponentGroupType: ["components"],
    StatusPagesUserType: ["users"],
  },
  oneOfMap: {
    DegradationIncluded: ["StatusPagesUser", "StatusPageAsIncluded"],
    DegradationUpdateIncluded: [
      "StatusPagesUser",
      "Degradation",
      "StatusPageAsIncluded",
    ],
    StatusPageArrayIncluded: ["StatusPagesUser"],
    StatusPagesComponentArrayIncluded: [
      "StatusPagesUser",
      "StatusPageAsIncluded",
      "StatusPagesComponentGroup",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateBackfilledDegradationRequest: CreateBackfilledDegradationRequest,
    CreateBackfilledDegradationRequestData:
      CreateBackfilledDegradationRequestData,
    CreateBackfilledDegradationRequestDataAttributes:
      CreateBackfilledDegradationRequestDataAttributes,
    CreateBackfilledDegradationRequestDataAttributesUpdatesItems:
      CreateBackfilledDegradationRequestDataAttributesUpdatesItems,
    CreateBackfilledDegradationRequestDataRelationships:
      CreateBackfilledDegradationRequestDataRelationships,
    CreateBackfilledDegradationRequestDataRelationshipsTemplate:
      CreateBackfilledDegradationRequestDataRelationshipsTemplate,
    CreateBackfilledDegradationRequestDataRelationshipsTemplateData:
      CreateBackfilledDegradationRequestDataRelationshipsTemplateData,
    CreateBackfilledMaintenanceRequest: CreateBackfilledMaintenanceRequest,
    CreateBackfilledMaintenanceRequestData:
      CreateBackfilledMaintenanceRequestData,
    CreateBackfilledMaintenanceRequestDataAttributes:
      CreateBackfilledMaintenanceRequestDataAttributes,
    CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems:
      CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems,
    CreateBackfilledMaintenanceRequestDataRelationships:
      CreateBackfilledMaintenanceRequestDataRelationships,
    CreateBackfilledMaintenanceRequestDataRelationshipsTemplate:
      CreateBackfilledMaintenanceRequestDataRelationshipsTemplate,
    CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData:
      CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData,
    CreateComponentRequest: CreateComponentRequest,
    CreateComponentRequestData: CreateComponentRequestData,
    CreateComponentRequestDataAttributes: CreateComponentRequestDataAttributes,
    CreateComponentRequestDataAttributesComponentsItems:
      CreateComponentRequestDataAttributesComponentsItems,
    CreateComponentRequestDataRelationships:
      CreateComponentRequestDataRelationships,
    CreateComponentRequestDataRelationshipsGroup:
      CreateComponentRequestDataRelationshipsGroup,
    CreateComponentRequestDataRelationshipsGroupData:
      CreateComponentRequestDataRelationshipsGroupData,
    CreateDegradationRequest: CreateDegradationRequest,
    CreateDegradationRequestData: CreateDegradationRequestData,
    CreateDegradationRequestDataAttributes:
      CreateDegradationRequestDataAttributes,
    CreateDegradationRequestDataAttributesComponentsAffectedItems:
      CreateDegradationRequestDataAttributesComponentsAffectedItems,
    CreateDegradationRequestDataRelationships:
      CreateDegradationRequestDataRelationships,
    CreateDegradationRequestDataRelationshipsTemplate:
      CreateDegradationRequestDataRelationshipsTemplate,
    CreateDegradationRequestDataRelationshipsTemplateData:
      CreateDegradationRequestDataRelationshipsTemplateData,
    CreateDegradationTemplateRequest: CreateDegradationTemplateRequest,
    CreateDegradationTemplateRequestData: CreateDegradationTemplateRequestData,
    CreateDegradationTemplateRequestDataAttributes:
      CreateDegradationTemplateRequestDataAttributes,
    CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems:
      CreateDegradationTemplateRequestDataAttributesComponentsAffectedItems,
    CreateDegradationTemplateRequestDataAttributesUpdatesItems:
      CreateDegradationTemplateRequestDataAttributesUpdatesItems,
    CreateMaintenanceRequest: CreateMaintenanceRequest,
    CreateMaintenanceRequestData: CreateMaintenanceRequestData,
    CreateMaintenanceRequestDataAttributes:
      CreateMaintenanceRequestDataAttributes,
    CreateMaintenanceRequestDataAttributesComponentsAffectedItems:
      CreateMaintenanceRequestDataAttributesComponentsAffectedItems,
    CreateMaintenanceRequestDataRelationships:
      CreateMaintenanceRequestDataRelationships,
    CreateMaintenanceRequestDataRelationshipsTemplate:
      CreateMaintenanceRequestDataRelationshipsTemplate,
    CreateMaintenanceRequestDataRelationshipsTemplateData:
      CreateMaintenanceRequestDataRelationshipsTemplateData,
    CreateMaintenanceTemplateRequest: CreateMaintenanceTemplateRequest,
    CreateMaintenanceTemplateRequestData: CreateMaintenanceTemplateRequestData,
    CreateMaintenanceTemplateRequestDataAttributes:
      CreateMaintenanceTemplateRequestDataAttributes,
    CreateStatusPageRequest: CreateStatusPageRequest,
    CreateStatusPageRequestData: CreateStatusPageRequestData,
    CreateStatusPageRequestDataAttributes:
      CreateStatusPageRequestDataAttributes,
    CreateStatusPageRequestDataAttributesComponentsItems:
      CreateStatusPageRequestDataAttributesComponentsItems,
    CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems:
      CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems,
    Degradation: Degradation,
    DegradationArray: DegradationArray,
    DegradationData: DegradationData,
    DegradationDataAttributes: DegradationDataAttributes,
    DegradationDataAttributesComponentsAffectedItems:
      DegradationDataAttributesComponentsAffectedItems,
    DegradationDataAttributesSource: DegradationDataAttributesSource,
    DegradationDataAttributesUpdatesItems:
      DegradationDataAttributesUpdatesItems,
    DegradationDataAttributesUpdatesItemsComponentsAffectedItems:
      DegradationDataAttributesUpdatesItemsComponentsAffectedItems,
    DegradationDataRelationships: DegradationDataRelationships,
    DegradationDataRelationshipsCreatedByUser:
      DegradationDataRelationshipsCreatedByUser,
    DegradationDataRelationshipsCreatedByUserData:
      DegradationDataRelationshipsCreatedByUserData,
    DegradationDataRelationshipsLastModifiedByUser:
      DegradationDataRelationshipsLastModifiedByUser,
    DegradationDataRelationshipsLastModifiedByUserData:
      DegradationDataRelationshipsLastModifiedByUserData,
    DegradationDataRelationshipsStatusPage:
      DegradationDataRelationshipsStatusPage,
    DegradationDataRelationshipsStatusPageData:
      DegradationDataRelationshipsStatusPageData,
    DegradationDataRelationshipsTemplate: DegradationDataRelationshipsTemplate,
    DegradationDataRelationshipsTemplateData:
      DegradationDataRelationshipsTemplateData,
    DegradationTemplate: DegradationTemplate,
    DegradationTemplateArray: DegradationTemplateArray,
    DegradationTemplateData: DegradationTemplateData,
    DegradationTemplateDataAttributes: DegradationTemplateDataAttributes,
    DegradationTemplateDataAttributesComponentsAffectedItems:
      DegradationTemplateDataAttributesComponentsAffectedItems,
    DegradationTemplateDataAttributesUpdatesItems:
      DegradationTemplateDataAttributesUpdatesItems,
    DegradationTemplateDataRelationships: DegradationTemplateDataRelationships,
    DegradationTemplateDataRelationshipsCreatedByUser:
      DegradationTemplateDataRelationshipsCreatedByUser,
    DegradationTemplateDataRelationshipsCreatedByUserData:
      DegradationTemplateDataRelationshipsCreatedByUserData,
    DegradationTemplateDataRelationshipsLastModifiedByUser:
      DegradationTemplateDataRelationshipsLastModifiedByUser,
    DegradationTemplateDataRelationshipsLastModifiedByUserData:
      DegradationTemplateDataRelationshipsLastModifiedByUserData,
    DegradationTemplateDataRelationshipsStatusPage:
      DegradationTemplateDataRelationshipsStatusPage,
    DegradationTemplateDataRelationshipsStatusPageData:
      DegradationTemplateDataRelationshipsStatusPageData,
    DegradationUpdate: DegradationUpdate,
    DegradationUpdateData: DegradationUpdateData,
    DegradationUpdateDataAttributes: DegradationUpdateDataAttributes,
    DegradationUpdateDataAttributesComponentsAffectedItems:
      DegradationUpdateDataAttributesComponentsAffectedItems,
    DegradationUpdateDataRelationships: DegradationUpdateDataRelationships,
    DegradationUpdateDataRelationshipsDegradation:
      DegradationUpdateDataRelationshipsDegradation,
    DegradationUpdateDataRelationshipsDegradationData:
      DegradationUpdateDataRelationshipsDegradationData,
    DegradationUpdateDataRelationshipsStatusPage:
      DegradationUpdateDataRelationshipsStatusPage,
    DegradationUpdateDataRelationshipsStatusPageData:
      DegradationUpdateDataRelationshipsStatusPageData,
    DegradationUpdateDataRelationshipsUser:
      DegradationUpdateDataRelationshipsUser,
    DegradationUpdateDataRelationshipsUserData:
      DegradationUpdateDataRelationshipsUserData,
    Maintenance: Maintenance,
    MaintenanceArray: MaintenanceArray,
    MaintenanceData: MaintenanceData,
    MaintenanceDataAttributes: MaintenanceDataAttributes,
    MaintenanceDataAttributesComponentsAffectedItems:
      MaintenanceDataAttributesComponentsAffectedItems,
    MaintenanceDataAttributesUpdatesItems:
      MaintenanceDataAttributesUpdatesItems,
    MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems:
      MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems,
    MaintenanceDataRelationships: MaintenanceDataRelationships,
    MaintenanceDataRelationshipsCreatedByUser:
      MaintenanceDataRelationshipsCreatedByUser,
    MaintenanceDataRelationshipsCreatedByUserData:
      MaintenanceDataRelationshipsCreatedByUserData,
    MaintenanceDataRelationshipsLastModifiedByUser:
      MaintenanceDataRelationshipsLastModifiedByUser,
    MaintenanceDataRelationshipsLastModifiedByUserData:
      MaintenanceDataRelationshipsLastModifiedByUserData,
    MaintenanceDataRelationshipsStatusPage:
      MaintenanceDataRelationshipsStatusPage,
    MaintenanceDataRelationshipsStatusPageData:
      MaintenanceDataRelationshipsStatusPageData,
    MaintenanceDataRelationshipsTemplate: MaintenanceDataRelationshipsTemplate,
    MaintenanceDataRelationshipsTemplateData:
      MaintenanceDataRelationshipsTemplateData,
    MaintenanceTemplate: MaintenanceTemplate,
    MaintenanceTemplateArray: MaintenanceTemplateArray,
    MaintenanceTemplateData: MaintenanceTemplateData,
    MaintenanceTemplateDataAttributes: MaintenanceTemplateDataAttributes,
    MaintenanceTemplateDataRelationships: MaintenanceTemplateDataRelationships,
    MaintenanceTemplateDataRelationshipsCreatedByUser:
      MaintenanceTemplateDataRelationshipsCreatedByUser,
    MaintenanceTemplateDataRelationshipsCreatedByUserData:
      MaintenanceTemplateDataRelationshipsCreatedByUserData,
    MaintenanceTemplateDataRelationshipsLastModifiedByUser:
      MaintenanceTemplateDataRelationshipsLastModifiedByUser,
    MaintenanceTemplateDataRelationshipsLastModifiedByUserData:
      MaintenanceTemplateDataRelationshipsLastModifiedByUserData,
    MaintenanceTemplateDataRelationshipsStatusPage:
      MaintenanceTemplateDataRelationshipsStatusPage,
    MaintenanceTemplateDataRelationshipsStatusPageData:
      MaintenanceTemplateDataRelationshipsStatusPageData,
    PaginationMeta: PaginationMeta,
    PaginationMetaPage: PaginationMetaPage,
    PatchComponentRequest: PatchComponentRequest,
    PatchComponentRequestData: PatchComponentRequestData,
    PatchComponentRequestDataAttributes: PatchComponentRequestDataAttributes,
    PatchDegradationRequest: PatchDegradationRequest,
    PatchDegradationRequestData: PatchDegradationRequestData,
    PatchDegradationRequestDataAttributes:
      PatchDegradationRequestDataAttributes,
    PatchDegradationRequestDataAttributesComponentsAffectedItems:
      PatchDegradationRequestDataAttributesComponentsAffectedItems,
    PatchDegradationRequestDataRelationships:
      PatchDegradationRequestDataRelationships,
    PatchDegradationRequestDataRelationshipsTemplate:
      PatchDegradationRequestDataRelationshipsTemplate,
    PatchDegradationRequestDataRelationshipsTemplateData:
      PatchDegradationRequestDataRelationshipsTemplateData,
    PatchDegradationTemplateRequest: PatchDegradationTemplateRequest,
    PatchDegradationTemplateRequestData: PatchDegradationTemplateRequestData,
    PatchDegradationTemplateRequestDataAttributes:
      PatchDegradationTemplateRequestDataAttributes,
    PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems:
      PatchDegradationTemplateRequestDataAttributesComponentsAffectedItems,
    PatchDegradationTemplateRequestDataAttributesUpdatesItems:
      PatchDegradationTemplateRequestDataAttributesUpdatesItems,
    PatchDegradationUpdateRequest: PatchDegradationUpdateRequest,
    PatchDegradationUpdateRequestData: PatchDegradationUpdateRequestData,
    PatchDegradationUpdateRequestDataAttributes:
      PatchDegradationUpdateRequestDataAttributes,
    PatchMaintenanceRequest: PatchMaintenanceRequest,
    PatchMaintenanceRequestData: PatchMaintenanceRequestData,
    PatchMaintenanceRequestDataAttributes:
      PatchMaintenanceRequestDataAttributes,
    PatchMaintenanceRequestDataAttributesComponentsAffectedItems:
      PatchMaintenanceRequestDataAttributesComponentsAffectedItems,
    PatchMaintenanceRequestDataRelationships:
      PatchMaintenanceRequestDataRelationships,
    PatchMaintenanceRequestDataRelationshipsTemplate:
      PatchMaintenanceRequestDataRelationshipsTemplate,
    PatchMaintenanceRequestDataRelationshipsTemplateData:
      PatchMaintenanceRequestDataRelationshipsTemplateData,
    PatchMaintenanceTemplateRequest: PatchMaintenanceTemplateRequest,
    PatchMaintenanceTemplateRequestData: PatchMaintenanceTemplateRequestData,
    PatchMaintenanceTemplateRequestDataAttributes:
      PatchMaintenanceTemplateRequestDataAttributes,
    PatchStatusPageRequest: PatchStatusPageRequest,
    PatchStatusPageRequestData: PatchStatusPageRequestData,
    PatchStatusPageRequestDataAttributes: PatchStatusPageRequestDataAttributes,
    StatusPage: StatusPage,
    StatusPageArray: StatusPageArray,
    StatusPageAsIncluded: StatusPageAsIncluded,
    StatusPageAsIncludedAttributes: StatusPageAsIncludedAttributes,
    StatusPageAsIncludedAttributesComponentsItems:
      StatusPageAsIncludedAttributesComponentsItems,
    StatusPageAsIncludedAttributesComponentsItemsComponentsItems:
      StatusPageAsIncludedAttributesComponentsItemsComponentsItems,
    StatusPageAsIncludedRelationships: StatusPageAsIncludedRelationships,
    StatusPageAsIncludedRelationshipsCreatedByUser:
      StatusPageAsIncludedRelationshipsCreatedByUser,
    StatusPageAsIncludedRelationshipsCreatedByUserData:
      StatusPageAsIncludedRelationshipsCreatedByUserData,
    StatusPageAsIncludedRelationshipsLastModifiedByUser:
      StatusPageAsIncludedRelationshipsLastModifiedByUser,
    StatusPageAsIncludedRelationshipsLastModifiedByUserData:
      StatusPageAsIncludedRelationshipsLastModifiedByUserData,
    StatusPageData: StatusPageData,
    StatusPageDataAttributes: StatusPageDataAttributes,
    StatusPageDataAttributesComponentsItems:
      StatusPageDataAttributesComponentsItems,
    StatusPageDataAttributesComponentsItemsComponentsItems:
      StatusPageDataAttributesComponentsItemsComponentsItems,
    StatusPageDataRelationships: StatusPageDataRelationships,
    StatusPageDataRelationshipsCreatedByUser:
      StatusPageDataRelationshipsCreatedByUser,
    StatusPageDataRelationshipsCreatedByUserData:
      StatusPageDataRelationshipsCreatedByUserData,
    StatusPageDataRelationshipsLastModifiedByUser:
      StatusPageDataRelationshipsLastModifiedByUser,
    StatusPageDataRelationshipsLastModifiedByUserData:
      StatusPageDataRelationshipsLastModifiedByUserData,
    StatusPagesComponent: StatusPagesComponent,
    StatusPagesComponentArray: StatusPagesComponentArray,
    StatusPagesComponentData: StatusPagesComponentData,
    StatusPagesComponentDataAttributes: StatusPagesComponentDataAttributes,
    StatusPagesComponentDataAttributesComponentsItems:
      StatusPagesComponentDataAttributesComponentsItems,
    StatusPagesComponentDataRelationships:
      StatusPagesComponentDataRelationships,
    StatusPagesComponentDataRelationshipsCreatedByUser:
      StatusPagesComponentDataRelationshipsCreatedByUser,
    StatusPagesComponentDataRelationshipsCreatedByUserData:
      StatusPagesComponentDataRelationshipsCreatedByUserData,
    StatusPagesComponentDataRelationshipsGroup:
      StatusPagesComponentDataRelationshipsGroup,
    StatusPagesComponentDataRelationshipsGroupData:
      StatusPagesComponentDataRelationshipsGroupData,
    StatusPagesComponentDataRelationshipsLastModifiedByUser:
      StatusPagesComponentDataRelationshipsLastModifiedByUser,
    StatusPagesComponentDataRelationshipsLastModifiedByUserData:
      StatusPagesComponentDataRelationshipsLastModifiedByUserData,
    StatusPagesComponentDataRelationshipsStatusPage:
      StatusPagesComponentDataRelationshipsStatusPage,
    StatusPagesComponentDataRelationshipsStatusPageData:
      StatusPagesComponentDataRelationshipsStatusPageData,
    StatusPagesComponentGroup: StatusPagesComponentGroup,
    StatusPagesComponentGroupAttributes: StatusPagesComponentGroupAttributes,
    StatusPagesComponentGroupAttributesComponentsItems:
      StatusPagesComponentGroupAttributesComponentsItems,
    StatusPagesComponentGroupRelationships:
      StatusPagesComponentGroupRelationships,
    StatusPagesComponentGroupRelationshipsCreatedByUser:
      StatusPagesComponentGroupRelationshipsCreatedByUser,
    StatusPagesComponentGroupRelationshipsCreatedByUserData:
      StatusPagesComponentGroupRelationshipsCreatedByUserData,
    StatusPagesComponentGroupRelationshipsGroup:
      StatusPagesComponentGroupRelationshipsGroup,
    StatusPagesComponentGroupRelationshipsGroupData:
      StatusPagesComponentGroupRelationshipsGroupData,
    StatusPagesComponentGroupRelationshipsLastModifiedByUser:
      StatusPagesComponentGroupRelationshipsLastModifiedByUser,
    StatusPagesComponentGroupRelationshipsLastModifiedByUserData:
      StatusPagesComponentGroupRelationshipsLastModifiedByUserData,
    StatusPagesComponentGroupRelationshipsStatusPage:
      StatusPagesComponentGroupRelationshipsStatusPage,
    StatusPagesComponentGroupRelationshipsStatusPageData:
      StatusPagesComponentGroupRelationshipsStatusPageData,
    StatusPagesUser: StatusPagesUser,
    StatusPagesUserAttributes: StatusPagesUserAttributes,
  },
};
