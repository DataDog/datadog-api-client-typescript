import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DORADeploymentRequest } from "./DORADeploymentRequest";
import { DORADeploymentRequestAttributes } from "./DORADeploymentRequestAttributes";
import { DORADeploymentRequestData } from "./DORADeploymentRequestData";
import { DORADeploymentResponse } from "./DORADeploymentResponse";
import { DORADeploymentResponseData } from "./DORADeploymentResponseData";
import { DORAEvent } from "./DORAEvent";
import { DORAFetchResponse } from "./DORAFetchResponse";
import { DORAGitInfo } from "./DORAGitInfo";
import { DORAIncidentRequest } from "./DORAIncidentRequest";
import { DORAIncidentRequestAttributes } from "./DORAIncidentRequestAttributes";
import { DORAIncidentRequestData } from "./DORAIncidentRequestData";
import { DORAIncidentResponse } from "./DORAIncidentResponse";
import { DORAIncidentResponseData } from "./DORAIncidentResponseData";
import { DORAListDeploymentsRequest } from "./DORAListDeploymentsRequest";
import { DORAListDeploymentsRequestAttributes } from "./DORAListDeploymentsRequestAttributes";
import { DORAListDeploymentsRequestData } from "./DORAListDeploymentsRequestData";
import { DORAListFailuresRequest } from "./DORAListFailuresRequest";
import { DORAListFailuresRequestAttributes } from "./DORAListFailuresRequestAttributes";
import { DORAListFailuresRequestData } from "./DORAListFailuresRequestData";
import { DORAListResponse } from "./DORAListResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DORADeploymentType: ["dora_deployment"],
    DORAIncidentType: ["dora_incident"],
    DORAListDeploymentsRequestDataType: ["dora_deployments_list_request"],
    DORAListFailuresRequestDataType: ["dora_failures_list_request"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DORADeploymentRequest: DORADeploymentRequest,
    DORADeploymentRequestAttributes: DORADeploymentRequestAttributes,
    DORADeploymentRequestData: DORADeploymentRequestData,
    DORADeploymentResponse: DORADeploymentResponse,
    DORADeploymentResponseData: DORADeploymentResponseData,
    DORAEvent: DORAEvent,
    DORAFetchResponse: DORAFetchResponse,
    DORAGitInfo: DORAGitInfo,
    DORAIncidentRequest: DORAIncidentRequest,
    DORAIncidentRequestAttributes: DORAIncidentRequestAttributes,
    DORAIncidentRequestData: DORAIncidentRequestData,
    DORAIncidentResponse: DORAIncidentResponse,
    DORAIncidentResponseData: DORAIncidentResponseData,
    DORAListDeploymentsRequest: DORAListDeploymentsRequest,
    DORAListDeploymentsRequestAttributes: DORAListDeploymentsRequestAttributes,
    DORAListDeploymentsRequestData: DORAListDeploymentsRequestData,
    DORAListFailuresRequest: DORAListFailuresRequest,
    DORAListFailuresRequestAttributes: DORAListFailuresRequestAttributes,
    DORAListFailuresRequestData: DORAListFailuresRequestData,
    DORAListResponse: DORAListResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
