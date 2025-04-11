import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowData } from "./WorkflowData";

/**
 * A request object for creating a new workflow.
 */
export class CreateWorkflowRequest {
  /**
   * Data related to the workflow.
   */
  "data": WorkflowData;
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
      type: "WorkflowData",
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
    return CreateWorkflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
