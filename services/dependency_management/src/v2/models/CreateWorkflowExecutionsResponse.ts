import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowExecutionData } from "./WorkflowExecutionData";

/**
 * Response containing a list of created workflow executions.
 */
export class CreateWorkflowExecutionsResponse {
  /**
   * List of created workflow execution resources.
   */
  "data": Array<WorkflowExecutionData>;
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
    data: {
      baseName: "data",
      type: "Array<WorkflowExecutionData>",
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
    return CreateWorkflowExecutionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
