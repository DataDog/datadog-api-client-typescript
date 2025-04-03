import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchSLOResponseMetaPage } from "./SearchSLOResponseMetaPage";

/**
 * Searches metadata returned by the API.
 */
export class SearchSLOResponseMeta {
  /**
   * Pagination metadata returned by the API.
   */
  "pagination"?: SearchSLOResponseMetaPage;
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
    pagination: {
      baseName: "pagination",
      type: "SearchSLOResponseMetaPage",
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
    return SearchSLOResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
