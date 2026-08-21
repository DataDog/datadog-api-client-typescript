import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsGraphQueryGroupBy } from "./ProductAnalyticsGraphQueryGroupBy";
import { ProductAnalyticsJourneyComputedColumn } from "./ProductAnalyticsJourneyComputedColumn";
import { ProductAnalyticsJourneyConversionType } from "./ProductAnalyticsJourneyConversionType";
import { ProductAnalyticsJourneyListSort } from "./ProductAnalyticsJourneyListSort";
import { ProductAnalyticsJourneySearch } from "./ProductAnalyticsJourneySearch";
import { ProductAnalyticsJourneyTarget } from "./ProductAnalyticsJourneyTarget";

/**
 * Query definition for a journey list request.
 */
export class ProductAnalyticsJourneyListQuery {
  /**
   * Computed columns to add to each row.
   */
  "computedColumns"?: Array<ProductAnalyticsJourneyComputedColumn>;
  /**
   * Whether to return the entities that converted at the target step, or those that dropped off.
   */
  "conversionType"?: ProductAnalyticsJourneyConversionType;
  /**
   * Attribute columns to return for each row, in addition to the identity join key and `timestamp`.
   */
  "entityColumns"?: Array<string>;
  /**
   * Additional search query applied to the returned rows.
   */
  "entityFilters"?: string;
  /**
   * Segments the results by the values of one or more facets.
   */
  "groupBy"?: Array<ProductAnalyticsGraphQueryGroupBy>;
  /**
   * Maximum number of rows to return. Omit it to let the service choose.
   */
  "limit"?: number;
  /**
   * Defines the steps of the journey and the filters applied to it.
   */
  "search": ProductAnalyticsJourneySearch;
  /**
   * Sort configuration for the returned rows. The sort is applied only when `facet`
   * is one of the returned columns; otherwise it is ignored.
   */
  "sort"?: ProductAnalyticsJourneyListSort;
  /**
   * A reference to a step, or a range of steps, in the journey.
   * Use a `node` target to name a single step, or a `path` target to name the range
   * between two steps.
   */
  "target"?: ProductAnalyticsJourneyTarget;
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
    computedColumns: {
      baseName: "computed_columns",
      type: "Array<ProductAnalyticsJourneyComputedColumn>",
    },
    conversionType: {
      baseName: "conversion_type",
      type: "ProductAnalyticsJourneyConversionType",
    },
    entityColumns: {
      baseName: "entity_columns",
      type: "Array<string>",
    },
    entityFilters: {
      baseName: "entity_filters",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsGraphQueryGroupBy>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsJourneySearch",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ProductAnalyticsJourneyListSort",
    },
    target: {
      baseName: "target",
      type: "ProductAnalyticsJourneyTarget",
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
    return ProductAnalyticsJourneyListQuery.attributeTypeMap;
  }

  public constructor() {}
}
