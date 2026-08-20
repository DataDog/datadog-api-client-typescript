import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsGraphQueryGroupBySource } from "./ProductAnalyticsGraphQueryGroupBySource";
import { ProductAnalyticsGroupBySort } from "./ProductAnalyticsGroupBySort";
import { ProductAnalyticsJourneyTarget } from "./ProductAnalyticsJourneyTarget";

/**
 * Segments journey results by the values of a facet.
 */
export class ProductAnalyticsGraphQueryGroupBy {
  /**
   * Attribute path to group by.
   */
  "facet": string;
  /**
   * Maximum number of groups to return. Omit it to let the service choose.
   */
  "limit"?: number;
  /**
   * Whether to exclude entities that have no value for this facet.
   */
  "shouldExcludeMissing"?: boolean;
  /**
   * Sort configuration for group-by results.
   */
  "sort"?: ProductAnalyticsGroupBySort;
  /**
   * Audience dimension to group by, instead of an event facet.
   */
  "source"?: ProductAnalyticsGraphQueryGroupBySource;
  /**
   * A reference to a step, or a range of steps, in the journey.
   * Use a `node` target to name a single step, or a `path` target to name the range
   * between two steps.
   */
  "target"?: ProductAnalyticsJourneyTarget;
  /**
   * Restricts the results to these facet values.
   */
  "valueFilters"?: Array<string>;
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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    shouldExcludeMissing: {
      baseName: "should_exclude_missing",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "ProductAnalyticsGroupBySort",
    },
    source: {
      baseName: "source",
      type: "ProductAnalyticsGraphQueryGroupBySource",
    },
    target: {
      baseName: "target",
      type: "ProductAnalyticsJourneyTarget",
    },
    valueFilters: {
      baseName: "value_filters",
      type: "Array<string>",
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
    return ProductAnalyticsGraphQueryGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
