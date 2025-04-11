import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowDataUpdate } from "./WorkflowDataUpdate";

/**
 * The response object after updating a workflow.
 */
export class UpdateWorkflowResponse {
  /**
   * Data related to the workflow being updated.
   */
  "data"?: WorkflowDataUpdate;
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
      type: "WorkflowDataUpdate",
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
    return UpdateWorkflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
