import { UnparsedObject } from "@datadog/datadog-api-client";

import { DeploymentRuleOptionsFaultyDeploymentDetection } from "./DeploymentRuleOptionsFaultyDeploymentDetection";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";

/**
 * Options for deployment rule response representing either faulty deployment detection or monitor options.
 */
export type DeploymentRulesOptions =
  | DeploymentRuleOptionsFaultyDeploymentDetection
  | DeploymentRuleOptionsMonitor
  | UnparsedObject;
