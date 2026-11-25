import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReferentialQueryFragmentReferenceTableDataSource } from "./ReferentialQueryFragmentReferenceTableDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ReferentialQueryFragmentReferenceTable {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ReferentialQueryFragmentReferenceTableDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
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
    alias: {
      baseName: "alias",
      type: "string",
    },
    dataSource: {
      baseName: "data_source",
      type: "ReferentialQueryFragmentReferenceTableDataSource",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return ReferentialQueryFragmentReferenceTable.attributeTypeMap;
  }

  public constructor() {}
}
