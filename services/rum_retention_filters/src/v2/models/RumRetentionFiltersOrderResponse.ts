import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFiltersOrderData } from "./RumRetentionFiltersOrderData";

/**
 * The list of RUM retention filter IDs along with type.
 */
export class RumRetentionFiltersOrderResponse {
  /**
   * A list of RUM retention filter IDs along with type.
   */
  "data"?: Array<RumRetentionFiltersOrderData>;
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
      type: "Array<RumRetentionFiltersOrderData>",
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
    return RumRetentionFiltersOrderResponse.attributeTypeMap;
  }

  public constructor() {}
}
