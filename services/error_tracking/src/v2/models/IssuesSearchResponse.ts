import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuesSearchResult } from "./IssuesSearchResult";
import { IssuesSearchResultIncluded } from "./IssuesSearchResultIncluded";

/**
 * Search issues response payload.
 */
export class IssuesSearchResponse {
  /**
   * Array of results matching the search query.
   */
  "data"?: Array<IssuesSearchResult>;
  /**
   * Array of resources related to the search results.
   */
  "included"?: Array<IssuesSearchResultIncluded>;
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
      type: "Array<IssuesSearchResult>",
    },
    included: {
      baseName: "included",
      type: "Array<IssuesSearchResultIncluded>",
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
    return IssuesSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
