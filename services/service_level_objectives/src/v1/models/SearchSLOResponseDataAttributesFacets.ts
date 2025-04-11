import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchSLOResponseDataAttributesFacetsObjectInt } from "./SearchSLOResponseDataAttributesFacetsObjectInt";
import { SearchSLOResponseDataAttributesFacetsObjectString } from "./SearchSLOResponseDataAttributesFacetsObjectString";

/**
 * Facets
 */
export class SearchSLOResponseDataAttributesFacets {
  /**
   * All tags associated with an SLO.
   */
  "allTags"?: Array<SearchSLOResponseDataAttributesFacetsObjectString>;
  /**
   * Creator of an SLO.
   */
  "creatorName"?: Array<SearchSLOResponseDataAttributesFacetsObjectString>;
  /**
   * Tags with the `env` tag key.
   */
  "envTags"?: Array<SearchSLOResponseDataAttributesFacetsObjectString>;
  /**
   * Tags with the `service` tag key.
   */
  "serviceTags"?: Array<SearchSLOResponseDataAttributesFacetsObjectString>;
  /**
   * Type of SLO.
   */
  "sloType"?: Array<SearchSLOResponseDataAttributesFacetsObjectInt>;
  /**
   * SLO Target
   */
  "target"?: Array<SearchSLOResponseDataAttributesFacetsObjectInt>;
  /**
   * Tags with the `team` tag key.
   */
  "teamTags"?: Array<SearchSLOResponseDataAttributesFacetsObjectString>;
  /**
   * Timeframes of SLOs.
   */
  "timeframe"?: Array<SearchSLOResponseDataAttributesFacetsObjectString>;
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
    allTags: {
      baseName: "all_tags",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    creatorName: {
      baseName: "creator_name",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    envTags: {
      baseName: "env_tags",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    serviceTags: {
      baseName: "service_tags",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    sloType: {
      baseName: "slo_type",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectInt>",
    },
    target: {
      baseName: "target",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectInt>",
    },
    teamTags: {
      baseName: "team_tags",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    timeframe: {
      baseName: "timeframe",
      type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
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
    return SearchSLOResponseDataAttributesFacets.attributeTypeMap;
  }

  public constructor() {}
}
