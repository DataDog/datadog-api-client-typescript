import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowData } from "./WorkflowData";

/**
 * The response object after creating a new workflow.
 */
export class CreateWorkflowResponse {
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateWorkflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
