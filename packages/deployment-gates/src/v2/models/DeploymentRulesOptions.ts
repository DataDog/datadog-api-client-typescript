import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { DeploymentRuleOptionsFaultyDeploymentDetection } from "./DeploymentRuleOptionsFaultyDeploymentDetection";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";
import { DeploymentRuleOptionsMonitorIds } from "./DeploymentRuleOptionsMonitorIds";

/**
 * Options for deployment rule response representing either faulty deployment detection or monitor options.
 */
export type DeploymentRulesOptions =
  | DeploymentRuleOptionsFaultyDeploymentDetection
  | DeploymentRuleOptionsMonitor
  | DeploymentRuleOptionsMonitorIds
  | UnparsedObject;
