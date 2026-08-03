import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentOperation } from "./FleetDeploymentOperation";
import { FleetDeploymentV2DetailAgent } from "./FleetDeploymentV2DetailAgent";

/**
 * Attributes of a deployment detail response.
 */
export class FleetDeploymentV2DetailAttributes {
  /**
   * Handle of the user who triggered the deployment.
   */
  "author"?: string;
  /**
   * Number of hosts on which the deployment was canceled.
   */
  "canceledHosts"?: number;
  /**
   * Ordered list of configuration file operations applied by this deployment.
   * Absent for package deployments, which have no configuration file operations.
   */
  "configOperations"?: Array<FleetDeploymentOperation>;
  /**
   * Duration of the deployment in seconds, computed as `finished_at - started_at`.
   * Zero if the deployment has not finished.
   */
  "durationSeconds"?: number;
  /**
   * Top-level error message for the deployment. Populated only when the deployment has failed.
   */
  "errorSummary"?: string;
  /**
   * Estimated completion time of the deployment as a Unix timestamp. Zero if not available.
   */
  "estimatedFinishedAt"?: number;
  /**
   * Number of hosts on which the deployment failed.
   */
  "failedHosts"?: number;
  /**
   * Current high-level status of the deployment (for example, "pending", "running",
   * "completed", "failed").
   */
  "highLevelStatus"?: string;
  /**
   * Per-host status list for this deployment.
   */
  "hosts"?: Array<FleetDeploymentV2DetailAgent>;
  /**
   * Whether this deployment was triggered by a schedule (`schedule_id` is non-empty).
   */
  "isScheduled"?: boolean;
  /**
   * Query used to filter and select target hosts for the deployment.
   */
  "query"?: string;
  /**
   * Number of hosts on which the deployment is currently running.
   */
  "runningHosts"?: number;
  /**
   * Identifier of the schedule that triggered this deployment. Empty if triggered manually.
   */
  "scheduleId"?: string;
  /**
   * Number of hosts that were skipped during the deployment.
   */
  "skippedHosts"?: number;
  /**
   * Number of hosts on which the deployment succeeded.
   */
  "succeededHosts"?: number;
  /**
   * Distinct package versions targeted by this deployment, in first-seen order.
   */
  "targetVersions"?: Array<string>;
  /**
   * Total number of hosts targeted by this deployment.
   */
  "totalHosts"?: number;
  /**
   * Type of update operation performed by this deployment
   * (for example, "update_config_operations", "update_package").
   */
  "updateType"?: string;
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
    author: {
      baseName: "author",
      type: "string",
    },
    canceledHosts: {
      baseName: "canceled_hosts",
      type: "number",
      format: "int64",
    },
    configOperations: {
      baseName: "config_operations",
      type: "Array<FleetDeploymentOperation>",
    },
    durationSeconds: {
      baseName: "duration_seconds",
      type: "number",
      format: "int64",
    },
    errorSummary: {
      baseName: "error_summary",
      type: "string",
    },
    estimatedFinishedAt: {
      baseName: "estimated_finished_at",
      type: "number",
      format: "int64",
    },
    failedHosts: {
      baseName: "failed_hosts",
      type: "number",
      format: "int64",
    },
    highLevelStatus: {
      baseName: "high_level_status",
      type: "string",
    },
    hosts: {
      baseName: "hosts",
      type: "Array<FleetDeploymentV2DetailAgent>",
    },
    isScheduled: {
      baseName: "is_scheduled",
      type: "boolean",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    runningHosts: {
      baseName: "running_hosts",
      type: "number",
      format: "int64",
    },
    scheduleId: {
      baseName: "schedule_id",
      type: "string",
    },
    skippedHosts: {
      baseName: "skipped_hosts",
      type: "number",
      format: "int64",
    },
    succeededHosts: {
      baseName: "succeeded_hosts",
      type: "number",
      format: "int64",
    },
    targetVersions: {
      baseName: "target_versions",
      type: "Array<string>",
    },
    totalHosts: {
      baseName: "total_hosts",
      type: "number",
      format: "int64",
    },
    updateType: {
      baseName: "update_type",
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
    return FleetDeploymentV2DetailAttributes.attributeTypeMap;
  }

  public constructor() {}
}
