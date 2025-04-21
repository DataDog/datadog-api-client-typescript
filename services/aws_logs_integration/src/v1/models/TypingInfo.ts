import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AWSAccountAndLambdaRequest } from "./AWSAccountAndLambdaRequest";
import { AWSLogsAsyncError } from "./AWSLogsAsyncError";
import { AWSLogsAsyncResponse } from "./AWSLogsAsyncResponse";
import { AWSLogsLambda } from "./AWSLogsLambda";
import { AWSLogsListResponse } from "./AWSLogsListResponse";
import { AWSLogsListServicesResponse } from "./AWSLogsListServicesResponse";
import { AWSLogsServicesRequest } from "./AWSLogsServicesRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AWSAccountAndLambdaRequest: AWSAccountAndLambdaRequest,
    AWSLogsAsyncError: AWSLogsAsyncError,
    AWSLogsAsyncResponse: AWSLogsAsyncResponse,
    AWSLogsLambda: AWSLogsLambda,
    AWSLogsListResponse: AWSLogsListResponse,
    AWSLogsListServicesResponse: AWSLogsListServicesResponse,
    AWSLogsServicesRequest: AWSLogsServicesRequest,
  },
};
