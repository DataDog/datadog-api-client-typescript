/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The overall status of the gate evaluation.
 * - `in_progress`: The evaluation is still running.
 * - `pass`: All rules passed successfully and the deployment is allowed to proceed.
 * - `fail`: One or more rules did not pass; the deployment should not proceed.
 */

export type DeploymentGatesEvaluationResultResponseAttributesGateStatus =
  | typeof IN_PROGRESS
  | typeof PASS
  | typeof FAIL
  | UnparsedObject;
export const IN_PROGRESS = "in_progress";
export const PASS = "pass";
export const FAIL = "fail";
