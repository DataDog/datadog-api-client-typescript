import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsExecutionType } from "./ProductAnalyticsExecutionType";
import { ProductAnalyticsSampling } from "./ProductAnalyticsSampling";
import { ProductAnalyticsSankeyDefinition } from "./ProductAnalyticsSankeyDefinition";
import { ProductAnalyticsSankeySearch } from "./ProductAnalyticsSankeySearch";
import { ProductAnalyticsSankeyTime } from "./ProductAnalyticsSankeyTime";

/**
 * Attributes for a Sankey request.
 */
export class ProductAnalyticsSankeyRequestAttributes {
  /**
   * The data source for the Sankey query.
   */
  "dataSource": string;
  /**
   * Sankey visualization definition. Set either `source` or `target`, not both.
   * Use `source` for forward flow (where do users go after this page?) or
   * `target` for backward flow (where did users come from?).
   */
  "definition": ProductAnalyticsSankeyDefinition;
  /**
   * Override the query execution strategy.
   */
  "enforcedExecutionType"?: ProductAnalyticsExecutionType;
  "requestId"?: string;
  /**
   * Sampling configuration.
   */
  "sampling"?: ProductAnalyticsSampling;
  /**
   * Search parameters for a Sankey query.
   */
  "search": ProductAnalyticsSankeySearch;
  /**
   * Time range for the Sankey query.
   */
  "time": ProductAnalyticsSankeyTime;
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
    dataSource: {
      baseName: "data_source",
      type: "string",
      required: true,
    },
    definition: {
      baseName: "definition",
      type: "ProductAnalyticsSankeyDefinition",
      required: true,
    },
    enforcedExecutionType: {
      baseName: "enforced_execution_type",
      type: "ProductAnalyticsExecutionType",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    sampling: {
      baseName: "sampling",
      type: "ProductAnalyticsSampling",
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsSankeySearch",
      required: true,
    },
    time: {
      baseName: "time",
      type: "ProductAnalyticsSankeyTime",
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
    return ProductAnalyticsSankeyRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
