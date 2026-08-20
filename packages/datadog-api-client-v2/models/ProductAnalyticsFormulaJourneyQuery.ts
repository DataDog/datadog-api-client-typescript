/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsGraphQueryCompute } from "./ProductAnalyticsGraphQueryCompute";
import { ProductAnalyticsGraphQueryGroupBy } from "./ProductAnalyticsGraphQueryGroupBy";
import { ProductAnalyticsJourneySearch } from "./ProductAnalyticsJourneySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query definition for a journey timeseries request.
 */
export class ProductAnalyticsFormulaJourneyQuery {
  /**
   * Defines the metric computed over the journey.
   */
  "compute": ProductAnalyticsGraphQueryCompute;
  /**
   * Segments the results by the values of one or more facets.
   */
  "groupBy"?: Array<ProductAnalyticsGraphQueryGroupBy>;
  /**
   * Caller-defined identifier echoed back in the results.
   */
  "queryId"?: string;
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
      type: "ProductAnalyticsGraphQueryCompute",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsGraphQueryGroupBy>",
    },
    queryId: {
      baseName: "query_id",
      type: "string",
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
    return ProductAnalyticsFormulaJourneyQuery.attributeTypeMap;
  }

  public constructor() {}
}
