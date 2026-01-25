import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DORADeploymentFetchResponse } from "./DORADeploymentFetchResponse";
import { DORADeploymentObject } from "./DORADeploymentObject";
import { DORADeploymentObjectAttributes } from "./DORADeploymentObjectAttributes";
import { DORADeploymentPatchRemediation } from "./DORADeploymentPatchRemediation";
import { DORADeploymentPatchRequest } from "./DORADeploymentPatchRequest";
import { DORADeploymentPatchRequestAttributes } from "./DORADeploymentPatchRequestAttributes";
import { DORADeploymentPatchRequestData } from "./DORADeploymentPatchRequestData";
import { DORADeploymentRequest } from "./DORADeploymentRequest";
import { DORADeploymentRequestAttributes } from "./DORADeploymentRequestAttributes";
import { DORADeploymentRequestData } from "./DORADeploymentRequestData";
import { DORADeploymentResponse } from "./DORADeploymentResponse";
import { DORADeploymentResponseData } from "./DORADeploymentResponseData";
import { DORADeploymentsListResponse } from "./DORADeploymentsListResponse";
import { DORAFailureFetchResponse } from "./DORAFailureFetchResponse";
import { DORAFailureRequest } from "./DORAFailureRequest";
import { DORAFailureRequestAttributes } from "./DORAFailureRequestAttributes";
import { DORAFailureRequestData } from "./DORAFailureRequestData";
import { DORAFailureResponse } from "./DORAFailureResponse";
import { DORAFailureResponseData } from "./DORAFailureResponseData";
import { DORAFailuresListResponse } from "./DORAFailuresListResponse";
import { DORAGitInfo } from "./DORAGitInfo";
import { DORAIncidentObject } from "./DORAIncidentObject";
import { DORAIncidentObjectAttributes } from "./DORAIncidentObjectAttributes";
import { DORAListDeploymentsRequest } from "./DORAListDeploymentsRequest";
import { DORAListDeploymentsRequestAttributes } from "./DORAListDeploymentsRequestAttributes";
import { DORAListDeploymentsRequestData } from "./DORAListDeploymentsRequestData";
import { DORAListFailuresRequest } from "./DORAListFailuresRequest";
import { DORAListFailuresRequestAttributes } from "./DORAListFailuresRequestAttributes";
import { DORAListFailuresRequestData } from "./DORAListFailuresRequestData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DORADeploymentPatchRemediationType: ["rollback", "rollforward"],
    DORADeploymentPatchRequestDataType: ["dora_deployment_patch_request"],
    DORADeploymentType: ["dora_deployment"],
    DORAFailureType: ["dora_failure"],
    DORAListDeploymentsRequestDataType: ["dora_deployments_list_request"],
    DORAListFailuresRequestDataType: ["dora_failures_list_request"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DORADeploymentFetchResponse: DORADeploymentFetchResponse,
    DORADeploymentObject: DORADeploymentObject,
    DORADeploymentObjectAttributes: DORADeploymentObjectAttributes,
    DORADeploymentPatchRemediation: DORADeploymentPatchRemediation,
    DORADeploymentPatchRequest: DORADeploymentPatchRequest,
    DORADeploymentPatchRequestAttributes: DORADeploymentPatchRequestAttributes,
    DORADeploymentPatchRequestData: DORADeploymentPatchRequestData,
    DORADeploymentRequest: DORADeploymentRequest,
    DORADeploymentRequestAttributes: DORADeploymentRequestAttributes,
    DORADeploymentRequestData: DORADeploymentRequestData,
    DORADeploymentResponse: DORADeploymentResponse,
    DORADeploymentResponseData: DORADeploymentResponseData,
    DORADeploymentsListResponse: DORADeploymentsListResponse,
    DORAFailureFetchResponse: DORAFailureFetchResponse,
    DORAFailureRequest: DORAFailureRequest,
    DORAFailureRequestAttributes: DORAFailureRequestAttributes,
    DORAFailureRequestData: DORAFailureRequestData,
    DORAFailureResponse: DORAFailureResponse,
    DORAFailureResponseData: DORAFailureResponseData,
    DORAFailuresListResponse: DORAFailuresListResponse,
    DORAGitInfo: DORAGitInfo,
    DORAIncidentObject: DORAIncidentObject,
    DORAIncidentObjectAttributes: DORAIncidentObjectAttributes,
    DORAListDeploymentsRequest: DORAListDeploymentsRequest,
    DORAListDeploymentsRequestAttributes: DORAListDeploymentsRequestAttributes,
    DORAListDeploymentsRequestData: DORAListDeploymentsRequestData,
    DORAListFailuresRequest: DORAListFailuresRequest,
    DORAListFailuresRequestAttributes: DORAListFailuresRequestAttributes,
    DORAListFailuresRequestData: DORAListFailuresRequestData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
