import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DatasetReportScheduleListResponse } from "./DatasetReportScheduleListResponse";
import { DatasetReportScheduleResponseAttributes } from "./DatasetReportScheduleResponseAttributes";
import { DatasetReportScheduleResponseData } from "./DatasetReportScheduleResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PrintReportRequest } from "./PrintReportRequest";
import { PrintReportRequestAttributes } from "./PrintReportRequestAttributes";
import { PrintReportRequestData } from "./PrintReportRequestData";
import { PrintReportResponse } from "./PrintReportResponse";
import { PrintReportResponseAttributes } from "./PrintReportResponseAttributes";
import { PrintReportResponseData } from "./PrintReportResponseData";
import { ReportScheduleAuthor } from "./ReportScheduleAuthor";
import { ReportScheduleAuthorAttributes } from "./ReportScheduleAuthorAttributes";
import { ReportScheduleAuthorRelationship } from "./ReportScheduleAuthorRelationship";
import { ReportScheduleAuthorRelationshipData } from "./ReportScheduleAuthorRelationshipData";
import { ReportScheduleCreateRequest } from "./ReportScheduleCreateRequest";
import { ReportScheduleCreateRequestAttributes } from "./ReportScheduleCreateRequestAttributes";
import { ReportScheduleCreateRequestData } from "./ReportScheduleCreateRequestData";
import { ReportScheduleIndexTemplateVariable } from "./ReportScheduleIndexTemplateVariable";
import { ReportScheduleListResourceRelationship } from "./ReportScheduleListResourceRelationship";
import { ReportScheduleListResourceRelationshipData } from "./ReportScheduleListResourceRelationshipData";
import { ReportScheduleListResponse } from "./ReportScheduleListResponse";
import { ReportScheduleListResponseAttributes } from "./ReportScheduleListResponseAttributes";
import { ReportScheduleListResponseData } from "./ReportScheduleListResponseData";
import { ReportScheduleListResponseLinks } from "./ReportScheduleListResponseLinks";
import { ReportScheduleListResponseMeta } from "./ReportScheduleListResponseMeta";
import { ReportScheduleListResponsePagination } from "./ReportScheduleListResponsePagination";
import { ReportScheduleListResponseRelationships } from "./ReportScheduleListResponseRelationships";
import { ReportSchedulePatchRequest } from "./ReportSchedulePatchRequest";
import { ReportSchedulePatchRequestAttributes } from "./ReportSchedulePatchRequestAttributes";
import { ReportSchedulePatchRequestData } from "./ReportSchedulePatchRequestData";
import { ReportScheduleResource } from "./ReportScheduleResource";
import { ReportScheduleResourceAttributes } from "./ReportScheduleResourceAttributes";
import { ReportScheduleResponse } from "./ReportScheduleResponse";
import { ReportScheduleResponseAttributes } from "./ReportScheduleResponseAttributes";
import { ReportScheduleResponseData } from "./ReportScheduleResponseData";
import { ReportScheduleResponseRelationships } from "./ReportScheduleResponseRelationships";
import { ReportScheduleTemplateVariable } from "./ReportScheduleTemplateVariable";
import { ReportScheduleToggleRequest } from "./ReportScheduleToggleRequest";
import { ReportScheduleToggleRequestAttributes } from "./ReportScheduleToggleRequestAttributes";
import { ReportScheduleToggleRequestData } from "./ReportScheduleToggleRequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DatasetReportScheduleResourceType: ["widget_dataset_list"],
    PrintReportType: ["report"],
    ReportScheduleAuthorType: ["users"],
    ReportScheduleDeliveryFormat: ["pdf", "png", "pdf_and_png"],
    ReportScheduleIncludedResourceType: ["resource"],
    ReportScheduleListResponsePaginationType: ["offset_limit"],
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
    ReportScheduleIncludedResource: [
      "ReportScheduleAuthor",
      "ReportScheduleResource",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DatasetReportScheduleListResponse: DatasetReportScheduleListResponse,
    DatasetReportScheduleResponseAttributes:
      DatasetReportScheduleResponseAttributes,
    DatasetReportScheduleResponseData: DatasetReportScheduleResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PrintReportRequest: PrintReportRequest,
    PrintReportRequestAttributes: PrintReportRequestAttributes,
    PrintReportRequestData: PrintReportRequestData,
    PrintReportResponse: PrintReportResponse,
    PrintReportResponseAttributes: PrintReportResponseAttributes,
    PrintReportResponseData: PrintReportResponseData,
    ReportScheduleAuthor: ReportScheduleAuthor,
    ReportScheduleAuthorAttributes: ReportScheduleAuthorAttributes,
    ReportScheduleAuthorRelationship: ReportScheduleAuthorRelationship,
    ReportScheduleAuthorRelationshipData: ReportScheduleAuthorRelationshipData,
    ReportScheduleCreateRequest: ReportScheduleCreateRequest,
    ReportScheduleCreateRequestAttributes:
      ReportScheduleCreateRequestAttributes,
    ReportScheduleCreateRequestData: ReportScheduleCreateRequestData,
    ReportScheduleIndexTemplateVariable: ReportScheduleIndexTemplateVariable,
    ReportScheduleListResourceRelationship:
      ReportScheduleListResourceRelationship,
    ReportScheduleListResourceRelationshipData:
      ReportScheduleListResourceRelationshipData,
    ReportScheduleListResponse: ReportScheduleListResponse,
    ReportScheduleListResponseAttributes: ReportScheduleListResponseAttributes,
    ReportScheduleListResponseData: ReportScheduleListResponseData,
    ReportScheduleListResponseLinks: ReportScheduleListResponseLinks,
    ReportScheduleListResponseMeta: ReportScheduleListResponseMeta,
    ReportScheduleListResponsePagination: ReportScheduleListResponsePagination,
    ReportScheduleListResponseRelationships:
      ReportScheduleListResponseRelationships,
    ReportSchedulePatchRequest: ReportSchedulePatchRequest,
    ReportSchedulePatchRequestAttributes: ReportSchedulePatchRequestAttributes,
    ReportSchedulePatchRequestData: ReportSchedulePatchRequestData,
    ReportScheduleResource: ReportScheduleResource,
    ReportScheduleResourceAttributes: ReportScheduleResourceAttributes,
    ReportScheduleResponse: ReportScheduleResponse,
    ReportScheduleResponseAttributes: ReportScheduleResponseAttributes,
    ReportScheduleResponseData: ReportScheduleResponseData,
    ReportScheduleResponseRelationships: ReportScheduleResponseRelationships,
    ReportScheduleTemplateVariable: ReportScheduleTemplateVariable,
    ReportScheduleToggleRequest: ReportScheduleToggleRequest,
    ReportScheduleToggleRequestAttributes:
      ReportScheduleToggleRequestAttributes,
    ReportScheduleToggleRequestData: ReportScheduleToggleRequestData,
  },
};
