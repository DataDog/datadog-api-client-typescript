import { UnparsedObject } from "@datadog/datadog-api-client";

import { DeploymentGatesFDDRule } from "./DeploymentGatesFDDRule";
import { DeploymentGatesMonitorRule } from "./DeploymentGatesMonitorRule";

/**
 * A rule to evaluate as part of a deployment gate evaluation.
 */
export type DeploymentGatesEvaluationRule =
  | DeploymentGatesMonitorRule
  | DeploymentGatesFDDRule
  | UnparsedObject;
