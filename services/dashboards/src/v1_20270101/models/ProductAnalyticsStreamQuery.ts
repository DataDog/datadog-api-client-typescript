import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsStreamQuery20270101Sort } from "./ProductAnalyticsStreamQuery20270101Sort";
import { ProductAnalyticsStreamQueryDataSource } from "./ProductAnalyticsStreamQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ProductAnalyticsStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ProductAnalyticsStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ProductAnalyticsStreamQuery20270101Sort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "ProductAnalyticsStreamQueryDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ProductAnalyticsStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
