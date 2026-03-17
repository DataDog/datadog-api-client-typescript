import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryResponseData } from "./QueryResponseData";

/**
 * Response containing the query results with matched records and total count.
 */
export class QueryResponse {
  /**
   * The data object containing the resource type and attributes of the query response.
   */
  "data"?: QueryResponseData;
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
      type: "QueryResponseData",
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
    return QueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
