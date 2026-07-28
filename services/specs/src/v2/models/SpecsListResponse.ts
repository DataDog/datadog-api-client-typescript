import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpecData } from "./SpecData";

/**
 * Response containing a list of specs.
 */
export class SpecsListResponse {
  /**
   * List of specs.
   */
  "data"?: Array<SpecData>;
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
      type: "Array<SpecData>",
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
    return SpecsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
