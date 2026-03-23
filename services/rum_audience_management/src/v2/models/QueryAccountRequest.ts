import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryAccountRequestData } from "./QueryAccountRequestData";

/**
 * Request body for querying accounts with optional filtering, column selection, and sorting.
 */
export class QueryAccountRequest {
  /**
   * The data object containing the resource type and attributes for querying accounts.
   */
  "data"?: QueryAccountRequestData;
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
      type: "QueryAccountRequestData",
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
    return QueryAccountRequest.attributeTypeMap;
  }

  public constructor() {}
}
