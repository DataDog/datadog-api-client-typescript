import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AnnotationAttributes } from "./AnnotationAttributes";
import { AnnotationCreateAttributes } from "./AnnotationCreateAttributes";
import { AnnotationCreateRequest } from "./AnnotationCreateRequest";
import { AnnotationData } from "./AnnotationData";
import { AnnotationInPage } from "./AnnotationInPage";
import { AnnotationRequestData } from "./AnnotationRequestData";
import { AnnotationResponse } from "./AnnotationResponse";
import { AnnotationUpdateRequest } from "./AnnotationUpdateRequest";
import { AnnotationsResponse } from "./AnnotationsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PageAnnotationsAttributes } from "./PageAnnotationsAttributes";
import { PageAnnotationsData } from "./PageAnnotationsData";
import { PageAnnotationsResponse } from "./PageAnnotationsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AnnotationColor: ["gray", "blue", "purple", "green", "yellow", "red"],
    AnnotationKind: ["pointInTime", "timeRegion"],
    AnnotationType: ["annotation"],
    PageAnnotationsType: ["page_annotations"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AnnotationAttributes: AnnotationAttributes,
    AnnotationCreateAttributes: AnnotationCreateAttributes,
    AnnotationCreateRequest: AnnotationCreateRequest,
    AnnotationData: AnnotationData,
    AnnotationInPage: AnnotationInPage,
    AnnotationRequestData: AnnotationRequestData,
    AnnotationResponse: AnnotationResponse,
    AnnotationUpdateRequest: AnnotationUpdateRequest,
    AnnotationsResponse: AnnotationsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PageAnnotationsAttributes: PageAnnotationsAttributes,
    PageAnnotationsData: PageAnnotationsData,
    PageAnnotationsResponse: PageAnnotationsResponse,
  },
};
