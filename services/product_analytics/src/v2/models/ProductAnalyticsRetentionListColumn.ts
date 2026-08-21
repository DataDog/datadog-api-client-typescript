import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionListColumnField } from "./ProductAnalyticsRetentionListColumnField";

/**
 * A column to include in each returned entity row.
 */
export class ProductAnalyticsRetentionListColumn {
  /**
   * The attribute selected for a column.
   */
  "field"?: ProductAnalyticsRetentionListColumnField;
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
    field: {
      baseName: "field",
      type: "ProductAnalyticsRetentionListColumnField",
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
    return ProductAnalyticsRetentionListColumn.attributeTypeMap;
  }

  public constructor() {}
}
