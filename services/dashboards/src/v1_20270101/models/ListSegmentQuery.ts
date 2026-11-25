import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompositeEventsPlatformQuery } from "./CompositeEventsPlatformQuery";
import { EventsContext } from "./EventsContext";
import { ListSegmentQueryDataSource } from "./ListSegmentQueryDataSource";
import { ListSegmentQuerySegmentQuery } from "./ListSegmentQuerySegmentQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ListSegmentQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": CompositeEventsPlatformQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "context"?: EventsContext;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ListSegmentQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "segmentQuery": ListSegmentQuerySegmentQuery;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    baseQuery: {
      baseName: "base_query",
      type: "CompositeEventsPlatformQuery",
      required: true,
    },
    context: {
      baseName: "context",
      type: "EventsContext",
    },
    dataSource: {
      baseName: "data_source",
      type: "ListSegmentQueryDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    segmentQuery: {
      baseName: "segment_query",
      type: "ListSegmentQuerySegmentQuery",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListSegmentQuery.attributeTypeMap;
  }

  public constructor() {}
}
