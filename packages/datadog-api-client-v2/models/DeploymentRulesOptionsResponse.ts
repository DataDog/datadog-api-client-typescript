/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentRuleOptionsFaultyDeploymentDetectionResponse } from "./DeploymentRuleOptionsFaultyDeploymentDetectionResponse";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Options returned in deployment rule responses representing either faulty deployment detection or monitor options. Faulty deployment detection responses always include `excluded_resources`, making the two variants unambiguous.
 */

export type DeploymentRulesOptionsResponse =
  | DeploymentRuleOptionsFaultyDeploymentDetectionResponse
  | DeploymentRuleOptionsMonitor
  | UnparsedObject;
