/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsCalculatedField } from "./EventsCalculatedField";
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { StorageType } from "./StorageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
