import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatchdogAlertsQuery20270101Sort } from "./WatchdogAlertsQuery20270101Sort";
import { WatchdogAlertsQueryDataSource } from "./WatchdogAlertsQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WatchdogAlertsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": WatchdogAlertsQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: WatchdogAlertsQuery20270101Sort;
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
      type: "WatchdogAlertsQueryDataSource",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "WatchdogAlertsQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WatchdogAlertsQuery.attributeTypeMap;
  }

  public constructor() {}
}
