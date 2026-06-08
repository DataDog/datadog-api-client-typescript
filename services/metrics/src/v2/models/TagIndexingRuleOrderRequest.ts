import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleOrderData } from "./TagIndexingRuleOrderData";

/**
 * Request body for reordering tag indexing rules.
 */
export class TagIndexingRuleOrderRequest {
  /**
   * Data object for the reorder operation.
   */
  "data": TagIndexingRuleOrderData;
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
      type: "TagIndexingRuleOrderData",
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
    return TagIndexingRuleOrderRequest.attributeTypeMap;
  }

  public constructor() {}
}
