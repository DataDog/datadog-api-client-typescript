import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AdvancedEventPlatformSource } from "./AdvancedEventPlatformSource";
import { DatasetColumn } from "./DatasetColumn";
import { EventPlatformDatasetDefinitionSearch } from "./EventPlatformDatasetDefinitionSearch";
import { StorageType } from "./StorageType";
import { TimeWindow } from "./TimeWindow";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventPlatformDatasetDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DatasetColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": AdvancedEventPlatformSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search"?: EventPlatformDatasetDefinitionSearch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeWindow"?: TimeWindow;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<DatasetColumn>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "AdvancedEventPlatformSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "EventPlatformDatasetDefinitionSearch",
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
    },
    timeWindow: {
      baseName: "time_window",
      type: "TimeWindow",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventPlatformDatasetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
