import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { OrgConnection } from "./OrgConnection";
import { OrgConnectionAttributes } from "./OrgConnectionAttributes";
import { OrgConnectionCreate } from "./OrgConnectionCreate";
import { OrgConnectionCreateAttributes } from "./OrgConnectionCreateAttributes";
import { OrgConnectionCreateRelationships } from "./OrgConnectionCreateRelationships";
import { OrgConnectionCreateRequest } from "./OrgConnectionCreateRequest";
import { OrgConnectionListResponse } from "./OrgConnectionListResponse";
import { OrgConnectionListResponseMeta } from "./OrgConnectionListResponseMeta";
import { OrgConnectionListResponseMetaPage } from "./OrgConnectionListResponseMetaPage";
import { OrgConnectionOrgRelationship } from "./OrgConnectionOrgRelationship";
import { OrgConnectionOrgRelationshipData } from "./OrgConnectionOrgRelationshipData";
import { OrgConnectionRelationships } from "./OrgConnectionRelationships";
import { OrgConnectionResponse } from "./OrgConnectionResponse";
import { OrgConnectionUpdate } from "./OrgConnectionUpdate";
import { OrgConnectionUpdateAttributes } from "./OrgConnectionUpdateAttributes";
import { OrgConnectionUpdateRequest } from "./OrgConnectionUpdateRequest";
import { OrgConnectionUserRelationship } from "./OrgConnectionUserRelationship";
import { OrgConnectionUserRelationshipData } from "./OrgConnectionUserRelationshipData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OrgConnectionOrgRelationshipDataType: ["orgs"],
    OrgConnectionType: ["org_connection"],
    OrgConnectionTypeEnum: ["logs", "metrics"],
    OrgConnectionUserRelationshipDataType: ["users"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    OrgConnection: OrgConnection,
    OrgConnectionAttributes: OrgConnectionAttributes,
    OrgConnectionCreate: OrgConnectionCreate,
    OrgConnectionCreateAttributes: OrgConnectionCreateAttributes,
    OrgConnectionCreateRelationships: OrgConnectionCreateRelationships,
    OrgConnectionCreateRequest: OrgConnectionCreateRequest,
    OrgConnectionListResponse: OrgConnectionListResponse,
    OrgConnectionListResponseMeta: OrgConnectionListResponseMeta,
    OrgConnectionListResponseMetaPage: OrgConnectionListResponseMetaPage,
    OrgConnectionOrgRelationship: OrgConnectionOrgRelationship,
    OrgConnectionOrgRelationshipData: OrgConnectionOrgRelationshipData,
    OrgConnectionRelationships: OrgConnectionRelationships,
    OrgConnectionResponse: OrgConnectionResponse,
    OrgConnectionUpdate: OrgConnectionUpdate,
    OrgConnectionUpdateAttributes: OrgConnectionUpdateAttributes,
    OrgConnectionUpdateRequest: OrgConnectionUpdateRequest,
    OrgConnectionUserRelationship: OrgConnectionUserRelationship,
    OrgConnectionUserRelationshipData: OrgConnectionUserRelationshipData,
  },
};
