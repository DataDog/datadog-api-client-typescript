import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ManagedOrgsData } from "./ManagedOrgsData";
import { ManagedOrgsRelationshipToOrg } from "./ManagedOrgsRelationshipToOrg";
import { ManagedOrgsRelationshipToOrgs } from "./ManagedOrgsRelationshipToOrgs";
import { ManagedOrgsRelationships } from "./ManagedOrgsRelationships";
import { ManagedOrgsResponse } from "./ManagedOrgsResponse";
import { OrgAttributes } from "./OrgAttributes";
import { OrgConfigGetResponse } from "./OrgConfigGetResponse";
import { OrgConfigListResponse } from "./OrgConfigListResponse";
import { OrgConfigRead } from "./OrgConfigRead";
import { OrgConfigReadAttributes } from "./OrgConfigReadAttributes";
import { OrgConfigWrite } from "./OrgConfigWrite";
import { OrgConfigWriteAttributes } from "./OrgConfigWriteAttributes";
import { OrgConfigWriteRequest } from "./OrgConfigWriteRequest";
import { OrgData } from "./OrgData";
import { OrgRelationshipData } from "./OrgRelationshipData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ManagedOrgsType: ["managed_orgs"],
    OrgConfigType: ["org_configs"],
    OrgResourceType: ["orgs"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ManagedOrgsData: ManagedOrgsData,
    ManagedOrgsRelationshipToOrg: ManagedOrgsRelationshipToOrg,
    ManagedOrgsRelationshipToOrgs: ManagedOrgsRelationshipToOrgs,
    ManagedOrgsRelationships: ManagedOrgsRelationships,
    ManagedOrgsResponse: ManagedOrgsResponse,
    OrgAttributes: OrgAttributes,
    OrgConfigGetResponse: OrgConfigGetResponse,
    OrgConfigListResponse: OrgConfigListResponse,
    OrgConfigRead: OrgConfigRead,
    OrgConfigReadAttributes: OrgConfigReadAttributes,
    OrgConfigWrite: OrgConfigWrite,
    OrgConfigWriteAttributes: OrgConfigWriteAttributes,
    OrgConfigWriteRequest: OrgConfigWriteRequest,
    OrgData: OrgData,
    OrgRelationshipData: OrgRelationshipData,
  },
};
