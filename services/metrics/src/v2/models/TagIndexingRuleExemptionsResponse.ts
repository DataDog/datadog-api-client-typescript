import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricPaginationMeta } from "./MetricPaginationMeta";
import { MetricsListResponseLinks } from "./MetricsListResponseLinks";
import { TagIndexingRuleExemptionData } from "./TagIndexingRuleExemptionData";

/**
 * Response containing a page of tag indexing rule exemptions.
 */
export class TagIndexingRuleExemptionsResponse {
  /**
   * Array of tag indexing rule exemption objects.
   */
  "data"?: Array<TagIndexingRuleExemptionData>;
  /**
   * Pagination links. Only present if pagination query parameters were provided.
   */
  "links"?: MetricsListResponseLinks;
  /**
   * Response metadata object.
   */
  "meta"?: MetricPaginationMeta;
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
      type: "Array<TagIndexingRuleExemptionData>",
    },
    links: {
      baseName: "links",
      type: "MetricsListResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "MetricPaginationMeta",
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
    return TagIndexingRuleExemptionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
