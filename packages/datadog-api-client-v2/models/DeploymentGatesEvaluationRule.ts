/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesFDDRule } from "./DeploymentGatesFDDRule";
import { DeploymentGatesMonitorRule } from "./DeploymentGatesMonitorRule";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * A rule to evaluate as part of a deployment gate evaluation.
*/

export type DeploymentGatesEvaluationRule = DeploymentGatesMonitorRule | DeploymentGatesFDDRule | UnparsedObject;