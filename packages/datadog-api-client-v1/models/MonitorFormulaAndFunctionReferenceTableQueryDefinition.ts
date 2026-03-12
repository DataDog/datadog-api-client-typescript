/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionReferenceTableColumn } from "./MonitorFormulaAndFunctionReferenceTableColumn";
import { MonitorFormulaAndFunctionReferenceTableDataSource } from "./MonitorFormulaAndFunctionReferenceTableDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A reference table query for use in aggregate queries.
 */
export class MonitorFormulaAndFunctionReferenceTableQueryDefinition {
  /**
   * List of columns to retrieve from the reference table.
   */
  "columns"?: Array<MonitorFormulaAndFunctionReferenceTableColumn>;
  /**
   * Data source for reference table queries.
   */
  "dataSource": MonitorFormulaAndFunctionReferenceTableDataSource;
  /**
   * Name of the query.
   */
  "name"?: string;
  /**
   * Optional filter expression for the reference table query.
   */
  "queryFilter"?: string;
  /**
   * Name of the reference table.
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
    columns: {
      baseName: "columns",
      type: "Array<MonitorFormulaAndFunctionReferenceTableColumn>",
    },
    dataSource: {
      baseName: "data_source",
      type: "MonitorFormulaAndFunctionReferenceTableDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
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
    return MonitorFormulaAndFunctionReferenceTableQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
