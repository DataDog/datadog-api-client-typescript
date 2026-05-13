import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIWorkflowData } from "./AIWorkflowData";

/**
 * Response containing a single AI workflow.
 */
export class AIWorkflowResponse {
  /**
   * A single AI workflow resource.
   */
  "data": AIWorkflowData;
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
      type: "AIWorkflowData",
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
    return AIWorkflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
