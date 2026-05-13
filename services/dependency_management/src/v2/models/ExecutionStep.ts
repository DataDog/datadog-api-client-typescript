import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionStepStatus } from "./ExecutionStepStatus";

/**
 * A single step in a workflow execution.
 */
export class ExecutionStep {
  /**
   * Timestamp when the step completed. Null if not yet completed.
   */
  "completedAt"?: Date;
  /**
   * Error message if the step failed.
   */
  "error"?: string;
  /**
   * The unique identifier of the execution step.
   */
  "id": string;
  /**
   * The name of the step.
   */
  "name": string;
  /**
   * Timestamp when the step started. Null if not yet started.
   */
  "startedAt"?: Date;
  /**
   * The current status of the step.
   */
  "status": ExecutionStepStatus;
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
    completedAt: {
      baseName: "completed_at",
      type: "Date",
      format: "date-time",
    },
    error: {
      baseName: "error",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "ExecutionStepStatus",
      required: true,
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
    return ExecutionStep.attributeTypeMap;
  }

  public constructor() {}
}
