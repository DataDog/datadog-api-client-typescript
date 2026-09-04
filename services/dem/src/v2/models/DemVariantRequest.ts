import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemVariantRequestData } from "./DemVariantRequestData";

/**
 * Request to create or update a DEM journey variant.
 */
export class DemVariantRequest {
  /**
   * Data object for a DEM journey variant request.
   */
  "data": DemVariantRequestData;
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
      type: "DemVariantRequestData",
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
    return DemVariantRequest.attributeTypeMap;
  }

  public constructor() {}
}
