import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Options for limiting results returned.
 */
export class WidgetFormulaLimit {
  /**
   * Number of results to return.
   */
  "count"?: number;
  /**
   * Direction of sort.
   */
  "order"?: QuerySortOrder;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetFormulaLimit.attributeTypeMap;
  }

  public constructor() {}
}
