import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { AWSAccount } from "./AWSAccount";
import { AWSAccountAndLambdaRequest } from "./AWSAccountAndLambdaRequest";
import { AWSAccountCreateResponse } from "./AWSAccountCreateResponse";
import { AWSAccountDeleteRequest } from "./AWSAccountDeleteRequest";
import { AWSAccountListResponse } from "./AWSAccountListResponse";
import { AWSEventBridgeAccountConfiguration } from "./AWSEventBridgeAccountConfiguration";
import { AWSEventBridgeCreateRequest } from "./AWSEventBridgeCreateRequest";
import { AWSEventBridgeCreateResponse } from "./AWSEventBridgeCreateResponse";
import { AWSEventBridgeDeleteRequest } from "./AWSEventBridgeDeleteRequest";
import { AWSEventBridgeDeleteResponse } from "./AWSEventBridgeDeleteResponse";
import { AWSEventBridgeListResponse } from "./AWSEventBridgeListResponse";
import { AWSEventBridgeSource } from "./AWSEventBridgeSource";
import { AWSLogsAsyncError } from "./AWSLogsAsyncError";
import { AWSLogsAsyncResponse } from "./AWSLogsAsyncResponse";
import { AWSLogsLambda } from "./AWSLogsLambda";
import { AWSLogsListResponse } from "./AWSLogsListResponse";
import { AWSLogsListServicesResponse } from "./AWSLogsListServicesResponse";
import { AWSLogsServicesRequest } from "./AWSLogsServicesRequest";
import { AWSTagFilter } from "./AWSTagFilter";
import { AWSTagFilterCreateRequest } from "./AWSTagFilterCreateRequest";
import { AWSTagFilterDeleteRequest } from "./AWSTagFilterDeleteRequest";
import { AWSTagFilterListResponse } from "./AWSTagFilterListResponse";
import { AzureAccount } from "./AzureAccount";
import { GCPAccount } from "./GCPAccount";
import { GCPMonitoredResourceConfig } from "./GCPMonitoredResourceConfig";
import { ResourceProviderConfig } from "./ResourceProviderConfig";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AWSEventBridgeCreateStatus: ["created"],
    AWSEventBridgeDeleteStatus: ["empty"],
    AWSNamespace: [
      "elb",
      "application_elb",
      "sqs",
      "rds",
      "custom",
      "network_elb",
      "lambda",
      "step_functions",
    ],
    GCPMonitoredResourceConfigType: [
      "cloud_function",
      "cloud_run_revision",
      "gce_instance",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AWSAccount: AWSAccount,
    AWSAccountAndLambdaRequest: AWSAccountAndLambdaRequest,
    AWSAccountCreateResponse: AWSAccountCreateResponse,
    AWSAccountDeleteRequest: AWSAccountDeleteRequest,
    AWSAccountListResponse: AWSAccountListResponse,
    AWSEventBridgeAccountConfiguration: AWSEventBridgeAccountConfiguration,
    AWSEventBridgeCreateRequest: AWSEventBridgeCreateRequest,
    AWSEventBridgeCreateResponse: AWSEventBridgeCreateResponse,
    AWSEventBridgeDeleteRequest: AWSEventBridgeDeleteRequest,
    AWSEventBridgeDeleteResponse: AWSEventBridgeDeleteResponse,
    AWSEventBridgeListResponse: AWSEventBridgeListResponse,
    AWSEventBridgeSource: AWSEventBridgeSource,
    AWSLogsAsyncError: AWSLogsAsyncError,
    AWSLogsAsyncResponse: AWSLogsAsyncResponse,
    AWSLogsLambda: AWSLogsLambda,
    AWSLogsListResponse: AWSLogsListResponse,
    AWSLogsListServicesResponse: AWSLogsListServicesResponse,
    AWSLogsServicesRequest: AWSLogsServicesRequest,
    AWSTagFilter: AWSTagFilter,
    AWSTagFilterCreateRequest: AWSTagFilterCreateRequest,
    AWSTagFilterDeleteRequest: AWSTagFilterDeleteRequest,
    AWSTagFilterListResponse: AWSTagFilterListResponse,
    AzureAccount: AzureAccount,
    GCPAccount: GCPAccount,
    GCPMonitoredResourceConfig: GCPMonitoredResourceConfig,
    ResourceProviderConfig: ResourceProviderConfig,
  },
};
