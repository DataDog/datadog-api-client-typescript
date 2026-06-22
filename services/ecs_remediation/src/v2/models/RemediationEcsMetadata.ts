import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationLaunchType } from "./RemediationLaunchType";
import { RemediationProblemTask } from "./RemediationProblemTask";
import { RemediationWorkloadSummary } from "./RemediationWorkloadSummary";
import { RemediationWorkloadType } from "./RemediationWorkloadType";

/**
 * ECS-specific context for the investigation.
 */
export class RemediationEcsMetadata {
  /**
   * AWS account ID.
   */
  "accountId"?: string;
  /**
   * Associated capacity providers.
   */
  "capacityProviders"?: Array<string>;
  /**
   * ECS cluster ARN.
   */
  "clusterArn"?: string;
  /**
   * ECS cluster name.
   */
  "clusterName"?: string;
  /**
   * Computed impact score for ranking (64-bit integer encoded as a string).
   */
  "impactScore"?: string;
  /**
   * When the issue was first detected, epoch milliseconds (64-bit integer encoded as a string).
   */
  "issueStartTime"?: string;
  /**
   * ECS launch type.
   */
  "launchType"?: RemediationLaunchType;
  /**
   * AWS region.
   */
  "region"?: string;
  /**
   * All affected task ARNs, for filtering.
   */
  "taskArns"?: Array<string>;
  /**
   * Task definition family name.
   */
  "taskDefinitionFamily"?: string;
  /**
   * Current task definition revision.
   */
  "taskDefinitionRevision"?: number;
  /**
   * Individual tasks exhibiting issues. Capped at 50 most recent.
   */
  "tasks"?: Array<RemediationProblemTask>;
  /**
   * Sum of CPU units across affected tasks (64-bit integer encoded as a string).
   */
  "totalCpuUnits"?: string;
  /**
   * Sum of memory (MiB) across affected tasks (64-bit integer encoded as a string).
   */
  "totalMemoryMib"?: string;
  /**
   * When this metadata was last updated, epoch milliseconds (64-bit integer encoded as a string).
   */
  "updateTimestamp"?: string;
  /**
   * Aggregated health across all tasks in a workload (service or daemon).
   */
  "workloadSummary"?: RemediationWorkloadSummary;
  /**
   * The kind of ECS workload that owns the problematic tasks.
   */
  "workloadType"?: RemediationWorkloadType;
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    capacityProviders: {
      baseName: "capacity_providers",
      type: "Array<string>",
    },
    clusterArn: {
      baseName: "cluster_arn",
      type: "string",
    },
    clusterName: {
      baseName: "cluster_name",
      type: "string",
    },
    impactScore: {
      baseName: "impact_score",
      type: "string",
    },
    issueStartTime: {
      baseName: "issue_start_time",
      type: "string",
    },
    launchType: {
      baseName: "launch_type",
      type: "RemediationLaunchType",
    },
    region: {
      baseName: "region",
      type: "string",
    },
    taskArns: {
      baseName: "task_arns",
      type: "Array<string>",
    },
    taskDefinitionFamily: {
      baseName: "task_definition_family",
      type: "string",
    },
    taskDefinitionRevision: {
      baseName: "task_definition_revision",
      type: "number",
      format: "int64",
    },
    tasks: {
      baseName: "tasks",
      type: "Array<RemediationProblemTask>",
    },
    totalCpuUnits: {
      baseName: "total_cpu_units",
      type: "string",
    },
    totalMemoryMib: {
      baseName: "total_memory_mib",
      type: "string",
    },
    updateTimestamp: {
      baseName: "update_timestamp",
      type: "string",
    },
    workloadSummary: {
      baseName: "workload_summary",
      type: "RemediationWorkloadSummary",
    },
    workloadType: {
      baseName: "workload_type",
      type: "RemediationWorkloadType",
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
    return RemediationEcsMetadata.attributeTypeMap;
  }

  public constructor() {}
}
