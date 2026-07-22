import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BatchRowsQueryResponseData } from "./BatchRowsQueryResponseData";
import { TableRowResourceData } from "./TableRowResourceData";

/**
 * Response object for a batch rows query against a reference table.
 */
export class BatchRowsQueryResponse {
  /**
   * Data object for a batch rows query response.
   */
  "data"?: BatchRowsQueryResponseData;
  /**
   * Full row resources matching the query, included alongside the relationship references in `data`.
   */
  "included"?: Array<TableRowResourceData>;
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
    data: {
      baseName: "data",
      type: "BatchRowsQueryResponseData",
    },
    included: {
      baseName: "included",
      type: "Array<TableRowResourceData>",
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
    return BatchRowsQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
