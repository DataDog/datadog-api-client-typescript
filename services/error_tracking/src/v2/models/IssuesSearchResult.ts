import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuesSearchResultAttributes } from "./IssuesSearchResultAttributes";
import { IssuesSearchResultRelationships } from "./IssuesSearchResultRelationships";
import { IssuesSearchResultType } from "./IssuesSearchResultType";

/**
 * Result matching the search query.
 */
export class IssuesSearchResult {
  /**
   * Object containing the information of a search result.
   */
  "attributes": IssuesSearchResultAttributes;
  /**
   * Search result identifier (matches the nested issue's identifier).
   */
  "id": string;
  /**
   * Relationships between the search result and other resources.
   */
  "relationships"?: IssuesSearchResultRelationships;
  /**
   * Type of the object.
   */
  "type": IssuesSearchResultType;
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
      type: "IssuesSearchResultAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IssuesSearchResultRelationships",
    },
    type: {
      baseName: "type",
      type: "IssuesSearchResultType",
      required: true,
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
    return IssuesSearchResult.attributeTypeMap;
  }

  public constructor() {}
}
