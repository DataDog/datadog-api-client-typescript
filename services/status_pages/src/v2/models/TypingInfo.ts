import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
import { DegradationDataAttributesUpdatesItems } from "./DegradationDataAttributesUpdatesItems";
import { DegradationDataAttributesUpdatesItemsComponentsAffectedItems } from "./DegradationDataAttributesUpdatesItemsComponentsAffectedItems";
import { DegradationDataRelationships } from "./DegradationDataRelationships";
import { DegradationDataRelationshipsCreatedByUser } from "./DegradationDataRelationshipsCreatedByUser";
import { DegradationDataRelationshipsCreatedByUserData } from "./DegradationDataRelationshipsCreatedByUserData";
import { DegradationDataRelationshipsLastModifiedByUser } from "./DegradationDataRelationshipsLastModifiedByUser";
import { DegradationDataRelationshipsLastModifiedByUserData } from "./DegradationDataRelationshipsLastModifiedByUserData";
import { DegradationDataRelationshipsStatusPage } from "./DegradationDataRelationshipsStatusPage";
import { DegradationDataRelationshipsStatusPageData } from "./DegradationDataRelationshipsStatusPageData";
import { PatchComponentRequest } from "./PatchComponentRequest";
import { PatchComponentRequestData } from "./PatchComponentRequestData";
import { PatchComponentRequestDataAttributes } from "./PatchComponentRequestDataAttributes";
import { PatchDegradationRequest } from "./PatchDegradationRequest";
import { PatchDegradationRequestData } from "./PatchDegradationRequestData";
import { PatchDegradationRequestDataAttributes } from "./PatchDegradationRequestDataAttributes";
import { PatchDegradationRequestDataAttributesComponentsAffectedItems } from "./PatchDegradationRequestDataAttributesComponentsAffectedItems";
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
    CreateStatusPageRequestDataAttributesType: ["public", "internal"],
    CreateStatusPageRequestDataAttributesVisualizationType: [
      "bars_and_uptime_percentage",
      "bars_only",
      "component_name_only",
    ],
    PatchDegradationRequestDataAttributesStatus: [
      "investigating",
      "identified",
      "monitoring",
      "resolved",
    ],
    PatchDegradationRequestDataType: ["degradations"],
    StatusPageDataType: ["status_pages"],
    StatusPagesComponentDataAttributesStatus: [
      "operational",
      "degraded",
      "partial_outage",
      "major_outage",
    ],
    StatusPagesComponentGroupAttributesComponentsItemsStatus: [
      "operational",
      "degraded",
      "partial_outage",
      "major_outage",
    ],
    StatusPagesComponentGroupAttributesComponentsItemsType: ["component"],
    StatusPagesComponentGroupType: ["components"],
    StatusPagesUserType: ["users"],
  },
  oneOfMap: {
    DegradationArrayIncluded: ["StatusPagesUser", "StatusPageAsIncluded"],
    StatusPageArrayIncluded: ["StatusPagesUser"],
    StatusPagesComponentArrayIncluded: [
      "StatusPagesUser",
      "StatusPageAsIncluded",
      "StatusPagesComponentGroup",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
    PatchComponentRequest: PatchComponentRequest,
    PatchComponentRequestData: PatchComponentRequestData,
    PatchComponentRequestDataAttributes: PatchComponentRequestDataAttributes,
    PatchDegradationRequest: PatchDegradationRequest,
    PatchDegradationRequestData: PatchDegradationRequestData,
    PatchDegradationRequestDataAttributes:
      PatchDegradationRequestDataAttributes,
    PatchDegradationRequestDataAttributesComponentsAffectedItems:
      PatchDegradationRequestDataAttributesComponentsAffectedItems,
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
