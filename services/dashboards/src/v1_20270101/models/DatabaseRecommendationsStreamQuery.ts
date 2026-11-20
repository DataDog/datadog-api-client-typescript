import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabaseRecommendationsStreamQuery20270101Sort } from "./DatabaseRecommendationsStreamQuery20270101Sort";
import { DatabaseRecommendationsStreamQueryDataSource } from "./DatabaseRecommendationsStreamQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatabaseRecommendationsStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": DatabaseRecommendationsStreamQueryDataSource;
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
  "sort"?: DatabaseRecommendationsStreamQuery20270101Sort;
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
      type: "DatabaseRecommendationsStreamQueryDataSource",
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
      type: "DatabaseRecommendationsStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabaseRecommendationsStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
