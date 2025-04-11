import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchSLOResponseDataAttributes } from "./SearchSLOResponseDataAttributes";

/**
 * Data from search SLO response.
 */
export class SearchSLOResponseData {
  /**
   * Attributes
   */
  "attributes"?: SearchSLOResponseDataAttributes;
  /**
   * Type of service level objective result.
   */
  "type"?: string;
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
    attributes: {
      baseName: "attributes",
      type: "SearchSLOResponseDataAttributes",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SearchSLOResponseData.attributeTypeMap;
  }

  public constructor() {}
}
