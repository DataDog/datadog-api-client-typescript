import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoRequestDataAttributesSearch } from "./FacetInfoRequestDataAttributesSearch";
import { FacetInfoRequestDataAttributesTermSearch } from "./FacetInfoRequestDataAttributesTermSearch";

export class FacetInfoRequestDataAttributes {
  "facetId": string;
  "limit": number;
  "search"?: FacetInfoRequestDataAttributesSearch;
  "termSearch"?: FacetInfoRequestDataAttributesTermSearch;
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
    facetId: {
      baseName: "facet_id",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    search: {
      baseName: "search",
      type: "FacetInfoRequestDataAttributesSearch",
    },
    termSearch: {
      baseName: "term_search",
      type: "FacetInfoRequestDataAttributesTermSearch",
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
    return FacetInfoRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
