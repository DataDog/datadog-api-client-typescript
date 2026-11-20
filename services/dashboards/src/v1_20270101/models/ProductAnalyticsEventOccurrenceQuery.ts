import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsEventOccurrenceQueryDataSource } from "./ProductAnalyticsEventOccurrenceQueryDataSource";
import { ProductAnalyticsEventOccurrenceQuerySearch } from "./ProductAnalyticsEventOccurrenceQuerySearch";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ProductAnalyticsEventOccurrenceQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ProductAnalyticsEventOccurrenceQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": ProductAnalyticsEventOccurrenceQuerySearch;
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
      type: "ProductAnalyticsEventOccurrenceQueryDataSource",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsEventOccurrenceQuerySearch",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsEventOccurrenceQuery.attributeTypeMap;
  }

  public constructor() {}
}
