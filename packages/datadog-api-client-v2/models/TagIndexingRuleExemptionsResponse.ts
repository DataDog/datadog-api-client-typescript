/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricPaginationMeta } from "./MetricPaginationMeta";
import { MetricsListResponseLinks } from "./MetricsListResponseLinks";
import { TagIndexingRuleExemptionData } from "./TagIndexingRuleExemptionData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
