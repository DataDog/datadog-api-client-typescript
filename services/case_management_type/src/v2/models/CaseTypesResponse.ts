import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseTypeResource } from "./CaseTypeResource";

/**
 * Case types response.
 */
export class CaseTypesResponse {
  /**
   * List of case types
   */
  "data"?: Array<CaseTypeResource>;
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
      type: "Array<CaseTypeResource>",
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
    return CaseTypesResponse.attributeTypeMap;
  }

  public constructor() {}
}
