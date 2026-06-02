import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SalesforceIncidentsOrganizationResponseAttributes } from "./SalesforceIncidentsOrganizationResponseAttributes";
import { SalesforceIncidentsOrganizationResponseData } from "./SalesforceIncidentsOrganizationResponseData";
import { SalesforceIncidentsOrganizationsResponse } from "./SalesforceIncidentsOrganizationsResponse";
import { SalesforceIncidentsTemplateCreateAttributes } from "./SalesforceIncidentsTemplateCreateAttributes";
import { SalesforceIncidentsTemplateCreateData } from "./SalesforceIncidentsTemplateCreateData";
import { SalesforceIncidentsTemplateCreateRequest } from "./SalesforceIncidentsTemplateCreateRequest";
import { SalesforceIncidentsTemplateResponse } from "./SalesforceIncidentsTemplateResponse";
import { SalesforceIncidentsTemplateResponseAttributes } from "./SalesforceIncidentsTemplateResponseAttributes";
import { SalesforceIncidentsTemplateResponseData } from "./SalesforceIncidentsTemplateResponseData";
import { SalesforceIncidentsTemplateUpdateAttributes } from "./SalesforceIncidentsTemplateUpdateAttributes";
import { SalesforceIncidentsTemplateUpdateData } from "./SalesforceIncidentsTemplateUpdateData";
import { SalesforceIncidentsTemplateUpdateRequest } from "./SalesforceIncidentsTemplateUpdateRequest";
import { SalesforceIncidentsTemplatesResponse } from "./SalesforceIncidentsTemplatesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SalesforceIncidentsOrganizationType: ["salesforce-incidents-org"],
    SalesforceIncidentsTemplatePriority: [
      "Critical",
      "High",
      "Moderate",
      "Low",
    ],
    SalesforceIncidentsTemplateType: ["salesforce-incidents-incident-template"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SalesforceIncidentsOrganizationResponseAttributes:
      SalesforceIncidentsOrganizationResponseAttributes,
    SalesforceIncidentsOrganizationResponseData:
      SalesforceIncidentsOrganizationResponseData,
    SalesforceIncidentsOrganizationsResponse:
      SalesforceIncidentsOrganizationsResponse,
    SalesforceIncidentsTemplateCreateAttributes:
      SalesforceIncidentsTemplateCreateAttributes,
    SalesforceIncidentsTemplateCreateData:
      SalesforceIncidentsTemplateCreateData,
    SalesforceIncidentsTemplateCreateRequest:
      SalesforceIncidentsTemplateCreateRequest,
    SalesforceIncidentsTemplateResponse: SalesforceIncidentsTemplateResponse,
    SalesforceIncidentsTemplateResponseAttributes:
      SalesforceIncidentsTemplateResponseAttributes,
    SalesforceIncidentsTemplateResponseData:
      SalesforceIncidentsTemplateResponseData,
    SalesforceIncidentsTemplateUpdateAttributes:
      SalesforceIncidentsTemplateUpdateAttributes,
    SalesforceIncidentsTemplateUpdateData:
      SalesforceIncidentsTemplateUpdateData,
    SalesforceIncidentsTemplateUpdateRequest:
      SalesforceIncidentsTemplateUpdateRequest,
    SalesforceIncidentsTemplatesResponse: SalesforceIncidentsTemplatesResponse,
  },
};
