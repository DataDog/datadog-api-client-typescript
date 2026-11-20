import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CancelDataDeletionResponseBody } from "./CancelDataDeletionResponseBody";
import { CreateDataDeletionRequestBody } from "./CreateDataDeletionRequestBody";
import { CreateDataDeletionRequestBodyAttributes } from "./CreateDataDeletionRequestBodyAttributes";
import { CreateDataDeletionRequestBodyData } from "./CreateDataDeletionRequestBodyData";
import { CreateDataDeletionResponseBody } from "./CreateDataDeletionResponseBody";
import { DataDeletionResponseItem } from "./DataDeletionResponseItem";
import { DataDeletionResponseItemAttributes } from "./DataDeletionResponseItemAttributes";
import { DataDeletionResponseMeta } from "./DataDeletionResponseMeta";
import { ForceDataDeletionResponseBody } from "./ForceDataDeletionResponseBody";
import { GetDataDeletionsResponseBody } from "./GetDataDeletionsResponseBody";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CreateDataDeletionRequestBodyDataType: ["create_deletion_req"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CancelDataDeletionResponseBody: CancelDataDeletionResponseBody,
    CreateDataDeletionRequestBody: CreateDataDeletionRequestBody,
    CreateDataDeletionRequestBodyAttributes:
      CreateDataDeletionRequestBodyAttributes,
    CreateDataDeletionRequestBodyData: CreateDataDeletionRequestBodyData,
    CreateDataDeletionResponseBody: CreateDataDeletionResponseBody,
    DataDeletionResponseItem: DataDeletionResponseItem,
    DataDeletionResponseItemAttributes: DataDeletionResponseItemAttributes,
    DataDeletionResponseMeta: DataDeletionResponseMeta,
    ForceDataDeletionResponseBody: ForceDataDeletionResponseBody,
    GetDataDeletionsResponseBody: GetDataDeletionsResponseBody,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
