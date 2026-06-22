import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationDeploymentRolloutState } from "./RemediationDeploymentRolloutState";

/**
 * Aggregated health across all tasks in a workload (service or daemon).
 */
export class RemediationWorkloadSummary {
  /**
   * ECS deployment state, populated only for deployment failures.
   */
  "deploymentRolloutState"?: RemediationDeploymentRolloutState;
  /**
   * Expected task count (64-bit integer encoded as a string).
   */
  "desiredCount"?: string;
  /**
   * Tasks in a problematic state (64-bit integer encoded as a string).
   */
  "failedCount"?: string;
  /**
   * Percentage of desired count that is failed (64-bit integer encoded as a string).
   */
  "failedPercent"?: string;
  /**
   * Tasks currently pending (64-bit integer encoded as a string).
   */
  "pendingCount"?: string;
  /**
   * Previous deployment's task definition, as family:revision or a full task definition ARN. Empty when no rollback target is visible.
   */
  "previousTaskDefinition"?: string;
  /**
   * Tasks currently running (64-bit integer encoded as a string).
   */
  "runningCount"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    deploymentRolloutState: {
      baseName: "deployment_rollout_state",
      type: "RemediationDeploymentRolloutState",
    },
    desiredCount: {
      baseName: "desired_count",
      type: "string",
    },
    failedCount: {
      baseName: "failed_count",
      type: "string",
    },
    failedPercent: {
      baseName: "failed_percent",
      type: "string",
    },
    pendingCount: {
      baseName: "pending_count",
      type: "string",
    },
    previousTaskDefinition: {
      baseName: "previous_task_definition",
      type: "string",
    },
    runningCount: {
      baseName: "running_count",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RemediationWorkloadSummary.attributeTypeMap;
  }

  public constructor() {}
}
