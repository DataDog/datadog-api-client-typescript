import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AdvancedQueryDataType } from "./AdvancedQueryDataType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatasetColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": AdvancedQueryDataType;
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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AdvancedQueryDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatasetColumn.attributeTypeMap;
  }

  public constructor() {}
}
