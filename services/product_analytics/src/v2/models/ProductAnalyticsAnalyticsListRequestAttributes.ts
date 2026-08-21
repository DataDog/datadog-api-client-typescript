import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsListQuery } from "./ProductAnalyticsAnalyticsListQuery";

/**
 * Attributes for an analytics list request.
 */
export class ProductAnalyticsAnalyticsListRequestAttributes {
  /**
   * Start time in epoch milliseconds. Must be less than `to`.
   */
  "from": number;
  /**
   * The analytics list query definition. It selects the events to return with `query`, then
   * chooses the columns on each event row, the sort applied to those rows, and a row limit.
   * Unlike the scalar and timeseries queries, a list query returns raw event rows rather than
   * aggregates, so it takes no compute or group-by rule.
   */
  "query": ProductAnalyticsAnalyticsListQuery;
  /**
   * End time in epoch milliseconds.
   */
  "to": number;
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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsAnalyticsListQuery",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsAnalyticsListRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
