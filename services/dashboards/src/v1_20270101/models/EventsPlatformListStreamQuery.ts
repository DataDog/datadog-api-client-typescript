import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventPlatformStreamDataSource } from "./EventPlatformStreamDataSource";
import { EventsPlatformListStreamQuery20270101Sort } from "./EventsPlatformListStreamQuery20270101Sort";
import { StorageType } from "./StorageType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsPlatformListStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": EventPlatformStreamDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "querySnapshot"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: EventsPlatformListStreamQuery20270101Sort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;
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
      type: "EventPlatformStreamDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    querySnapshot: {
      baseName: "query_snapshot",
      type: "boolean",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "EventsPlatformListStreamQuery20270101Sort",
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsPlatformListStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
