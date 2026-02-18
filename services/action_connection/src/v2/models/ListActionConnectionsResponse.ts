import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectionDataResponse } from "./ConnectionDataResponse";
import { ListActionConnectionsResponseMeta } from "./ListActionConnectionsResponseMeta";

/**
 * Response for listing action connections.
 */
export class ListActionConnectionsResponse {
  /**
   * An array of action connections.
   */
  "data": Array<ConnectionDataResponse>;
  /**
   * Metadata for the list connections response.
   */
  "meta"?: ListActionConnectionsResponseMeta;
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
      type: "Array<ConnectionDataResponse>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListActionConnectionsResponseMeta",
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
    return ListActionConnectionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
