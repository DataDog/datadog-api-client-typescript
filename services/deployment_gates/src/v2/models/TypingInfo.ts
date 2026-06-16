import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateDeploymentGateParams } from "./CreateDeploymentGateParams";
import { CreateDeploymentGateParamsData } from "./CreateDeploymentGateParamsData";
import { CreateDeploymentGateParamsDataAttributes } from "./CreateDeploymentGateParamsDataAttributes";
import { CreateDeploymentRuleParams } from "./CreateDeploymentRuleParams";
import { CreateDeploymentRuleParamsData } from "./CreateDeploymentRuleParamsData";
import { CreateDeploymentRuleParamsDataAttributes } from "./CreateDeploymentRuleParamsDataAttributes";
import { DeploymentGateResponse } from "./DeploymentGateResponse";
import { DeploymentGateResponseData } from "./DeploymentGateResponseData";
import { DeploymentGateResponseDataAttributes } from "./DeploymentGateResponseDataAttributes";
import { DeploymentGateResponseDataAttributesCreatedBy } from "./DeploymentGateResponseDataAttributesCreatedBy";
import { DeploymentGateResponseDataAttributesUpdatedBy } from "./DeploymentGateResponseDataAttributesUpdatedBy";
import { DeploymentGateRulesResponse } from "./DeploymentGateRulesResponse";
import { DeploymentGatesEvaluationConfiguration } from "./DeploymentGatesEvaluationConfiguration";
import { DeploymentGatesEvaluationRequest } from "./DeploymentGatesEvaluationRequest";
import { DeploymentGatesEvaluationRequestAttributes } from "./DeploymentGatesEvaluationRequestAttributes";
import { DeploymentGatesEvaluationRequestData } from "./DeploymentGatesEvaluationRequestData";
import { DeploymentGatesEvaluationResponse } from "./DeploymentGatesEvaluationResponse";
import { DeploymentGatesEvaluationResponseAttributes } from "./DeploymentGatesEvaluationResponseAttributes";
import { DeploymentGatesEvaluationResponseData } from "./DeploymentGatesEvaluationResponseData";
import { DeploymentGatesEvaluationResultResponse } from "./DeploymentGatesEvaluationResultResponse";
import { DeploymentGatesEvaluationResultResponseAttributes } from "./DeploymentGatesEvaluationResultResponseAttributes";
import { DeploymentGatesEvaluationResultResponseData } from "./DeploymentGatesEvaluationResultResponseData";
import { DeploymentGatesFDDRule } from "./DeploymentGatesFDDRule";
import { DeploymentGatesFDDRuleOptions } from "./DeploymentGatesFDDRuleOptions";
import { DeploymentGatesListResponse } from "./DeploymentGatesListResponse";
import { DeploymentGatesListResponseMeta } from "./DeploymentGatesListResponseMeta";
import { DeploymentGatesListResponseMetaPage } from "./DeploymentGatesListResponseMetaPage";
import { DeploymentGatesMonitorRule } from "./DeploymentGatesMonitorRule";
import { DeploymentGatesMonitorRuleOptions } from "./DeploymentGatesMonitorRuleOptions";
import { DeploymentGatesRuleResponse } from "./DeploymentGatesRuleResponse";
import { DeploymentRuleOptionsFaultyDeploymentDetection } from "./DeploymentRuleOptionsFaultyDeploymentDetection";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";
import { DeploymentRuleResponse } from "./DeploymentRuleResponse";
import { DeploymentRuleResponseData } from "./DeploymentRuleResponseData";
import { DeploymentRuleResponseDataAttributes } from "./DeploymentRuleResponseDataAttributes";
import { DeploymentRuleResponseDataAttributesCreatedBy } from "./DeploymentRuleResponseDataAttributesCreatedBy";
import { DeploymentRuleResponseDataAttributesUpdatedBy } from "./DeploymentRuleResponseDataAttributesUpdatedBy";
import { HTTPCDGatesBadRequestResponse } from "./HTTPCDGatesBadRequestResponse";
import { HTTPCDGatesNotFoundResponse } from "./HTTPCDGatesNotFoundResponse";
import { HTTPCDRulesNotFoundResponse } from "./HTTPCDRulesNotFoundResponse";
import { HTTPCIAppError } from "./HTTPCIAppError";
import { HTTPCIAppErrors } from "./HTTPCIAppErrors";
import { ListDeploymentRuleResponseData } from "./ListDeploymentRuleResponseData";
import { ListDeploymentRulesResponseDataAttributes } from "./ListDeploymentRulesResponseDataAttributes";
import { UpdateDeploymentGateParams } from "./UpdateDeploymentGateParams";
import { UpdateDeploymentGateParamsData } from "./UpdateDeploymentGateParamsData";
import { UpdateDeploymentGateParamsDataAttributes } from "./UpdateDeploymentGateParamsDataAttributes";
import { UpdateDeploymentRuleParams } from "./UpdateDeploymentRuleParams";
import { UpdateDeploymentRuleParamsData } from "./UpdateDeploymentRuleParamsData";
import { UpdateDeploymentRuleParamsDataAttributes } from "./UpdateDeploymentRuleParamsDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DeploymentGateDataType: ["deployment_gate"],
    DeploymentGatesEvaluationRequestDataType: [
      "deployment_gates_evaluation_request",
    ],
    DeploymentGatesEvaluationResponseDataType: [
      "deployment_gates_evaluation_response",
    ],
    DeploymentGatesEvaluationResultResponseAttributesGateStatus: [
      "in_progress",
      "pass",
      "fail",
    ],
    DeploymentGatesEvaluationResultResponseDataType: [
      "deployment_gates_evaluation_result_response",
    ],
    DeploymentGatesFDDRuleType: ["faulty_deployment_detection"],
    DeploymentGatesMonitorRuleType: ["monitor"],
    DeploymentRuleDataType: ["deployment_rule"],
    DeploymentRuleResponseDataAttributesType: [
      "faulty_deployment_detection",
      "monitor",
    ],
    ListDeploymentRulesDataType: ["list_deployment_rules"],
  },
  oneOfMap: {
    DeploymentGatesEvaluationRule: [
      "DeploymentGatesMonitorRule",
      "DeploymentGatesFDDRule",
    ],
    DeploymentRulesOptions: [
      "DeploymentRuleOptionsFaultyDeploymentDetection",
      "DeploymentRuleOptionsMonitor",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateDeploymentGateParams: CreateDeploymentGateParams,
    CreateDeploymentGateParamsData: CreateDeploymentGateParamsData,
    CreateDeploymentGateParamsDataAttributes:
      CreateDeploymentGateParamsDataAttributes,
    CreateDeploymentRuleParams: CreateDeploymentRuleParams,
    CreateDeploymentRuleParamsData: CreateDeploymentRuleParamsData,
    CreateDeploymentRuleParamsDataAttributes:
      CreateDeploymentRuleParamsDataAttributes,
    DeploymentGateResponse: DeploymentGateResponse,
    DeploymentGateResponseData: DeploymentGateResponseData,
    DeploymentGateResponseDataAttributes: DeploymentGateResponseDataAttributes,
    DeploymentGateResponseDataAttributesCreatedBy:
      DeploymentGateResponseDataAttributesCreatedBy,
    DeploymentGateResponseDataAttributesUpdatedBy:
      DeploymentGateResponseDataAttributesUpdatedBy,
    DeploymentGateRulesResponse: DeploymentGateRulesResponse,
    DeploymentGatesEvaluationConfiguration:
      DeploymentGatesEvaluationConfiguration,
    DeploymentGatesEvaluationRequest: DeploymentGatesEvaluationRequest,
    DeploymentGatesEvaluationRequestAttributes:
      DeploymentGatesEvaluationRequestAttributes,
    DeploymentGatesEvaluationRequestData: DeploymentGatesEvaluationRequestData,
    DeploymentGatesEvaluationResponse: DeploymentGatesEvaluationResponse,
    DeploymentGatesEvaluationResponseAttributes:
      DeploymentGatesEvaluationResponseAttributes,
    DeploymentGatesEvaluationResponseData:
      DeploymentGatesEvaluationResponseData,
    DeploymentGatesEvaluationResultResponse:
      DeploymentGatesEvaluationResultResponse,
    DeploymentGatesEvaluationResultResponseAttributes:
      DeploymentGatesEvaluationResultResponseAttributes,
    DeploymentGatesEvaluationResultResponseData:
      DeploymentGatesEvaluationResultResponseData,
    DeploymentGatesFDDRule: DeploymentGatesFDDRule,
    DeploymentGatesFDDRuleOptions: DeploymentGatesFDDRuleOptions,
    DeploymentGatesListResponse: DeploymentGatesListResponse,
    DeploymentGatesListResponseMeta: DeploymentGatesListResponseMeta,
    DeploymentGatesListResponseMetaPage: DeploymentGatesListResponseMetaPage,
    DeploymentGatesMonitorRule: DeploymentGatesMonitorRule,
    DeploymentGatesMonitorRuleOptions: DeploymentGatesMonitorRuleOptions,
    DeploymentGatesRuleResponse: DeploymentGatesRuleResponse,
    DeploymentRuleOptionsFaultyDeploymentDetection:
      DeploymentRuleOptionsFaultyDeploymentDetection,
    DeploymentRuleOptionsMonitor: DeploymentRuleOptionsMonitor,
    DeploymentRuleResponse: DeploymentRuleResponse,
    DeploymentRuleResponseData: DeploymentRuleResponseData,
    DeploymentRuleResponseDataAttributes: DeploymentRuleResponseDataAttributes,
    DeploymentRuleResponseDataAttributesCreatedBy:
      DeploymentRuleResponseDataAttributesCreatedBy,
    DeploymentRuleResponseDataAttributesUpdatedBy:
      DeploymentRuleResponseDataAttributesUpdatedBy,
    HTTPCDGatesBadRequestResponse: HTTPCDGatesBadRequestResponse,
    HTTPCDGatesNotFoundResponse: HTTPCDGatesNotFoundResponse,
    HTTPCDRulesNotFoundResponse: HTTPCDRulesNotFoundResponse,
    HTTPCIAppError: HTTPCIAppError,
    HTTPCIAppErrors: HTTPCIAppErrors,
    ListDeploymentRuleResponseData: ListDeploymentRuleResponseData,
    ListDeploymentRulesResponseDataAttributes:
      ListDeploymentRulesResponseDataAttributes,
    UpdateDeploymentGateParams: UpdateDeploymentGateParams,
    UpdateDeploymentGateParamsData: UpdateDeploymentGateParamsData,
    UpdateDeploymentGateParamsDataAttributes:
      UpdateDeploymentGateParamsDataAttributes,
    UpdateDeploymentRuleParams: UpdateDeploymentRuleParams,
    UpdateDeploymentRuleParamsData: UpdateDeploymentRuleParamsData,
    UpdateDeploymentRuleParamsDataAttributes:
      UpdateDeploymentRuleParamsDataAttributes,
  },
};
