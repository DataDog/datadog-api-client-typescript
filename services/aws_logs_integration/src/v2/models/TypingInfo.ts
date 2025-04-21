import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AWSLogsServicesResponse } from "./AWSLogsServicesResponse";
import { AWSLogsServicesResponseAttributes } from "./AWSLogsServicesResponseAttributes";
import { AWSLogsServicesResponseData } from "./AWSLogsServicesResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSLogsServicesResponseDataType: ["logs_services"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AWSLogsServicesResponse: AWSLogsServicesResponse,
    AWSLogsServicesResponseAttributes: AWSLogsServicesResponseAttributes,
    AWSLogsServicesResponseData: AWSLogsServicesResponseData,
  },
};
