import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RUMArchiveSession } from "./RUMArchiveSession";
import { RUMArchiveSessionAttributes } from "./RUMArchiveSessionAttributes";
import { RUMArchiveSessionRecoveryStatus } from "./RUMArchiveSessionRecoveryStatus";
import { RUMArchiveSessionsMeta } from "./RUMArchiveSessionsMeta";
import { RUMArchiveSessionsPage } from "./RUMArchiveSessionsPage";
import { RUMArchiveSessionsResponse } from "./RUMArchiveSessionsResponse";
import { RUMArchiveSessionsSearchAttributes } from "./RUMArchiveSessionsSearchAttributes";
import { RUMArchiveSessionsSearchData } from "./RUMArchiveSessionsSearchData";
import { RUMArchiveSessionsSearchRequest } from "./RUMArchiveSessionsSearchRequest";
import { RUMManagedArchiveErrorResponse } from "./RUMManagedArchiveErrorResponse";
import { RUMRecoveredSession } from "./RUMRecoveredSession";
import { RUMRecoveryBatchCreateAttributes } from "./RUMRecoveryBatchCreateAttributes";
import { RUMRecoveryBatchListAttributes } from "./RUMRecoveryBatchListAttributes";
import { RUMRecoveryBatchListData } from "./RUMRecoveryBatchListData";
import { RUMRecoveryBatchListMeta } from "./RUMRecoveryBatchListMeta";
import { RUMRecoveryBatchListResponse } from "./RUMRecoveryBatchListResponse";
import { RUMRecoveryCancelAttributes } from "./RUMRecoveryCancelAttributes";
import { RUMRecoveryCancelData } from "./RUMRecoveryCancelData";
import { RUMRecoveryCancelRequest } from "./RUMRecoveryCancelRequest";
import { RUMRecoveryCancelResponse } from "./RUMRecoveryCancelResponse";
import { RUMRecoveryCancelResponseAttributes } from "./RUMRecoveryCancelResponseAttributes";
import { RUMRecoveryCancelResponseData } from "./RUMRecoveryCancelResponseData";
import { RUMRecoveryCountAttributes } from "./RUMRecoveryCountAttributes";
import { RUMRecoveryCountRequest } from "./RUMRecoveryCountRequest";
import { RUMRecoveryCountRequestData } from "./RUMRecoveryCountRequestData";
import { RUMRecoveryCountResponse } from "./RUMRecoveryCountResponse";
import { RUMRecoveryCountResponseAttributes } from "./RUMRecoveryCountResponseAttributes";
import { RUMRecoveryCountResponseData } from "./RUMRecoveryCountResponseData";
import { RUMRecoveryCreateData } from "./RUMRecoveryCreateData";
import { RUMRecoveryCreateRequest } from "./RUMRecoveryCreateRequest";
import { RUMRecoveryCreateResponse } from "./RUMRecoveryCreateResponse";
import { RUMRecoveryCreateResponseAttributes } from "./RUMRecoveryCreateResponseAttributes";
import { RUMRecoveryCreateResponseData } from "./RUMRecoveryCreateResponseData";
import { RUMRecoveryRequestAttributes } from "./RUMRecoveryRequestAttributes";
import { RUMRecoveryRequestData } from "./RUMRecoveryRequestData";
import { RUMRecoveryRequestResponse } from "./RUMRecoveryRequestResponse";
import { RUMRecoverySessionInput } from "./RUMRecoverySessionInput";
import { RUMRecoverySessionsCreateAttributes } from "./RUMRecoverySessionsCreateAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMArchiveSessionType: ["rum_archive_session"],
    RUMRecoveryBatchListDataType: ["rum_batch_recovery_request"],
    RUMRecoveryBatchRequestType: ["batch"],
    RUMRecoveryCancelStatus: ["cancelled"],
    RUMRecoveryCountResponseDataType: ["rum_recovery_count"],
    RUMRecoveryDiscoveryStatus: [
      "QUEUED",
      "PENDING",
      "SLICING",
      "DISCOVERED",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
    ],
    RUMRecoveryRequestStatus: [
      "PENDING",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
      "EXPIRED",
    ],
    RUMRecoveryRequestType: ["rum_recovery_request"],
    RUMRecoverySessionStatus: [
      "AVAILABLE",
      "PENDING",
      "PROCESSING",
      "RECOVERED",
      "FAILED",
      "RETAINED",
      "EXPIRED",
      "CANCELLED",
    ],
    RUMRecoverySessionsRequestType: ["sessions"],
  },
  oneOfMap: {
    RUMRecoveryCreateAttributes: [
      "RUMRecoverySessionsCreateAttributes",
      "RUMRecoveryBatchCreateAttributes",
    ],
  },
  typeMap: {
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RUMArchiveSession: RUMArchiveSession,
    RUMArchiveSessionAttributes: RUMArchiveSessionAttributes,
    RUMArchiveSessionRecoveryStatus: RUMArchiveSessionRecoveryStatus,
    RUMArchiveSessionsMeta: RUMArchiveSessionsMeta,
    RUMArchiveSessionsPage: RUMArchiveSessionsPage,
    RUMArchiveSessionsResponse: RUMArchiveSessionsResponse,
    RUMArchiveSessionsSearchAttributes: RUMArchiveSessionsSearchAttributes,
    RUMArchiveSessionsSearchData: RUMArchiveSessionsSearchData,
    RUMArchiveSessionsSearchRequest: RUMArchiveSessionsSearchRequest,
    RUMManagedArchiveErrorResponse: RUMManagedArchiveErrorResponse,
    RUMRecoveredSession: RUMRecoveredSession,
    RUMRecoveryBatchCreateAttributes: RUMRecoveryBatchCreateAttributes,
    RUMRecoveryBatchListAttributes: RUMRecoveryBatchListAttributes,
    RUMRecoveryBatchListData: RUMRecoveryBatchListData,
    RUMRecoveryBatchListMeta: RUMRecoveryBatchListMeta,
    RUMRecoveryBatchListResponse: RUMRecoveryBatchListResponse,
    RUMRecoveryCancelAttributes: RUMRecoveryCancelAttributes,
    RUMRecoveryCancelData: RUMRecoveryCancelData,
    RUMRecoveryCancelRequest: RUMRecoveryCancelRequest,
    RUMRecoveryCancelResponse: RUMRecoveryCancelResponse,
    RUMRecoveryCancelResponseAttributes: RUMRecoveryCancelResponseAttributes,
    RUMRecoveryCancelResponseData: RUMRecoveryCancelResponseData,
    RUMRecoveryCountAttributes: RUMRecoveryCountAttributes,
    RUMRecoveryCountRequest: RUMRecoveryCountRequest,
    RUMRecoveryCountRequestData: RUMRecoveryCountRequestData,
    RUMRecoveryCountResponse: RUMRecoveryCountResponse,
    RUMRecoveryCountResponseAttributes: RUMRecoveryCountResponseAttributes,
    RUMRecoveryCountResponseData: RUMRecoveryCountResponseData,
    RUMRecoveryCreateData: RUMRecoveryCreateData,
    RUMRecoveryCreateRequest: RUMRecoveryCreateRequest,
    RUMRecoveryCreateResponse: RUMRecoveryCreateResponse,
    RUMRecoveryCreateResponseAttributes: RUMRecoveryCreateResponseAttributes,
    RUMRecoveryCreateResponseData: RUMRecoveryCreateResponseData,
    RUMRecoveryRequestAttributes: RUMRecoveryRequestAttributes,
    RUMRecoveryRequestData: RUMRecoveryRequestData,
    RUMRecoveryRequestResponse: RUMRecoveryRequestResponse,
    RUMRecoverySessionInput: RUMRecoverySessionInput,
    RUMRecoverySessionsCreateAttributes: RUMRecoverySessionsCreateAttributes,
  },
};
