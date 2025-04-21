import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AwsOnDemandAttributes } from "./AwsOnDemandAttributes";
import { AwsOnDemandCreateAttributes } from "./AwsOnDemandCreateAttributes";
import { AwsOnDemandCreateData } from "./AwsOnDemandCreateData";
import { AwsOnDemandCreateRequest } from "./AwsOnDemandCreateRequest";
import { AwsOnDemandData } from "./AwsOnDemandData";
import { AwsOnDemandListResponse } from "./AwsOnDemandListResponse";
import { AwsOnDemandResponse } from "./AwsOnDemandResponse";
import { AwsScanOptionsAttributes } from "./AwsScanOptionsAttributes";
import { AwsScanOptionsCreateAttributes } from "./AwsScanOptionsCreateAttributes";
import { AwsScanOptionsCreateData } from "./AwsScanOptionsCreateData";
import { AwsScanOptionsCreateRequest } from "./AwsScanOptionsCreateRequest";
import { AwsScanOptionsData } from "./AwsScanOptionsData";
import { AwsScanOptionsListResponse } from "./AwsScanOptionsListResponse";
import { AwsScanOptionsResponse } from "./AwsScanOptionsResponse";
import { AwsScanOptionsUpdateAttributes } from "./AwsScanOptionsUpdateAttributes";
import { AwsScanOptionsUpdateData } from "./AwsScanOptionsUpdateData";
import { AwsScanOptionsUpdateRequest } from "./AwsScanOptionsUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AwsOnDemandType: ["aws_resource"],
    AwsScanOptionsType: ["aws_scan_options"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AwsOnDemandAttributes: AwsOnDemandAttributes,
    AwsOnDemandCreateAttributes: AwsOnDemandCreateAttributes,
    AwsOnDemandCreateData: AwsOnDemandCreateData,
    AwsOnDemandCreateRequest: AwsOnDemandCreateRequest,
    AwsOnDemandData: AwsOnDemandData,
    AwsOnDemandListResponse: AwsOnDemandListResponse,
    AwsOnDemandResponse: AwsOnDemandResponse,
    AwsScanOptionsAttributes: AwsScanOptionsAttributes,
    AwsScanOptionsCreateAttributes: AwsScanOptionsCreateAttributes,
    AwsScanOptionsCreateData: AwsScanOptionsCreateData,
    AwsScanOptionsCreateRequest: AwsScanOptionsCreateRequest,
    AwsScanOptionsData: AwsScanOptionsData,
    AwsScanOptionsListResponse: AwsScanOptionsListResponse,
    AwsScanOptionsResponse: AwsScanOptionsResponse,
    AwsScanOptionsUpdateAttributes: AwsScanOptionsUpdateAttributes,
    AwsScanOptionsUpdateData: AwsScanOptionsUpdateData,
    AwsScanOptionsUpdateRequest: AwsScanOptionsUpdateRequest,
  },
};
