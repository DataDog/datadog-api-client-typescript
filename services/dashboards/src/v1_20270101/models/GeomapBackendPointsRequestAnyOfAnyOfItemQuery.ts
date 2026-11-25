import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NetworkDevicesDataSourceName } from "./NetworkDevicesDataSourceName";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequestAnyOfAnyOfItemQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": NetworkDevicesDataSourceName;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
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
      type: "NetworkDevicesDataSourceName",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapBackendPointsRequestAnyOfAnyOfItemQuery.attributeTypeMap;
  }

  public constructor() {}
}
