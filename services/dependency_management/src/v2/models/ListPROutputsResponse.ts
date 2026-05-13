import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListPROutputsData } from "./ListPROutputsData";

/**
 * Response containing the PR outputs for a workflow execution.
 */
export class ListPROutputsResponse {
  /**
   * Data for PR outputs response.
   */
  "data": ListPROutputsData;
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
      type: "ListPROutputsData",
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
    return ListPROutputsResponse.attributeTypeMap;
  }

  public constructor() {}
}
