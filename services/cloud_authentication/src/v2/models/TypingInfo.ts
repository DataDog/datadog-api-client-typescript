import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AWSCloudAuthPersonaMappingAttributesResponse } from "./AWSCloudAuthPersonaMappingAttributesResponse";
import { AWSCloudAuthPersonaMappingDataResponse } from "./AWSCloudAuthPersonaMappingDataResponse";
import { AWSCloudAuthPersonaMappingsResponse } from "./AWSCloudAuthPersonaMappingsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSCloudAuthPersonaMappingType: ["aws_cloud_auth_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AWSCloudAuthPersonaMappingAttributesResponse:
      AWSCloudAuthPersonaMappingAttributesResponse,
    AWSCloudAuthPersonaMappingDataResponse:
      AWSCloudAuthPersonaMappingDataResponse,
    AWSCloudAuthPersonaMappingsResponse: AWSCloudAuthPersonaMappingsResponse,
  },
};
