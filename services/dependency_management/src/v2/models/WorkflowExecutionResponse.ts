import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowExecutionData } from "./WorkflowExecutionData";

/**
 * Response containing a single workflow execution.
 */
export class WorkflowExecutionResponse {
  /**
   * A single workflow execution resource.
   */
  "data": WorkflowExecutionData;
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
      type: "WorkflowExecutionData",
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
    return WorkflowExecutionResponse.attributeTypeMap;
  }

  public constructor() {}
}
