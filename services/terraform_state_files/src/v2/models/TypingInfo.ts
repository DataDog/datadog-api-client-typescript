import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TerraformBackendAttributes } from "./TerraformBackendAttributes";
import { TerraformBackendBucket } from "./TerraformBackendBucket";
import { TerraformBackendCreateAttributes } from "./TerraformBackendCreateAttributes";
import { TerraformBackendCreateData } from "./TerraformBackendCreateData";
import { TerraformBackendCreateRequest } from "./TerraformBackendCreateRequest";
import { TerraformBackendData } from "./TerraformBackendData";
import { TerraformBackendListResponse } from "./TerraformBackendListResponse";
import { TerraformBackendResponse } from "./TerraformBackendResponse";
import { TerraformBackendUpdateAttributes } from "./TerraformBackendUpdateAttributes";
import { TerraformBackendUpdateData } from "./TerraformBackendUpdateData";
import { TerraformBackendUpdateRequest } from "./TerraformBackendUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    TerraformBackendKind: ["terraform"],
    TerraformBackendSyncStatus: ["pending", "success", "failure"],
    TerraformBackendType: ["terraform-backends"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TerraformBackendAttributes: TerraformBackendAttributes,
    TerraformBackendBucket: TerraformBackendBucket,
    TerraformBackendCreateAttributes: TerraformBackendCreateAttributes,
    TerraformBackendCreateData: TerraformBackendCreateData,
    TerraformBackendCreateRequest: TerraformBackendCreateRequest,
    TerraformBackendData: TerraformBackendData,
    TerraformBackendListResponse: TerraformBackendListResponse,
    TerraformBackendResponse: TerraformBackendResponse,
    TerraformBackendUpdateAttributes: TerraformBackendUpdateAttributes,
    TerraformBackendUpdateData: TerraformBackendUpdateData,
    TerraformBackendUpdateRequest: TerraformBackendUpdateRequest,
  },
};
