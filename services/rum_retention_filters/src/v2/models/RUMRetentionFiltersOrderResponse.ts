import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionFiltersOrderData } from "./RUMRetentionFiltersOrderData";

/**
 * The list of RUM retention filter IDs along with type.
 */
export class RUMRetentionFiltersOrderResponse {
  /**
   * A list of RUM retention filter IDs along with type.
   */
  "data"?: Array<RUMRetentionFiltersOrderData>;
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
      type: "Array<RUMRetentionFiltersOrderData>",
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
    return RUMRetentionFiltersOrderResponse.attributeTypeMap;
  }

  public constructor() {}
}
