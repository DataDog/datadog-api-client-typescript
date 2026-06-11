import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ReportScheduleAuthor } from "./ReportScheduleAuthor";
import { ReportScheduleAuthorAttributes } from "./ReportScheduleAuthorAttributes";
import { ReportScheduleAuthorRelationship } from "./ReportScheduleAuthorRelationship";
import { ReportScheduleAuthorRelationshipData } from "./ReportScheduleAuthorRelationshipData";
import { ReportScheduleCreateRequest } from "./ReportScheduleCreateRequest";
import { ReportScheduleCreateRequestAttributes } from "./ReportScheduleCreateRequestAttributes";
import { ReportScheduleCreateRequestData } from "./ReportScheduleCreateRequestData";
import { ReportSchedulePatchRequest } from "./ReportSchedulePatchRequest";
import { ReportSchedulePatchRequestAttributes } from "./ReportSchedulePatchRequestAttributes";
import { ReportSchedulePatchRequestData } from "./ReportSchedulePatchRequestData";
import { ReportScheduleResponse } from "./ReportScheduleResponse";
import { ReportScheduleResponseAttributes } from "./ReportScheduleResponseAttributes";
import { ReportScheduleResponseData } from "./ReportScheduleResponseData";
import { ReportScheduleResponseRelationships } from "./ReportScheduleResponseRelationships";
import { ReportScheduleTemplateVariable } from "./ReportScheduleTemplateVariable";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ReportScheduleAuthorType: ["users"],
    ReportScheduleDeliveryFormat: ["pdf", "png", "pdf_and_png"],
    ReportScheduleResourceType: ["dashboard", "integration_dashboard"],
    ReportScheduleResponseAttributesDeliveryFormat: [
      "pdf",
      "png",
      "pdf_and_png",
    ],
    ReportScheduleStatus: ["active", "inactive"],
    ReportScheduleType: ["schedule"],
  },
  oneOfMap: {
    ReportScheduleIncludedResource: ["ReportScheduleAuthor"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ReportScheduleAuthor: ReportScheduleAuthor,
    ReportScheduleAuthorAttributes: ReportScheduleAuthorAttributes,
    ReportScheduleAuthorRelationship: ReportScheduleAuthorRelationship,
    ReportScheduleAuthorRelationshipData: ReportScheduleAuthorRelationshipData,
    ReportScheduleCreateRequest: ReportScheduleCreateRequest,
    ReportScheduleCreateRequestAttributes:
      ReportScheduleCreateRequestAttributes,
    ReportScheduleCreateRequestData: ReportScheduleCreateRequestData,
    ReportSchedulePatchRequest: ReportSchedulePatchRequest,
    ReportSchedulePatchRequestAttributes: ReportSchedulePatchRequestAttributes,
    ReportSchedulePatchRequestData: ReportSchedulePatchRequestData,
    ReportScheduleResponse: ReportScheduleResponse,
    ReportScheduleResponseAttributes: ReportScheduleResponseAttributes,
    ReportScheduleResponseData: ReportScheduleResponseData,
    ReportScheduleResponseRelationships: ReportScheduleResponseRelationships,
    ReportScheduleTemplateVariable: ReportScheduleTemplateVariable,
  },
};
