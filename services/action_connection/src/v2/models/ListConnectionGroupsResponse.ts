import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectionGroupDataResponse } from "./ConnectionGroupDataResponse";
import { ListConnectionGroupsResponseMeta } from "./ListConnectionGroupsResponseMeta";

/**
 * Response for listing connection groups.
 */
export class ListConnectionGroupsResponse {
  /**
   * An array of connection groups.
   */
  "data": Array<ConnectionGroupDataResponse>;
  /**
   * Metadata for the list connection groups response.
   */
  "meta"?: ListConnectionGroupsResponseMeta;
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
      type: "Array<ConnectionGroupDataResponse>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListConnectionGroupsResponseMeta",
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
    return ListConnectionGroupsResponse.attributeTypeMap;
  }

  public constructor() {}
}
