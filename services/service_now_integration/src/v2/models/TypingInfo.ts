import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ServiceNowAssignmentGroupAttributes } from "./ServiceNowAssignmentGroupAttributes";
import { ServiceNowAssignmentGroupData } from "./ServiceNowAssignmentGroupData";
import { ServiceNowAssignmentGroupsResponse } from "./ServiceNowAssignmentGroupsResponse";
import { ServiceNowBusinessServiceAttributes } from "./ServiceNowBusinessServiceAttributes";
import { ServiceNowBusinessServiceData } from "./ServiceNowBusinessServiceData";
import { ServiceNowBusinessServicesResponse } from "./ServiceNowBusinessServicesResponse";
import { ServiceNowInstanceAttributes } from "./ServiceNowInstanceAttributes";
import { ServiceNowInstanceData } from "./ServiceNowInstanceData";
import { ServiceNowInstancesResponse } from "./ServiceNowInstancesResponse";
import { ServiceNowTemplateAttributes } from "./ServiceNowTemplateAttributes";
import { ServiceNowTemplateCreateRequest } from "./ServiceNowTemplateCreateRequest";
import { ServiceNowTemplateCreateRequestAttributes } from "./ServiceNowTemplateCreateRequestAttributes";
import { ServiceNowTemplateCreateRequestData } from "./ServiceNowTemplateCreateRequestData";
import { ServiceNowTemplateData } from "./ServiceNowTemplateData";
import { ServiceNowTemplateResponse } from "./ServiceNowTemplateResponse";
import { ServiceNowTemplateUpdateRequest } from "./ServiceNowTemplateUpdateRequest";
import { ServiceNowTemplateUpdateRequestAttributes } from "./ServiceNowTemplateUpdateRequestAttributes";
import { ServiceNowTemplateUpdateRequestData } from "./ServiceNowTemplateUpdateRequestData";
import { ServiceNowTemplatesResponse } from "./ServiceNowTemplatesResponse";
import { ServiceNowUserAttributes } from "./ServiceNowUserAttributes";
import { ServiceNowUserData } from "./ServiceNowUserData";
import { ServiceNowUsersResponse } from "./ServiceNowUsersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ServiceNowAssignmentGroupType: ["assignment_groups"],
    ServiceNowBusinessServiceType: ["business_services"],
    ServiceNowInstanceType: ["instance"],
    ServiceNowTemplateType: ["servicenow_templates"],
    ServiceNowUserType: ["users"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ServiceNowAssignmentGroupAttributes: ServiceNowAssignmentGroupAttributes,
    ServiceNowAssignmentGroupData: ServiceNowAssignmentGroupData,
    ServiceNowAssignmentGroupsResponse: ServiceNowAssignmentGroupsResponse,
    ServiceNowBusinessServiceAttributes: ServiceNowBusinessServiceAttributes,
    ServiceNowBusinessServiceData: ServiceNowBusinessServiceData,
    ServiceNowBusinessServicesResponse: ServiceNowBusinessServicesResponse,
    ServiceNowInstanceAttributes: ServiceNowInstanceAttributes,
    ServiceNowInstanceData: ServiceNowInstanceData,
    ServiceNowInstancesResponse: ServiceNowInstancesResponse,
    ServiceNowTemplateAttributes: ServiceNowTemplateAttributes,
    ServiceNowTemplateCreateRequest: ServiceNowTemplateCreateRequest,
    ServiceNowTemplateCreateRequestAttributes:
      ServiceNowTemplateCreateRequestAttributes,
    ServiceNowTemplateCreateRequestData: ServiceNowTemplateCreateRequestData,
    ServiceNowTemplateData: ServiceNowTemplateData,
    ServiceNowTemplateResponse: ServiceNowTemplateResponse,
    ServiceNowTemplateUpdateRequest: ServiceNowTemplateUpdateRequest,
    ServiceNowTemplateUpdateRequestAttributes:
      ServiceNowTemplateUpdateRequestAttributes,
    ServiceNowTemplateUpdateRequestData: ServiceNowTemplateUpdateRequestData,
    ServiceNowTemplatesResponse: ServiceNowTemplatesResponse,
    ServiceNowUserAttributes: ServiceNowUserAttributes,
    ServiceNowUserData: ServiceNowUserData,
    ServiceNowUsersResponse: ServiceNowUsersResponse,
  },
};
