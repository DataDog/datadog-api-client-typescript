import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FindingCaseResponseData } from "./FindingCaseResponseData";

/**
 * Case response.
 */
export class FindingCaseResponse {
  /**
   * Data of the case.
   */
  "data"?: FindingCaseResponseData;
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
      type: "FindingCaseResponseData",
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
    return FindingCaseResponse.attributeTypeMap;
  }

  public constructor() {}
}
