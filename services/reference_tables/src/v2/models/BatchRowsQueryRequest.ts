import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BatchRowsQueryRequestData } from "./BatchRowsQueryRequestData";

/**
 * Request object for querying multiple rows from a reference table by their identifiers.
 */
export class BatchRowsQueryRequest {
  /**
   * Data object for a batch rows query request.
   */
  "data"?: BatchRowsQueryRequestData;
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
      type: "BatchRowsQueryRequestData",
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
    return BatchRowsQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
