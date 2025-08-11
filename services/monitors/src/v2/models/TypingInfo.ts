import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { MonitorConfigPolicyAttributeCreateRequest } from "./MonitorConfigPolicyAttributeCreateRequest";
import { MonitorConfigPolicyAttributeEditRequest } from "./MonitorConfigPolicyAttributeEditRequest";
import { MonitorConfigPolicyAttributeResponse } from "./MonitorConfigPolicyAttributeResponse";
import { MonitorConfigPolicyCreateData } from "./MonitorConfigPolicyCreateData";
import { MonitorConfigPolicyCreateRequest } from "./MonitorConfigPolicyCreateRequest";
import { MonitorConfigPolicyEditData } from "./MonitorConfigPolicyEditData";
import { MonitorConfigPolicyEditRequest } from "./MonitorConfigPolicyEditRequest";
import { MonitorConfigPolicyListResponse } from "./MonitorConfigPolicyListResponse";
import { MonitorConfigPolicyResponse } from "./MonitorConfigPolicyResponse";
import { MonitorConfigPolicyResponseData } from "./MonitorConfigPolicyResponseData";
import { MonitorConfigPolicyTagPolicy } from "./MonitorConfigPolicyTagPolicy";
import { MonitorConfigPolicyTagPolicyCreateRequest } from "./MonitorConfigPolicyTagPolicyCreateRequest";
import { MonitorNotificationRuleAttributes } from "./MonitorNotificationRuleAttributes";
import { MonitorNotificationRuleCreateRequest } from "./MonitorNotificationRuleCreateRequest";
import { MonitorNotificationRuleCreateRequestData } from "./MonitorNotificationRuleCreateRequestData";
import { MonitorNotificationRuleData } from "./MonitorNotificationRuleData";
import { MonitorNotificationRuleFilterTags } from "./MonitorNotificationRuleFilterTags";
import { MonitorNotificationRuleListResponse } from "./MonitorNotificationRuleListResponse";
import { MonitorNotificationRuleRelationships } from "./MonitorNotificationRuleRelationships";
import { MonitorNotificationRuleRelationshipsCreatedBy } from "./MonitorNotificationRuleRelationshipsCreatedBy";
import { MonitorNotificationRuleRelationshipsCreatedByData } from "./MonitorNotificationRuleRelationshipsCreatedByData";
import { MonitorNotificationRuleResponse } from "./MonitorNotificationRuleResponse";
import { MonitorNotificationRuleResponseAttributes } from "./MonitorNotificationRuleResponseAttributes";
import { MonitorNotificationRuleUpdateRequest } from "./MonitorNotificationRuleUpdateRequest";
import { MonitorNotificationRuleUpdateRequestData } from "./MonitorNotificationRuleUpdateRequestData";
import { MonitorUserTemplate } from "./MonitorUserTemplate";
import { MonitorUserTemplateCreateData } from "./MonitorUserTemplateCreateData";
import { MonitorUserTemplateCreateRequest } from "./MonitorUserTemplateCreateRequest";
import { MonitorUserTemplateCreateResponse } from "./MonitorUserTemplateCreateResponse";
import { MonitorUserTemplateListResponse } from "./MonitorUserTemplateListResponse";
import { MonitorUserTemplateRequestAttributes } from "./MonitorUserTemplateRequestAttributes";
import { MonitorUserTemplateResponse } from "./MonitorUserTemplateResponse";
import { MonitorUserTemplateResponseAttributes } from "./MonitorUserTemplateResponseAttributes";
import { MonitorUserTemplateResponseData } from "./MonitorUserTemplateResponseData";
import { MonitorUserTemplateResponseDataWithVersions } from "./MonitorUserTemplateResponseDataWithVersions";
import { MonitorUserTemplateTemplateVariablesItems } from "./MonitorUserTemplateTemplateVariablesItems";
import { MonitorUserTemplateUpdateData } from "./MonitorUserTemplateUpdateData";
import { MonitorUserTemplateUpdateRequest } from "./MonitorUserTemplateUpdateRequest";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { SimpleMonitorUserTemplate } from "./SimpleMonitorUserTemplate";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    MonitorConfigPolicyResourceType: ["monitor-config-policy"],
    MonitorConfigPolicyType: ["tag"],
    MonitorNotificationRuleResourceType: ["monitor-notification-rule"],
    MonitorUserTemplateResourceType: ["monitor-user-template"],
    OrganizationsType: ["orgs"],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    MonitorConfigPolicyPolicy: ["MonitorConfigPolicyTagPolicy"],
    MonitorConfigPolicyPolicyCreateRequest: [
      "MonitorConfigPolicyTagPolicyCreateRequest",
    ],
    MonitorNotificationRuleFilter: ["MonitorNotificationRuleFilterTags"],
    MonitorNotificationRuleResponseIncludedItem: ["User"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    MonitorConfigPolicyAttributeCreateRequest:
      MonitorConfigPolicyAttributeCreateRequest,
    MonitorConfigPolicyAttributeEditRequest:
      MonitorConfigPolicyAttributeEditRequest,
    MonitorConfigPolicyAttributeResponse: MonitorConfigPolicyAttributeResponse,
    MonitorConfigPolicyCreateData: MonitorConfigPolicyCreateData,
    MonitorConfigPolicyCreateRequest: MonitorConfigPolicyCreateRequest,
    MonitorConfigPolicyEditData: MonitorConfigPolicyEditData,
    MonitorConfigPolicyEditRequest: MonitorConfigPolicyEditRequest,
    MonitorConfigPolicyListResponse: MonitorConfigPolicyListResponse,
    MonitorConfigPolicyResponse: MonitorConfigPolicyResponse,
    MonitorConfigPolicyResponseData: MonitorConfigPolicyResponseData,
    MonitorConfigPolicyTagPolicy: MonitorConfigPolicyTagPolicy,
    MonitorConfigPolicyTagPolicyCreateRequest:
      MonitorConfigPolicyTagPolicyCreateRequest,
    MonitorNotificationRuleAttributes: MonitorNotificationRuleAttributes,
    MonitorNotificationRuleCreateRequest: MonitorNotificationRuleCreateRequest,
    MonitorNotificationRuleCreateRequestData:
      MonitorNotificationRuleCreateRequestData,
    MonitorNotificationRuleData: MonitorNotificationRuleData,
    MonitorNotificationRuleFilterTags: MonitorNotificationRuleFilterTags,
    MonitorNotificationRuleListResponse: MonitorNotificationRuleListResponse,
    MonitorNotificationRuleRelationships: MonitorNotificationRuleRelationships,
    MonitorNotificationRuleRelationshipsCreatedBy:
      MonitorNotificationRuleRelationshipsCreatedBy,
    MonitorNotificationRuleRelationshipsCreatedByData:
      MonitorNotificationRuleRelationshipsCreatedByData,
    MonitorNotificationRuleResponse: MonitorNotificationRuleResponse,
    MonitorNotificationRuleResponseAttributes:
      MonitorNotificationRuleResponseAttributes,
    MonitorNotificationRuleUpdateRequest: MonitorNotificationRuleUpdateRequest,
    MonitorNotificationRuleUpdateRequestData:
      MonitorNotificationRuleUpdateRequestData,
    MonitorUserTemplate: MonitorUserTemplate,
    MonitorUserTemplateCreateData: MonitorUserTemplateCreateData,
    MonitorUserTemplateCreateRequest: MonitorUserTemplateCreateRequest,
    MonitorUserTemplateCreateResponse: MonitorUserTemplateCreateResponse,
    MonitorUserTemplateListResponse: MonitorUserTemplateListResponse,
    MonitorUserTemplateRequestAttributes: MonitorUserTemplateRequestAttributes,
    MonitorUserTemplateResponse: MonitorUserTemplateResponse,
    MonitorUserTemplateResponseAttributes:
      MonitorUserTemplateResponseAttributes,
    MonitorUserTemplateResponseData: MonitorUserTemplateResponseData,
    MonitorUserTemplateResponseDataWithVersions:
      MonitorUserTemplateResponseDataWithVersions,
    MonitorUserTemplateTemplateVariablesItems:
      MonitorUserTemplateTemplateVariablesItems,
    MonitorUserTemplateUpdateData: MonitorUserTemplateUpdateData,
    MonitorUserTemplateUpdateRequest: MonitorUserTemplateUpdateRequest,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    SimpleMonitorUserTemplate: SimpleMonitorUserTemplate,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
  },
};
