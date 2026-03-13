import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RumSegmentCreateAttributes } from "./RumSegmentCreateAttributes";
import { RumSegmentCreateData } from "./RumSegmentCreateData";
import { RumSegmentCreateRequest } from "./RumSegmentCreateRequest";
import { RumSegmentDataQuery } from "./RumSegmentDataQuery";
import { RumSegmentDeleteAttributes } from "./RumSegmentDeleteAttributes";
import { RumSegmentDeleteData } from "./RumSegmentDeleteData";
import { RumSegmentDeleteResponse } from "./RumSegmentDeleteResponse";
import { RumSegmentEventPlatform } from "./RumSegmentEventPlatform";
import { RumSegmentJourney } from "./RumSegmentJourney";
import { RumSegmentListResponse } from "./RumSegmentListResponse";
import { RumSegmentReferenceTable } from "./RumSegmentReferenceTable";
import { RumSegmentReferenceTableColumn } from "./RumSegmentReferenceTableColumn";
import { RumSegmentReferenceTableJoinCondition } from "./RumSegmentReferenceTableJoinCondition";
import { RumSegmentResponse } from "./RumSegmentResponse";
import { RumSegmentResponseAttributes } from "./RumSegmentResponseAttributes";
import { RumSegmentResponseData } from "./RumSegmentResponseData";
import { RumSegmentStaticEntry } from "./RumSegmentStaticEntry";
import { RumSegmentTemplateInstance } from "./RumSegmentTemplateInstance";
import { RumSegmentTemplateListResponse } from "./RumSegmentTemplateListResponse";
import { RumSegmentTemplateParameterDef } from "./RumSegmentTemplateParameterDef";
import { RumSegmentTemplateResponseAttributes } from "./RumSegmentTemplateResponseAttributes";
import { RumSegmentTemplateResponseData } from "./RumSegmentTemplateResponseData";
import { RumSegmentUpdateAttributes } from "./RumSegmentUpdateAttributes";
import { RumSegmentUpdateData } from "./RumSegmentUpdateData";
import { RumSegmentUpdateRequest } from "./RumSegmentUpdateRequest";
import { RumSegmentUser } from "./RumSegmentUser";
import { RumStaticSegmentCreateAttributes } from "./RumStaticSegmentCreateAttributes";
import { RumStaticSegmentCreateData } from "./RumStaticSegmentCreateData";
import { RumStaticSegmentCreateRequest } from "./RumStaticSegmentCreateRequest";
import { RumStaticSegmentJourneyFilter } from "./RumStaticSegmentJourneyFilter";
import { RumStaticSegmentJourneyNode } from "./RumStaticSegmentJourneyNode";
import { RumStaticSegmentJourneyQueryObject } from "./RumStaticSegmentJourneyQueryObject";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumSegmentDeleteType: ["deleted_segment"],
    RumSegmentResourceType: ["segment"],
    RumSegmentSegmentType: [
      "static",
      "event_platform",
      "combination",
      "journeys",
      "reference_table",
      "templates",
    ],
    RumSegmentSource: ["user_created", "initial"],
    RumSegmentTemplateResourceType: ["template_metadata"],
    RumSegmentTemplateStatus: ["active", "deprecated", "archived"],
    RumStaticSegmentRequestType: ["create_static_segment_request"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RumSegmentCreateAttributes: RumSegmentCreateAttributes,
    RumSegmentCreateData: RumSegmentCreateData,
    RumSegmentCreateRequest: RumSegmentCreateRequest,
    RumSegmentDataQuery: RumSegmentDataQuery,
    RumSegmentDeleteAttributes: RumSegmentDeleteAttributes,
    RumSegmentDeleteData: RumSegmentDeleteData,
    RumSegmentDeleteResponse: RumSegmentDeleteResponse,
    RumSegmentEventPlatform: RumSegmentEventPlatform,
    RumSegmentJourney: RumSegmentJourney,
    RumSegmentListResponse: RumSegmentListResponse,
    RumSegmentReferenceTable: RumSegmentReferenceTable,
    RumSegmentReferenceTableColumn: RumSegmentReferenceTableColumn,
    RumSegmentReferenceTableJoinCondition:
      RumSegmentReferenceTableJoinCondition,
    RumSegmentResponse: RumSegmentResponse,
    RumSegmentResponseAttributes: RumSegmentResponseAttributes,
    RumSegmentResponseData: RumSegmentResponseData,
    RumSegmentStaticEntry: RumSegmentStaticEntry,
    RumSegmentTemplateInstance: RumSegmentTemplateInstance,
    RumSegmentTemplateListResponse: RumSegmentTemplateListResponse,
    RumSegmentTemplateParameterDef: RumSegmentTemplateParameterDef,
    RumSegmentTemplateResponseAttributes: RumSegmentTemplateResponseAttributes,
    RumSegmentTemplateResponseData: RumSegmentTemplateResponseData,
    RumSegmentUpdateAttributes: RumSegmentUpdateAttributes,
    RumSegmentUpdateData: RumSegmentUpdateData,
    RumSegmentUpdateRequest: RumSegmentUpdateRequest,
    RumSegmentUser: RumSegmentUser,
    RumStaticSegmentCreateAttributes: RumStaticSegmentCreateAttributes,
    RumStaticSegmentCreateData: RumStaticSegmentCreateData,
    RumStaticSegmentCreateRequest: RumStaticSegmentCreateRequest,
    RumStaticSegmentJourneyFilter: RumStaticSegmentJourneyFilter,
    RumStaticSegmentJourneyNode: RumStaticSegmentJourneyNode,
    RumStaticSegmentJourneyQueryObject: RumStaticSegmentJourneyQueryObject,
  },
};
