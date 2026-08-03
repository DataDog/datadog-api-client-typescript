/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a deployment in the v2 API response.
 */
export class FleetDeploymentV2Attributes {
  /**
   * Handle of the user who triggered the deployment.
   */
  "author"?: string;
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
   * Time the deployment finished as a Unix timestamp. Zero if not yet finished.
   */
  "finishedAt"?: number;
  /**
   * Whether this deployment was triggered by a schedule (`schedule_id` is non-empty).
   */
  "isScheduled"?: boolean;
  /**
   * Query used to filter and select target hosts for the deployment.
   */
  "query"?: string;
  /**
   * Identifier of the schedule that triggered this deployment. Empty if triggered manually.
   */
  "scheduleId"?: string;
  /**
   * Time the deployment started as a Unix timestamp. Zero if not yet started.
   */
  "startedAt"?: number;
  /**
   * Current high-level status of the deployment (for example, "pending", "running",
   * "completed", "failed").
   */
  "status"?: string;
  /**
   * Package versions targeted by this deployment.
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
    finishedAt: {
      baseName: "finished_at",
      type: "number",
      format: "int64",
    },
    isScheduled: {
      baseName: "is_scheduled",
      type: "boolean",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    scheduleId: {
      baseName: "schedule_id",
      type: "string",
    },
    startedAt: {
      baseName: "started_at",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return FleetDeploymentV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
