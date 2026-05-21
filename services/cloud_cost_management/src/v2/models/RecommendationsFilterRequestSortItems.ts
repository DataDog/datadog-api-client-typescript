import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single sort clause applied to the cost recommendations result set.
 */
export class RecommendationsFilterRequestSortItems {
  /**
   * Field to sort by (for example, `potential_daily_savings.amount`).
   */
  "expression"?: string;
  /**
   * Sort direction, either `ASC` or `DESC`.
   */
  "order"?: string;
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
    expression: {
      baseName: "expression",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "string",
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
    return RecommendationsFilterRequestSortItems.attributeTypeMap;
  }

  public constructor() {}
}
