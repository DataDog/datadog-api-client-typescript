import { UnparsedObject } from "@datadog/datadog-api-client";

import { DeploymentRuleOptionsFaultyDeploymentDetectionResponse } from "./DeploymentRuleOptionsFaultyDeploymentDetectionResponse";
import { DeploymentRuleOptionsMonitor } from "./DeploymentRuleOptionsMonitor";

/**
 * Options returned in deployment rule responses representing either faulty deployment detection or monitor options. Faulty deployment detection responses always include `excluded_resources`, making the two variants unambiguous.
 */
export type DeploymentRulesOptionsResponse =
  | DeploymentRuleOptionsFaultyDeploymentDetectionResponse
  | DeploymentRuleOptionsMonitor
  | UnparsedObject;
