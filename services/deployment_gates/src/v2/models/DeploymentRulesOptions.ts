import { UnparsedObject } from "@datadog/datadog-api-client";

import { DeploymentRuleOptionsFaultyDeploymentDetection } from "./DeploymentRuleOptionsFaultyDeploymentDetection";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";
import { DeploymentRuleOptionsMonitorIds } from "./DeploymentRuleOptionsMonitorIds";

/**
 * Options for deployment rule response representing either faulty deployment detection or monitor options.
 * Bits Deployment Analysis rules use the faulty deployment detection options shape and accept only `duration`.
 */
export type DeploymentRulesOptions =
  | DeploymentRuleOptionsFaultyDeploymentDetection
  | DeploymentRuleOptionsMonitor
  | DeploymentRuleOptionsMonitorIds
  | UnparsedObject;
