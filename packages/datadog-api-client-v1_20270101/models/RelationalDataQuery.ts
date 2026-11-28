/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationalDataQueryDataSource } from "./RelationalDataQueryDataSource";
import { RelationalDataQuerySort } from "./RelationalDataQuerySort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RelationalDataQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": RelationalDataQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: RelationalDataQuerySort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tableName": string;

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
      type: "RelationalDataQueryDataSource",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    sort: {
      baseName: "sort",
      type: "RelationalDataQuerySort",
    },
    tableName: {
      baseName: "table_name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationalDataQuery.attributeTypeMap;
  }

  public constructor() {}
}
