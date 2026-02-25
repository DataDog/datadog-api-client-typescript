import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsOccurrenceQueryDataSource } from "./ProductAnalyticsOccurrenceQueryDataSource";
import { ProductAnalyticsOccurrenceSearch } from "./ProductAnalyticsOccurrenceSearch";

/**
 * A Product Analytics occurrence-filtered query.
 */
export class ProductAnalyticsOccurrenceQuery {
  /**
   * The data source identifier for occurrence queries.
   */
  "dataSource": ProductAnalyticsOccurrenceQueryDataSource;
  /**
   * Search parameters for an occurrence query.
   */
  "search": ProductAnalyticsOccurrenceSearch;
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
      type: "ProductAnalyticsOccurrenceQueryDataSource",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsOccurrenceSearch",
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
    return ProductAnalyticsOccurrenceQuery.attributeTypeMap;
  }

  public constructor() {}
}
