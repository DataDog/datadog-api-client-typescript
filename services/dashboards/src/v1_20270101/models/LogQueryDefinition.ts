import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsCalculatedField } from "./EventsCalculatedField";
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { StorageType } from "./StorageType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogQueryDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "calculatedFields"?: Array<EventsCalculatedField>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute"?: LogsQueryCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<LogQueryDefinitionGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "index"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "multiCompute"?: Array<LogsQueryCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search"?: LogQueryDefinitionSearch;
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
    compute: {
      baseName: "compute",
      type: "LogsQueryCompute",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogQueryDefinitionGroupBy>",
    },
    index: {
      baseName: "index",
      type: "string",
    },
    multiCompute: {
      baseName: "multi_compute",
      type: "Array<LogsQueryCompute>",
    },
    search: {
      baseName: "search",
      type: "LogQueryDefinitionSearch",
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
    return LogQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
