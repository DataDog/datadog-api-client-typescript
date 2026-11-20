import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LegacyFormulaBackedDataProjectionSource } from "./LegacyFormulaBackedDataProjectionSource";
import { StorageType } from "./StorageType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsPlatformDataProjectionQueryDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": LegacyFormulaBackedDataProjectionSource;
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
  "storage"?: StorageType;
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
      type: "LegacyFormulaBackedDataProjectionSource",
      required: true,
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
    storage: {
      baseName: "storage",
      type: "StorageType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsPlatformDataProjectionQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
