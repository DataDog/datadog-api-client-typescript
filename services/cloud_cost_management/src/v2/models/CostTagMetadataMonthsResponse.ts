import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagMetadataMonth } from "./CostTagMetadataMonth";

/**
 * List of months that have Cloud Cost Management tag metadata for the requested provider, ordered most-recent first and capped at 36 months.
 */
export class CostTagMetadataMonthsResponse {
  /**
   * List of months that have tag metadata available.
   */
  "data": Array<CostTagMetadataMonth>;
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
      type: "Array<CostTagMetadataMonth>",
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
    return CostTagMetadataMonthsResponse.attributeTypeMap;
  }

  public constructor() {}
}
