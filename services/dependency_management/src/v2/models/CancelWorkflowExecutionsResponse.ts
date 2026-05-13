import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CancelWorkflowExecutionsData } from "./CancelWorkflowExecutionsData";

/**
 * Response from canceling all running workflow execution instances.
 */
export class CancelWorkflowExecutionsResponse {
  /**
   * Data returned after canceling workflow executions.
   */
  "data": CancelWorkflowExecutionsData;
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
      type: "CancelWorkflowExecutionsData",
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
    return CancelWorkflowExecutionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
