import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchSLOResponseData } from "./SearchSLOResponseData";
import { SearchSLOResponseLinks } from "./SearchSLOResponseLinks";
import { SearchSLOResponseMeta } from "./SearchSLOResponseMeta";

/**
 * A search SLO response containing results from the search query.
 */
export class SearchSLOResponse {
  /**
   * Data from search SLO response.
   */
  "data"?: SearchSLOResponseData;
  /**
   * Pagination links.
   */
  "links"?: SearchSLOResponseLinks;
  /**
   * Searches metadata returned by the API.
   */
  "meta"?: SearchSLOResponseMeta;
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
      type: "SearchSLOResponseData",
    },
    links: {
      baseName: "links",
      type: "SearchSLOResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "SearchSLOResponseMeta",
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
    return SearchSLOResponse.attributeTypeMap;
  }

  public constructor() {}
}
