import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DORADeploymentRequest } from "./DORADeploymentRequest";
import { DORADeploymentRequestAttributes } from "./DORADeploymentRequestAttributes";
import { DORADeploymentRequestData } from "./DORADeploymentRequestData";
import { DORADeploymentResponse } from "./DORADeploymentResponse";
import { DORADeploymentResponseData } from "./DORADeploymentResponseData";
import { DORAGitInfo } from "./DORAGitInfo";
import { DORAIncidentRequest } from "./DORAIncidentRequest";
import { DORAIncidentRequestAttributes } from "./DORAIncidentRequestAttributes";
import { DORAIncidentRequestData } from "./DORAIncidentRequestData";
import { DORAIncidentResponse } from "./DORAIncidentResponse";
import { DORAIncidentResponseData } from "./DORAIncidentResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DORADeploymentType: ["dora_deployment"],
    DORAIncidentType: ["dora_incident"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DORADeploymentRequest: DORADeploymentRequest,
    DORADeploymentRequestAttributes: DORADeploymentRequestAttributes,
    DORADeploymentRequestData: DORADeploymentRequestData,
    DORADeploymentResponse: DORADeploymentResponse,
    DORADeploymentResponseData: DORADeploymentResponseData,
    DORAGitInfo: DORAGitInfo,
    DORAIncidentRequest: DORAIncidentRequest,
    DORAIncidentRequestAttributes: DORAIncidentRequestAttributes,
    DORAIncidentRequestData: DORAIncidentRequestData,
    DORAIncidentResponse: DORAIncidentResponse,
    DORAIncidentResponseData: DORAIncidentResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
