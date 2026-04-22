import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GlobalOrgIdentifier } from "./GlobalOrgIdentifier";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OrgGroupAttributes } from "./OrgGroupAttributes";
import { OrgGroupCreateAttributes } from "./OrgGroupCreateAttributes";
import { OrgGroupCreateData } from "./OrgGroupCreateData";
import { OrgGroupCreateRequest } from "./OrgGroupCreateRequest";
import { OrgGroupData } from "./OrgGroupData";
import { OrgGroupListResponse } from "./OrgGroupListResponse";
import { OrgGroupMembershipAttributes } from "./OrgGroupMembershipAttributes";
import { OrgGroupMembershipBulkUpdateAttributes } from "./OrgGroupMembershipBulkUpdateAttributes";
import { OrgGroupMembershipBulkUpdateData } from "./OrgGroupMembershipBulkUpdateData";
import { OrgGroupMembershipBulkUpdateRelationships } from "./OrgGroupMembershipBulkUpdateRelationships";
import { OrgGroupMembershipBulkUpdateRequest } from "./OrgGroupMembershipBulkUpdateRequest";
import { OrgGroupMembershipData } from "./OrgGroupMembershipData";
import { OrgGroupMembershipListResponse } from "./OrgGroupMembershipListResponse";
import { OrgGroupMembershipRelationshipData } from "./OrgGroupMembershipRelationshipData";
import { OrgGroupMembershipRelationships } from "./OrgGroupMembershipRelationships";
import { OrgGroupMembershipResponse } from "./OrgGroupMembershipResponse";
import { OrgGroupMembershipUpdateData } from "./OrgGroupMembershipUpdateData";
import { OrgGroupMembershipUpdateRelationships } from "./OrgGroupMembershipUpdateRelationships";
import { OrgGroupMembershipUpdateRequest } from "./OrgGroupMembershipUpdateRequest";
import { OrgGroupMembershipsRelationship } from "./OrgGroupMembershipsRelationship";
import { OrgGroupPaginationMeta } from "./OrgGroupPaginationMeta";
import { OrgGroupPaginationMetaPage } from "./OrgGroupPaginationMetaPage";
import { OrgGroupPolicyAttributes } from "./OrgGroupPolicyAttributes";
import { OrgGroupPolicyConfigAttributes } from "./OrgGroupPolicyConfigAttributes";
import { OrgGroupPolicyConfigData } from "./OrgGroupPolicyConfigData";
import { OrgGroupPolicyConfigListResponse } from "./OrgGroupPolicyConfigListResponse";
import { OrgGroupPolicyCreateAttributes } from "./OrgGroupPolicyCreateAttributes";
import { OrgGroupPolicyCreateData } from "./OrgGroupPolicyCreateData";
import { OrgGroupPolicyCreateRelationships } from "./OrgGroupPolicyCreateRelationships";
import { OrgGroupPolicyCreateRequest } from "./OrgGroupPolicyCreateRequest";
import { OrgGroupPolicyData } from "./OrgGroupPolicyData";
import { OrgGroupPolicyListResponse } from "./OrgGroupPolicyListResponse";
import { OrgGroupPolicyOverrideAttributes } from "./OrgGroupPolicyOverrideAttributes";
import { OrgGroupPolicyOverrideCreateAttributes } from "./OrgGroupPolicyOverrideCreateAttributes";
import { OrgGroupPolicyOverrideCreateData } from "./OrgGroupPolicyOverrideCreateData";
import { OrgGroupPolicyOverrideCreateRelationships } from "./OrgGroupPolicyOverrideCreateRelationships";
import { OrgGroupPolicyOverrideCreateRequest } from "./OrgGroupPolicyOverrideCreateRequest";
import { OrgGroupPolicyOverrideData } from "./OrgGroupPolicyOverrideData";
import { OrgGroupPolicyOverrideListResponse } from "./OrgGroupPolicyOverrideListResponse";
import { OrgGroupPolicyOverrideRelationships } from "./OrgGroupPolicyOverrideRelationships";
import { OrgGroupPolicyOverrideResponse } from "./OrgGroupPolicyOverrideResponse";
import { OrgGroupPolicyOverrideUpdateAttributes } from "./OrgGroupPolicyOverrideUpdateAttributes";
import { OrgGroupPolicyOverrideUpdateData } from "./OrgGroupPolicyOverrideUpdateData";
import { OrgGroupPolicyOverrideUpdateRequest } from "./OrgGroupPolicyOverrideUpdateRequest";
import { OrgGroupPolicyRelationshipToOne } from "./OrgGroupPolicyRelationshipToOne";
import { OrgGroupPolicyRelationshipToOneData } from "./OrgGroupPolicyRelationshipToOneData";
import { OrgGroupPolicyRelationships } from "./OrgGroupPolicyRelationships";
import { OrgGroupPolicyResponse } from "./OrgGroupPolicyResponse";
import { OrgGroupPolicyUpdateAttributes } from "./OrgGroupPolicyUpdateAttributes";
import { OrgGroupPolicyUpdateData } from "./OrgGroupPolicyUpdateData";
import { OrgGroupPolicyUpdateRequest } from "./OrgGroupPolicyUpdateRequest";
import { OrgGroupRelationshipToOne } from "./OrgGroupRelationshipToOne";
import { OrgGroupRelationshipToOneData } from "./OrgGroupRelationshipToOneData";
import { OrgGroupRelationships } from "./OrgGroupRelationships";
import { OrgGroupResponse } from "./OrgGroupResponse";
import { OrgGroupUpdateAttributes } from "./OrgGroupUpdateAttributes";
import { OrgGroupUpdateData } from "./OrgGroupUpdateData";
import { OrgGroupUpdateRequest } from "./OrgGroupUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OrgGroupIncludeOption: ["memberships"],
    OrgGroupMembershipBulkUpdateType: ["org_group_membership_bulk_updates"],
    OrgGroupMembershipSortOption: ["name", "-name", "uuid", "-uuid"],
    OrgGroupMembershipType: ["org_group_memberships"],
    OrgGroupPolicyConfigType: ["org_group_policy_configs"],
    OrgGroupPolicyEnforcementTier: ["DEFAULT", "ENFORCE", "DELEGATE"],
    OrgGroupPolicyOverrideSortOption: ["id", "-id", "org_uuid", "-org_uuid"],
    OrgGroupPolicyOverrideType: ["org_group_policy_overrides"],
    OrgGroupPolicyPolicyType: ["org_config"],
    OrgGroupPolicySortOption: ["id", "-id", "name", "-name"],
    OrgGroupPolicyType: ["org_group_policies"],
    OrgGroupSortOption: ["name", "-name", "uuid", "-uuid"],
    OrgGroupType: ["org_groups"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GlobalOrgIdentifier: GlobalOrgIdentifier,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OrgGroupAttributes: OrgGroupAttributes,
    OrgGroupCreateAttributes: OrgGroupCreateAttributes,
    OrgGroupCreateData: OrgGroupCreateData,
    OrgGroupCreateRequest: OrgGroupCreateRequest,
    OrgGroupData: OrgGroupData,
    OrgGroupListResponse: OrgGroupListResponse,
    OrgGroupMembershipAttributes: OrgGroupMembershipAttributes,
    OrgGroupMembershipBulkUpdateAttributes:
      OrgGroupMembershipBulkUpdateAttributes,
    OrgGroupMembershipBulkUpdateData: OrgGroupMembershipBulkUpdateData,
    OrgGroupMembershipBulkUpdateRelationships:
      OrgGroupMembershipBulkUpdateRelationships,
    OrgGroupMembershipBulkUpdateRequest: OrgGroupMembershipBulkUpdateRequest,
    OrgGroupMembershipData: OrgGroupMembershipData,
    OrgGroupMembershipListResponse: OrgGroupMembershipListResponse,
    OrgGroupMembershipRelationshipData: OrgGroupMembershipRelationshipData,
    OrgGroupMembershipRelationships: OrgGroupMembershipRelationships,
    OrgGroupMembershipResponse: OrgGroupMembershipResponse,
    OrgGroupMembershipUpdateData: OrgGroupMembershipUpdateData,
    OrgGroupMembershipUpdateRelationships:
      OrgGroupMembershipUpdateRelationships,
    OrgGroupMembershipUpdateRequest: OrgGroupMembershipUpdateRequest,
    OrgGroupMembershipsRelationship: OrgGroupMembershipsRelationship,
    OrgGroupPaginationMeta: OrgGroupPaginationMeta,
    OrgGroupPaginationMetaPage: OrgGroupPaginationMetaPage,
    OrgGroupPolicyAttributes: OrgGroupPolicyAttributes,
    OrgGroupPolicyConfigAttributes: OrgGroupPolicyConfigAttributes,
    OrgGroupPolicyConfigData: OrgGroupPolicyConfigData,
    OrgGroupPolicyConfigListResponse: OrgGroupPolicyConfigListResponse,
    OrgGroupPolicyCreateAttributes: OrgGroupPolicyCreateAttributes,
    OrgGroupPolicyCreateData: OrgGroupPolicyCreateData,
    OrgGroupPolicyCreateRelationships: OrgGroupPolicyCreateRelationships,
    OrgGroupPolicyCreateRequest: OrgGroupPolicyCreateRequest,
    OrgGroupPolicyData: OrgGroupPolicyData,
    OrgGroupPolicyListResponse: OrgGroupPolicyListResponse,
    OrgGroupPolicyOverrideAttributes: OrgGroupPolicyOverrideAttributes,
    OrgGroupPolicyOverrideCreateAttributes:
      OrgGroupPolicyOverrideCreateAttributes,
    OrgGroupPolicyOverrideCreateData: OrgGroupPolicyOverrideCreateData,
    OrgGroupPolicyOverrideCreateRelationships:
      OrgGroupPolicyOverrideCreateRelationships,
    OrgGroupPolicyOverrideCreateRequest: OrgGroupPolicyOverrideCreateRequest,
    OrgGroupPolicyOverrideData: OrgGroupPolicyOverrideData,
    OrgGroupPolicyOverrideListResponse: OrgGroupPolicyOverrideListResponse,
    OrgGroupPolicyOverrideRelationships: OrgGroupPolicyOverrideRelationships,
    OrgGroupPolicyOverrideResponse: OrgGroupPolicyOverrideResponse,
    OrgGroupPolicyOverrideUpdateAttributes:
      OrgGroupPolicyOverrideUpdateAttributes,
    OrgGroupPolicyOverrideUpdateData: OrgGroupPolicyOverrideUpdateData,
    OrgGroupPolicyOverrideUpdateRequest: OrgGroupPolicyOverrideUpdateRequest,
    OrgGroupPolicyRelationshipToOne: OrgGroupPolicyRelationshipToOne,
    OrgGroupPolicyRelationshipToOneData: OrgGroupPolicyRelationshipToOneData,
    OrgGroupPolicyRelationships: OrgGroupPolicyRelationships,
    OrgGroupPolicyResponse: OrgGroupPolicyResponse,
    OrgGroupPolicyUpdateAttributes: OrgGroupPolicyUpdateAttributes,
    OrgGroupPolicyUpdateData: OrgGroupPolicyUpdateData,
    OrgGroupPolicyUpdateRequest: OrgGroupPolicyUpdateRequest,
    OrgGroupRelationshipToOne: OrgGroupRelationshipToOne,
    OrgGroupRelationshipToOneData: OrgGroupRelationshipToOneData,
    OrgGroupRelationships: OrgGroupRelationships,
    OrgGroupResponse: OrgGroupResponse,
    OrgGroupUpdateAttributes: OrgGroupUpdateAttributes,
    OrgGroupUpdateData: OrgGroupUpdateData,
    OrgGroupUpdateRequest: OrgGroupUpdateRequest,
  },
};
