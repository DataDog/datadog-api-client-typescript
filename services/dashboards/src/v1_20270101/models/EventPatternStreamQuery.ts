import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventPatternGroupBy } from "./EventPatternGroupBy";
import { EventPatternStreamQuery20270101Sort } from "./EventPatternStreamQuery20270101Sort";
import { EventPatternStreamQueryDataSource } from "./EventPatternStreamQueryDataSource";
import { EventsCalculatedField } from "./EventsCalculatedField";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventPatternStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "calculatedFields"?: Array<EventsCalculatedField>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "clusteringPatternFieldPath"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": EventPatternStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<EventPatternGroupBy>;
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
  "sort"?: EventPatternStreamQuery20270101Sort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    calculatedFields: {
      baseName: "calculated_fields",
      type: "Array<EventsCalculatedField>",
    },
    clusteringPatternFieldPath: {
      baseName: "clustering_pattern_field_path",
      type: "string",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "EventPatternStreamQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<EventPatternGroupBy>",
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
      type: "EventPatternStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventPatternStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
