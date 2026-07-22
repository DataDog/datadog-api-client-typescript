import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetListQuerySortField } from "./DatasetListQuerySortField";

/**
 * Sort configuration for a `DatasetListQuery`.
 */
export class DatasetListQuerySort {
  /**
   * List of fields to sort the rows by, applied in order.
   */
  "fields": Array<DatasetListQuerySortField>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<DatasetListQuerySortField>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
