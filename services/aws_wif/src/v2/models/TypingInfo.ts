import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AwsWifIntakeMappingAttributes } from "./AwsWifIntakeMappingAttributes";
import { AwsWifIntakeMappingCreateData } from "./AwsWifIntakeMappingCreateData";
import { AwsWifIntakeMappingCreateRequest } from "./AwsWifIntakeMappingCreateRequest";
import { AwsWifIntakeMappingData } from "./AwsWifIntakeMappingData";
import { AwsWifIntakeMappingResponse } from "./AwsWifIntakeMappingResponse";
import { AwsWifIntakeMappingsResponse } from "./AwsWifIntakeMappingsResponse";
import { AwsWifPersonaMappingAttributes } from "./AwsWifPersonaMappingAttributes";
import { AwsWifPersonaMappingCreateAttributes } from "./AwsWifPersonaMappingCreateAttributes";
import { AwsWifPersonaMappingCreateData } from "./AwsWifPersonaMappingCreateData";
import { AwsWifPersonaMappingCreateRequest } from "./AwsWifPersonaMappingCreateRequest";
import { AwsWifPersonaMappingData } from "./AwsWifPersonaMappingData";
import { AwsWifPersonaMappingResponse } from "./AwsWifPersonaMappingResponse";
import { AwsWifPersonaMappingsResponse } from "./AwsWifPersonaMappingsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AwsWifIntakeMappingType: ["aws_wif_intake_mapping"],
    AwsWifPersonaMappingType: ["aws_wif_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AwsWifIntakeMappingAttributes: AwsWifIntakeMappingAttributes,
    AwsWifIntakeMappingCreateData: AwsWifIntakeMappingCreateData,
    AwsWifIntakeMappingCreateRequest: AwsWifIntakeMappingCreateRequest,
    AwsWifIntakeMappingData: AwsWifIntakeMappingData,
    AwsWifIntakeMappingResponse: AwsWifIntakeMappingResponse,
    AwsWifIntakeMappingsResponse: AwsWifIntakeMappingsResponse,
    AwsWifPersonaMappingAttributes: AwsWifPersonaMappingAttributes,
    AwsWifPersonaMappingCreateAttributes: AwsWifPersonaMappingCreateAttributes,
    AwsWifPersonaMappingCreateData: AwsWifPersonaMappingCreateData,
    AwsWifPersonaMappingCreateRequest: AwsWifPersonaMappingCreateRequest,
    AwsWifPersonaMappingData: AwsWifPersonaMappingData,
    AwsWifPersonaMappingResponse: AwsWifPersonaMappingResponse,
    AwsWifPersonaMappingsResponse: AwsWifPersonaMappingsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
