import { UnparsedObject } from "@datadog/datadog-api-client";

import { DeploymentRuleOptionsFaultyDeploymentDetection } from "./DeploymentRuleOptionsFaultyDeploymentDetection";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";
import { DeploymentRuleOptionsMonitorIds } from "./DeploymentRuleOptionsMonitorIds";

/**
 * Options for deployment rule response representing either faulty deployment detection or monitor options.
 * Bits Deployment Analysis rules only accept `duration`, using the faulty deployment detection options shape.
 */
export type DeploymentRulesOptions =
  | DeploymentRuleOptionsFaultyDeploymentDetection
  | DeploymentRuleOptionsMonitor
  | DeploymentRuleOptionsMonitorIds
  | UnparsedObject;
