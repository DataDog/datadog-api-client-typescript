import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsCalculatedField } from "./EventsCalculatedField";
import { EventsContext } from "./EventsContext";
import { EventsDataExtraction } from "./EventsDataExtraction";
import { LogsStreamQuery20270101Sort } from "./LogsStreamQuery20270101Sort";
import { LogsStreamQueryDataSource } from "./LogsStreamQueryDataSource";
import { StorageType } from "./StorageType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "calculatedFields"?: Array<EventsCalculatedField>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "context"?: EventsContext;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": LogsStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "extractions"?: Array<EventsDataExtraction>;
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
  "sort"?: LogsStreamQuery20270101Sort;
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
    calculatedFields: {
      baseName: "calculated_fields",
      type: "Array<EventsCalculatedField>",
    },
    context: {
      baseName: "context",
      type: "EventsContext",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "LogsStreamQueryDataSource",
      required: true,
    },
    extractions: {
      baseName: "extractions",
      type: "Array<EventsDataExtraction>",
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
      type: "LogsStreamQuery20270101Sort",
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
    return LogsStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
