import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationLaunchType } from "./RemediationLaunchType";
import { RemediationProblemContainer } from "./RemediationProblemContainer";

/**
 * An individual ECS task in a problematic state.
 */
export class RemediationProblemTask {
  /**
   * Availability zone where the task is running.
   */
  "availabilityZone"?: string;
  /**
   * Container instance ARN (EC2 launch type only).
   */
  "containerInstanceArn"?: string;
  /**
   * Problematic containers within the task.
   */
  "containers"?: Array<RemediationProblemContainer>;
  /**
   * CPU units allocated to the task (64-bit integer encoded as a string).
   */
  "cpuUnits"?: string;
  /**
   * Desired task status.
   */
  "desiredStatus"?: string;
  /**
   * IAM role used by ECS to pull images and fetch secrets.
   */
  "executionRoleArn"?: string;
  /**
   * Task-level health status.
   */
  "healthStatus"?: string;
  /**
   * When this task's issue started, epoch milliseconds (64-bit integer encoded as a string).
   */
  "issueStartTime"?: string;
  /**
   * Issue type for this specific task.
   */
  "issueType"?: string;
  /**
   * Current task status.
   */
  "lastStatus"?: string;
  /**
   * ECS launch type.
   */
  "launchType"?: RemediationLaunchType;
  /**
   * Memory in MiB allocated to the task (64-bit integer encoded as a string).
   */
  "memoryMib"?: string;
  /**
   * Stop code if the task was stopped.
   */
  "stopCode"?: string;
  /**
   * Stop reason if the task was stopped.
   */
  "stoppedReason"?: string;
  /**
   * Task-level tags.
   */
  "tags"?: Array<string>;
  /**
   * Full task ARN.
   */
  "taskArn"?: string;
  /**
   * Task definition ARN with revision.
   */
  "taskDefinitionArn"?: string;
  /**
   * IAM role used by the task at runtime.
   */
  "taskRoleArn"?: string;
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
    availabilityZone: {
      baseName: "availability_zone",
      type: "string",
    },
    containerInstanceArn: {
      baseName: "container_instance_arn",
      type: "string",
    },
    containers: {
      baseName: "containers",
      type: "Array<RemediationProblemContainer>",
    },
    cpuUnits: {
      baseName: "cpu_units",
      type: "string",
    },
    desiredStatus: {
      baseName: "desired_status",
      type: "string",
    },
    executionRoleArn: {
      baseName: "execution_role_arn",
      type: "string",
    },
    healthStatus: {
      baseName: "health_status",
      type: "string",
    },
    issueStartTime: {
      baseName: "issue_start_time",
      type: "string",
    },
    issueType: {
      baseName: "issue_type",
      type: "string",
    },
    lastStatus: {
      baseName: "last_status",
      type: "string",
    },
    launchType: {
      baseName: "launch_type",
      type: "RemediationLaunchType",
    },
    memoryMib: {
      baseName: "memory_mib",
      type: "string",
    },
    stopCode: {
      baseName: "stop_code",
      type: "string",
    },
    stoppedReason: {
      baseName: "stopped_reason",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    taskArn: {
      baseName: "task_arn",
      type: "string",
    },
    taskDefinitionArn: {
      baseName: "task_definition_arn",
      type: "string",
    },
    taskRoleArn: {
      baseName: "task_role_arn",
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
    return RemediationProblemTask.attributeTypeMap;
  }

  public constructor() {}
}
