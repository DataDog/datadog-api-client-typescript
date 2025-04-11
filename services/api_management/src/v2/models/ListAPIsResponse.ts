import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListAPIsResponseData } from "./ListAPIsResponseData";
import { ListAPIsResponseMeta } from "./ListAPIsResponseMeta";

/**
 * Response for `ListAPIs`.
 */
export class ListAPIsResponse {
  /**
   * List of API items.
   */
  "data"?: Array<ListAPIsResponseData>;
  /**
   * Metadata for `ListAPIsResponse`.
   */
  "meta"?: ListAPIsResponseMeta;
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
      type: "Array<ListAPIsResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "ListAPIsResponseMeta",
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
    return ListAPIsResponse.attributeTypeMap;
  }

  public constructor() {}
}
