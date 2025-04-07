import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchServiceLevelObjective } from "./SearchServiceLevelObjective";
import { SearchSLOResponseDataAttributesFacets } from "./SearchSLOResponseDataAttributesFacets";

/**
 * Attributes
 */
export class SearchSLOResponseDataAttributes {
  /**
   * Facets
   */
  "facets"?: SearchSLOResponseDataAttributesFacets;
  /**
   * SLOs
   */
  "slos"?: Array<SearchServiceLevelObjective>;
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
    facets: {
      baseName: "facets",
      type: "SearchSLOResponseDataAttributesFacets",
    },
    slos: {
      baseName: "slos",
      type: "Array<SearchServiceLevelObjective>",
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
    return SearchSLOResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
