import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompositeReferentialDataQueryComputeItems } from "./CompositeReferentialDataQueryComputeItems";
import { CompositeReferentialDataQueryDataSource } from "./CompositeReferentialDataQueryDataSource";
import { ListColumn } from "./ListColumn";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeReferentialDataQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns"?: Array<ListColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute"?: Array<CompositeReferentialDataQueryComputeItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": CompositeReferentialDataQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<string>;
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
    columns: {
      baseName: "columns",
      type: "Array<ListColumn>",
    },
    compute: {
      baseName: "compute",
      type: "Array<CompositeReferentialDataQueryComputeItems>",
    },
    dataSource: {
      baseName: "data_source",
      type: "CompositeReferentialDataQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
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
    return CompositeReferentialDataQuery.attributeTypeMap;
  }

  public constructor() {}
}
