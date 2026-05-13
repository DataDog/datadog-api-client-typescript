import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowExecutionAttributes } from "./WorkflowExecutionAttributes";
import { WorkflowExecutionDataType } from "./WorkflowExecutionDataType";

/**
 * A single workflow execution resource.
 */
export class WorkflowExecutionData {
  /**
   * Attributes of a workflow execution.
   */
  "attributes": WorkflowExecutionAttributes;
  /**
   * The unique identifier of the workflow execution.
   */
  "id": string;
  /**
   * The resource type for workflow executions.
   */
  "type": WorkflowExecutionDataType;
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
    attributes: {
      baseName: "attributes",
      type: "WorkflowExecutionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "WorkflowExecutionDataType",
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
    return WorkflowExecutionData.attributeTypeMap;
  }

  public constructor() {}
}
