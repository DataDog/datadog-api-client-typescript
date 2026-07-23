import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RUMOperationCreateRequest } from "./RUMOperationCreateRequest";
import { RUMOperationCreateRequestData } from "./RUMOperationCreateRequestData";
import { RUMOperationJourneyCompositeRule } from "./RUMOperationJourneyCompositeRule";
import { RUMOperationJourneyNode } from "./RUMOperationJourneyNode";
import { RUMOperationJourneyPredicate } from "./RUMOperationJourneyPredicate";
import { RUMOperationJourneyRum } from "./RUMOperationJourneyRum";
import { RUMOperationJourneyStep } from "./RUMOperationJourneyStep";
import { RUMOperationRequestAttributes } from "./RUMOperationRequestAttributes";
import { RUMOperationResponse } from "./RUMOperationResponse";
import { RUMOperationResponseAttributes } from "./RUMOperationResponseAttributes";
import { RUMOperationResponseData } from "./RUMOperationResponseData";
import { RUMOperationStrongLinkCreateRequest } from "./RUMOperationStrongLinkCreateRequest";
import { RUMOperationStrongLinkCreateRequestAttributes } from "./RUMOperationStrongLinkCreateRequestAttributes";
import { RUMOperationStrongLinkCreateRequestData } from "./RUMOperationStrongLinkCreateRequestData";
import { RUMOperationStrongLinkResponse } from "./RUMOperationStrongLinkResponse";
import { RUMOperationStrongLinkResponseAttributes } from "./RUMOperationStrongLinkResponseAttributes";
import { RUMOperationStrongLinkResponseData } from "./RUMOperationStrongLinkResponseData";
import { RUMOperationStrongLinkUpdateRequest } from "./RUMOperationStrongLinkUpdateRequest";
import { RUMOperationStrongLinkUpdateRequestAttributes } from "./RUMOperationStrongLinkUpdateRequestAttributes";
import { RUMOperationStrongLinkUpdateRequestData } from "./RUMOperationStrongLinkUpdateRequestData";
import { RUMOperationStrongLinksListResponse } from "./RUMOperationStrongLinksListResponse";
import { RUMOperationStrongLinksListResponseMeta } from "./RUMOperationStrongLinksListResponseMeta";
import { RUMOperationUpdateRequest } from "./RUMOperationUpdateRequest";
import { RUMOperationUpdateRequestData } from "./RUMOperationUpdateRequestData";
import { RUMOperationUser } from "./RUMOperationUser";
import { RUMOperationsListResponse } from "./RUMOperationsListResponse";
import { RUMOperationsListResponseMeta } from "./RUMOperationsListResponseMeta";
import { RUMOperationsListResponseMetaPage } from "./RUMOperationsListResponseMetaPage";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMOperationJourneyCompositeRuleKind: ["all_of", "in_order"],
    RUMOperationJourneyStepType: [
      "start",
      "update",
      "stop",
      "error",
      "abandoned",
    ],
    RUMOperationStrongLinkStatus: ["DRAFT", "CONFIRMED", "REJECTED"],
    RUMOperationStrongLinkType: ["strong_links"],
    RUMOperationStrongLinkUpdateStatus: ["CONFIRMED", "REJECTED"],
    RUMOperationType: ["operations"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RUMOperationCreateRequest: RUMOperationCreateRequest,
    RUMOperationCreateRequestData: RUMOperationCreateRequestData,
    RUMOperationJourneyCompositeRule: RUMOperationJourneyCompositeRule,
    RUMOperationJourneyNode: RUMOperationJourneyNode,
    RUMOperationJourneyPredicate: RUMOperationJourneyPredicate,
    RUMOperationJourneyRum: RUMOperationJourneyRum,
    RUMOperationJourneyStep: RUMOperationJourneyStep,
    RUMOperationRequestAttributes: RUMOperationRequestAttributes,
    RUMOperationResponse: RUMOperationResponse,
    RUMOperationResponseAttributes: RUMOperationResponseAttributes,
    RUMOperationResponseData: RUMOperationResponseData,
    RUMOperationStrongLinkCreateRequest: RUMOperationStrongLinkCreateRequest,
    RUMOperationStrongLinkCreateRequestAttributes:
      RUMOperationStrongLinkCreateRequestAttributes,
    RUMOperationStrongLinkCreateRequestData:
      RUMOperationStrongLinkCreateRequestData,
    RUMOperationStrongLinkResponse: RUMOperationStrongLinkResponse,
    RUMOperationStrongLinkResponseAttributes:
      RUMOperationStrongLinkResponseAttributes,
    RUMOperationStrongLinkResponseData: RUMOperationStrongLinkResponseData,
    RUMOperationStrongLinkUpdateRequest: RUMOperationStrongLinkUpdateRequest,
    RUMOperationStrongLinkUpdateRequestAttributes:
      RUMOperationStrongLinkUpdateRequestAttributes,
    RUMOperationStrongLinkUpdateRequestData:
      RUMOperationStrongLinkUpdateRequestData,
    RUMOperationStrongLinksListResponse: RUMOperationStrongLinksListResponse,
    RUMOperationStrongLinksListResponseMeta:
      RUMOperationStrongLinksListResponseMeta,
    RUMOperationUpdateRequest: RUMOperationUpdateRequest,
    RUMOperationUpdateRequestData: RUMOperationUpdateRequestData,
    RUMOperationUser: RUMOperationUser,
    RUMOperationsListResponse: RUMOperationsListResponse,
    RUMOperationsListResponseMeta: RUMOperationsListResponseMeta,
    RUMOperationsListResponseMetaPage: RUMOperationsListResponseMetaPage,
  },
};
