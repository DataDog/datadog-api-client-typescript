import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RumArchiveSession } from "./RumArchiveSession";
import { RumArchiveSessionAttributes } from "./RumArchiveSessionAttributes";
import { RumArchiveSessionRecoveryStatus } from "./RumArchiveSessionRecoveryStatus";
import { RumArchiveSessionsMeta } from "./RumArchiveSessionsMeta";
import { RumArchiveSessionsPage } from "./RumArchiveSessionsPage";
import { RumArchiveSessionsResponse } from "./RumArchiveSessionsResponse";
import { RumArchiveSessionsSearchAttributes } from "./RumArchiveSessionsSearchAttributes";
import { RumArchiveSessionsSearchData } from "./RumArchiveSessionsSearchData";
import { RumArchiveSessionsSearchRequest } from "./RumArchiveSessionsSearchRequest";
import { RumManagedArchiveErrorResponse } from "./RumManagedArchiveErrorResponse";
import { RumRecoveredSession } from "./RumRecoveredSession";
import { RumRecoveryBatchCreateAttributes } from "./RumRecoveryBatchCreateAttributes";
import { RumRecoveryBatchListAttributes } from "./RumRecoveryBatchListAttributes";
import { RumRecoveryBatchListData } from "./RumRecoveryBatchListData";
import { RumRecoveryBatchListMeta } from "./RumRecoveryBatchListMeta";
import { RumRecoveryBatchListResponse } from "./RumRecoveryBatchListResponse";
import { RumRecoveryCancelAttributes } from "./RumRecoveryCancelAttributes";
import { RumRecoveryCancelData } from "./RumRecoveryCancelData";
import { RumRecoveryCancelRequest } from "./RumRecoveryCancelRequest";
import { RumRecoveryCancelResponse } from "./RumRecoveryCancelResponse";
import { RumRecoveryCancelResponseAttributes } from "./RumRecoveryCancelResponseAttributes";
import { RumRecoveryCancelResponseData } from "./RumRecoveryCancelResponseData";
import { RumRecoveryCountAttributes } from "./RumRecoveryCountAttributes";
import { RumRecoveryCountRequest } from "./RumRecoveryCountRequest";
import { RumRecoveryCountRequestData } from "./RumRecoveryCountRequestData";
import { RumRecoveryCountResponse } from "./RumRecoveryCountResponse";
import { RumRecoveryCountResponseAttributes } from "./RumRecoveryCountResponseAttributes";
import { RumRecoveryCountResponseData } from "./RumRecoveryCountResponseData";
import { RumRecoveryCreateData } from "./RumRecoveryCreateData";
import { RumRecoveryCreateRequest } from "./RumRecoveryCreateRequest";
import { RumRecoveryCreateResponse } from "./RumRecoveryCreateResponse";
import { RumRecoveryCreateResponseAttributes } from "./RumRecoveryCreateResponseAttributes";
import { RumRecoveryCreateResponseData } from "./RumRecoveryCreateResponseData";
import { RumRecoveryRequestAttributes } from "./RumRecoveryRequestAttributes";
import { RumRecoveryRequestData } from "./RumRecoveryRequestData";
import { RumRecoveryRequestResponse } from "./RumRecoveryRequestResponse";
import { RumRecoverySessionInput } from "./RumRecoverySessionInput";
import { RumRecoverySessionsCreateAttributes } from "./RumRecoverySessionsCreateAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumArchiveSessionType: ["rum_archive_session"],
    RumRecoveryBatchListDataType: ["rum_batch_recovery_request"],
    RumRecoveryBatchRequestType: ["batch"],
    RumRecoveryCancelStatus: ["cancelled"],
    RumRecoveryCountResponseDataType: ["rum_recovery_count"],
    RumRecoveryDiscoveryStatus: [
      "QUEUED",
      "PENDING",
      "SLICING",
      "DISCOVERED",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
    ],
    RumRecoveryRequestStatus: [
      "PENDING",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
      "EXPIRED",
    ],
    RumRecoveryRequestType: ["rum_recovery_request"],
    RumRecoverySessionStatus: [
      "AVAILABLE",
      "PENDING",
      "PROCESSING",
      "RECOVERED",
      "FAILED",
      "RETAINED",
      "EXPIRED",
      "CANCELLED",
    ],
    RumRecoverySessionsRequestType: ["sessions"],
  },
  oneOfMap: {
    RumRecoveryCreateAttributes: [
      "RumRecoverySessionsCreateAttributes",
      "RumRecoveryBatchCreateAttributes",
    ],
  },
  typeMap: {
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RumArchiveSession: RumArchiveSession,
    RumArchiveSessionAttributes: RumArchiveSessionAttributes,
    RumArchiveSessionRecoveryStatus: RumArchiveSessionRecoveryStatus,
    RumArchiveSessionsMeta: RumArchiveSessionsMeta,
    RumArchiveSessionsPage: RumArchiveSessionsPage,
    RumArchiveSessionsResponse: RumArchiveSessionsResponse,
    RumArchiveSessionsSearchAttributes: RumArchiveSessionsSearchAttributes,
    RumArchiveSessionsSearchData: RumArchiveSessionsSearchData,
    RumArchiveSessionsSearchRequest: RumArchiveSessionsSearchRequest,
    RumManagedArchiveErrorResponse: RumManagedArchiveErrorResponse,
    RumRecoveredSession: RumRecoveredSession,
    RumRecoveryBatchCreateAttributes: RumRecoveryBatchCreateAttributes,
    RumRecoveryBatchListAttributes: RumRecoveryBatchListAttributes,
    RumRecoveryBatchListData: RumRecoveryBatchListData,
    RumRecoveryBatchListMeta: RumRecoveryBatchListMeta,
    RumRecoveryBatchListResponse: RumRecoveryBatchListResponse,
    RumRecoveryCancelAttributes: RumRecoveryCancelAttributes,
    RumRecoveryCancelData: RumRecoveryCancelData,
    RumRecoveryCancelRequest: RumRecoveryCancelRequest,
    RumRecoveryCancelResponse: RumRecoveryCancelResponse,
    RumRecoveryCancelResponseAttributes: RumRecoveryCancelResponseAttributes,
    RumRecoveryCancelResponseData: RumRecoveryCancelResponseData,
    RumRecoveryCountAttributes: RumRecoveryCountAttributes,
    RumRecoveryCountRequest: RumRecoveryCountRequest,
    RumRecoveryCountRequestData: RumRecoveryCountRequestData,
    RumRecoveryCountResponse: RumRecoveryCountResponse,
    RumRecoveryCountResponseAttributes: RumRecoveryCountResponseAttributes,
    RumRecoveryCountResponseData: RumRecoveryCountResponseData,
    RumRecoveryCreateData: RumRecoveryCreateData,
    RumRecoveryCreateRequest: RumRecoveryCreateRequest,
    RumRecoveryCreateResponse: RumRecoveryCreateResponse,
    RumRecoveryCreateResponseAttributes: RumRecoveryCreateResponseAttributes,
    RumRecoveryCreateResponseData: RumRecoveryCreateResponseData,
    RumRecoveryRequestAttributes: RumRecoveryRequestAttributes,
    RumRecoveryRequestData: RumRecoveryRequestData,
    RumRecoveryRequestResponse: RumRecoveryRequestResponse,
    RumRecoverySessionInput: RumRecoverySessionInput,
    RumRecoverySessionsCreateAttributes: RumRecoverySessionsCreateAttributes,
  },
};
