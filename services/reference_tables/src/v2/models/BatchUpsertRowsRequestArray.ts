import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BatchUpsertRowsRequestData } from "./BatchUpsertRowsRequestData";

/**
 * The request body for creating or updating multiple rows into a reference table.
 */
export class BatchUpsertRowsRequestArray {
  "data": Array<BatchUpsertRowsRequestData>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<BatchUpsertRowsRequestData>",
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
    return BatchUpsertRowsRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
