import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventStreamQuery20270101Sort } from "./EventStreamQuery20270101Sort";
import { EventStreamQueryDataSource } from "./EventStreamQueryDataSource";
import { EventStreamQueryEventSize } from "./EventStreamQueryEventSize";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": EventStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "eventSize"?: EventStreamQueryEventSize;
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
  "sort"?: EventStreamQuery20270101Sort;
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
      type: "EventStreamQueryDataSource",
      required: true,
    },
    eventSize: {
      baseName: "event_size",
      type: "EventStreamQueryEventSize",
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
      type: "EventStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
