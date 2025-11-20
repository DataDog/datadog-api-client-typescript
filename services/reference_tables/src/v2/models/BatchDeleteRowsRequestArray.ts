import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BatchDeleteRowsRequestData } from "./BatchDeleteRowsRequestData";

/**
 * The request body for deleting multiple rows from a reference table.
 */
export class BatchDeleteRowsRequestArray {
  "data": Array<BatchDeleteRowsRequestData>;
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
      type: "Array<BatchDeleteRowsRequestData>",
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
    return BatchDeleteRowsRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
