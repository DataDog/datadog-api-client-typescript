/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsCalculatedField } from "./EventsCalculatedField";
import { LogsTransactionCompute } from "./LogsTransactionCompute";
import { LogsTransactionStreamQuery20270101Sort } from "./LogsTransactionStreamQuery20270101Sort";
import { LogsTransactionStreamQueryDataSource } from "./LogsTransactionStreamQueryDataSource";
import { LogsTransactionStreamQueryVersion } from "./LogsTransactionStreamQueryVersion";
import { StorageType } from "./StorageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsTransactionStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "calculatedFields"?: Array<EventsCalculatedField>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute"?: Array<LogsTransactionCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": LogsTransactionStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "endQueryString"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<any>;
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
  "sort"?: LogsTransactionStreamQuery20270101Sort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "startQueryString"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "version"?: LogsTransactionStreamQueryVersion;

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
      type: "Array<LogsTransactionCompute>",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "LogsTransactionStreamQueryDataSource",
      required: true,
    },
    endQueryString: {
      baseName: "end_query_string",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<any>",
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
      type: "LogsTransactionStreamQuery20270101Sort",
    },
    startQueryString: {
      baseName: "start_query_string",
      type: "string",
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
    },
    version: {
      baseName: "version",
      type: "LogsTransactionStreamQueryVersion",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsTransactionStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
