/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentRuleOptionsFaultyDeploymentDetection } from "./DeploymentRuleOptionsFaultyDeploymentDetection";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Options for deployment rule response representing either faulty deployment detection or monitor options.
 */

export type DeploymentRulesOptions =
  | DeploymentRuleOptionsFaultyDeploymentDetection
  | DeploymentRuleOptionsMonitor
  | UnparsedObject;
