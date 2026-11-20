import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetSortField } from "./DatasetSortField";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatasetListQuerySort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fields": Array<DatasetSortField>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fields: {
      baseName: "fields",
      type: "Array<DatasetSortField>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatasetListQuerySort.attributeTypeMap;
  }

  public constructor() {}
}
