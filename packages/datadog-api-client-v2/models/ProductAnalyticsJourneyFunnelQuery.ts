/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsGraphQueryGroupBy } from "./ProductAnalyticsGraphQueryGroupBy";
import { ProductAnalyticsJourneyFunnelCompute } from "./ProductAnalyticsJourneyFunnelCompute";
import { ProductAnalyticsJourneySearch } from "./ProductAnalyticsJourneySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query definition for a journey funnel request.
 */
export class ProductAnalyticsJourneyFunnelQuery {
  /**
   * Defines the metric computed at each funnel step.
   */
  "compute"?: ProductAnalyticsJourneyFunnelCompute;
  /**
   * Segments the funnel by the values of one or more facets.
   */
  "groupBy"?: Array<ProductAnalyticsGraphQueryGroupBy>;
  /**
   * Defines the steps of the journey and the filters applied to it.
   */
  "search": ProductAnalyticsJourneySearch;

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
    compute: {
      baseName: "compute",
      type: "ProductAnalyticsJourneyFunnelCompute",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsGraphQueryGroupBy>",
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsJourneySearch",
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
    return ProductAnalyticsJourneyFunnelQuery.attributeTypeMap;
  }

  public constructor() {}
}
