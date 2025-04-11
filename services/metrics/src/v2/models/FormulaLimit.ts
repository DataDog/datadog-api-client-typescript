import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Message for specifying limits to the number of values returned by a query.
 * This limit is only for scalar queries and has no effect on timeseries queries.
 */
export class FormulaLimit {
  /**
   * The number of results to which to limit.
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
      format: "int32",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
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
    return FormulaLimit.attributeTypeMap;
  }

  public constructor() {}
}
