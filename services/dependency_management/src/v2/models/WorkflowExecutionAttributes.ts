import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Entity } from "./Entity";

/**
 * Attributes of a workflow execution.
 */
export class WorkflowExecutionAttributes {
  /**
   * The ID of the parent AI workflow.
   */
  "aiWorkflowId": string;
  /**
   * Timestamp when the execution was created.
   */
  "createdAt": Date;
  /**
   * The list of entities processed by this execution.
   */
  "entities": Array<Entity>;
  /**
   * The Datadog Workflow Automation instance ID for this execution.
   */
  "instanceId": string;
  /**
   * Timestamp when the execution was last updated.
   */
  "updatedAt": Date;
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
    aiWorkflowId: {
      baseName: "ai_workflow_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    entities: {
      baseName: "entities",
      type: "Array<Entity>",
      required: true,
    },
    instanceId: {
      baseName: "instance_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return WorkflowExecutionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
