/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API type for a deployment gate evaluation result response.
 */

export type DeploymentGatesEvaluationResultResponseDataType =
  | typeof DEPLOYMENT_GATES_EVALUATION_RESULT_RESPONSE
  | UnparsedObject;
export const DEPLOYMENT_GATES_EVALUATION_RESULT_RESPONSE =
  "deployment_gates_evaluation_result_response";
