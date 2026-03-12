import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionReferenceTableColumn } from "./MonitorFormulaAndFunctionReferenceTableColumn";
import { MonitorFormulaAndFunctionReferenceTableDataSource } from "./MonitorFormulaAndFunctionReferenceTableDataSource";

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
