import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataObservabilityAssetsQuery20270101Sort } from "./DataObservabilityAssetsQuery20270101Sort";
import { DataObservabilityAssetsQueryDataSource } from "./DataObservabilityAssetsQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DataObservabilityAssetsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": DataObservabilityAssetsQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: DataObservabilityAssetsQuery20270101Sort;
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
      type: "DataObservabilityAssetsQueryDataSource",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "DataObservabilityAssetsQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DataObservabilityAssetsQuery.attributeTypeMap;
  }

  public constructor() {}
}
