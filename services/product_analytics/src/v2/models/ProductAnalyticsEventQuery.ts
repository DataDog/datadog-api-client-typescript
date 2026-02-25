import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsEventQueryDataSource } from "./ProductAnalyticsEventQueryDataSource";
import { ProductAnalyticsEventSearch } from "./ProductAnalyticsEventSearch";

/**
 * A standard Product Analytics event query.
 */
export class ProductAnalyticsEventQuery {
  /**
   * The data source identifier.
   */
  "dataSource": ProductAnalyticsEventQueryDataSource;
  /**
   * Search parameters for an event query.
   */
  "search": ProductAnalyticsEventSearch;
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
    dataSource: {
      baseName: "data_source",
      type: "ProductAnalyticsEventQueryDataSource",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsEventSearch",
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
    return ProductAnalyticsEventQuery.attributeTypeMap;
  }

  public constructor() {}
}
