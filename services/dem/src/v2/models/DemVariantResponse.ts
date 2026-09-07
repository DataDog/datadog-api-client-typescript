import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemVariantResponseData } from "./DemVariantResponseData";

/**
 * Response containing a DEM journey variant.
 */
export class DemVariantResponse {
  /**
   * Data object returned for a DEM journey variant.
   */
  "data": DemVariantResponseData;
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
      type: "DemVariantResponseData",
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
    return DemVariantResponse.attributeTypeMap;
  }

  public constructor() {}
}
