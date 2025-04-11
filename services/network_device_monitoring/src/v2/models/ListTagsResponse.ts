import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListTagsResponseData } from "./ListTagsResponseData";

/**
 * List tags response.
 */
export class ListTagsResponse {
  /**
   * The list tags response data.
   */
  "data"?: ListTagsResponseData;
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
      type: "ListTagsResponseData",
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
    return ListTagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
