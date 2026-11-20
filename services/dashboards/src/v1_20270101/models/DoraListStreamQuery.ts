import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DoraIndexes } from "./DoraIndexes";
import { DoraListStreamQuery20270101Sort } from "./DoraListStreamQuery20270101Sort";
import { DoraListStreamQueryDataSource } from "./DoraListStreamQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DoraListStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": DoraListStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes": Array<DoraIndexes>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: DoraListStreamQuery20270101Sort;
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
      type: "DoraListStreamQueryDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<DoraIndexes>",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "DoraListStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DoraListStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
