import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Pagination } from "./Pagination";

/**
 * Object describing meta attributes of response.
 */
export class ResponseMetaAttributes {
  /**
   * Pagination object.
   */
  "page"?: Pagination;
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
    page: {
      baseName: "page",
      type: "Pagination",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ResponseMetaAttributes.attributeTypeMap;
  }

  public constructor() {}
}
