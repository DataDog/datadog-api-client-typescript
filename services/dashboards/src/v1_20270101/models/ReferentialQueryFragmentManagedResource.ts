import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReferentialQueryFragmentManagedResourceDataSource } from "./ReferentialQueryFragmentManagedResourceDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ReferentialQueryFragmentManagedResource {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ReferentialQueryFragmentManagedResourceDataSource;
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
      type: "ReferentialQueryFragmentManagedResourceDataSource",
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
    return ReferentialQueryFragmentManagedResource.attributeTypeMap;
  }

  public constructor() {}
}
