import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowDataUpdate } from "./WorkflowDataUpdate";

/**
 * A request object for updating an existing workflow.
 */
export class UpdateWorkflowRequest {
  /**
   * Data related to the workflow being updated.
   */
  "data": WorkflowDataUpdate;
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
    return UpdateWorkflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
