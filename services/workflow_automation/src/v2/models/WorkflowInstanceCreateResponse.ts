import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowInstanceCreateResponseData } from "./WorkflowInstanceCreateResponseData";

/**
 * Response returned upon successful workflow instance creation.
 */
export class WorkflowInstanceCreateResponse {
  /**
   * Data about the created workflow instance.
   */
  "data"?: WorkflowInstanceCreateResponseData;
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
      type: "WorkflowInstanceCreateResponseData",
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
    return WorkflowInstanceCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
