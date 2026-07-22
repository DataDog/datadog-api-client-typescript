import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricsListResponseLinks } from "./MetricsListResponseLinks";
import { TagIndexingRuleData } from "./TagIndexingRuleData";
import { TagIndexingRulesResponseMeta } from "./TagIndexingRulesResponseMeta";

/**
 * Response containing a page of tag indexing rules.
 */
export class TagIndexingRulesResponse {
  /**
   * Array of tag indexing rule objects.
   */
  "data"?: Array<TagIndexingRuleData>;
  /**
   * Pagination links. Only present if pagination query parameters were provided.
   */
  "links"?: MetricsListResponseLinks;
  /**
   * Pagination metadata for a list of tag indexing rules.
   */
  "meta"?: TagIndexingRulesResponseMeta;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<TagIndexingRuleData>",
    },
    links: {
      baseName: "links",
      type: "MetricsListResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "TagIndexingRulesResponseMeta",
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
    return TagIndexingRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
