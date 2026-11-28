/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetCompute } from "./DatasetCompute";
import { DatasetGroupBy } from "./DatasetGroupBy";
import { FormulaReferenceTableQueryDataSource } from "./FormulaReferenceTableQueryDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaReferenceTableQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": Array<DatasetCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaReferenceTableQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<DatasetGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
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
    compute: {
      baseName: "compute",
      type: "Array<DatasetCompute>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaReferenceTableQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<DatasetGroupBy>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
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
    return FormulaReferenceTableQuery.attributeTypeMap;
  }

  public constructor() {}
}
