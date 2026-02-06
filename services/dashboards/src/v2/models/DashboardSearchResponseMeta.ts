import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardSearchAggregations } from "./DashboardSearchAggregations";

/**
 * Metadata about the dashboard search results.
 */
export class DashboardSearchResponseMeta {
  /**
   * Aggregations of dashboard search results.
   */
  "aggregations"?: DashboardSearchAggregations;
  /**
   * Total number of dashboards found.
   */
  "total": number;
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
    aggregations: {
      baseName: "aggregations",
      type: "DashboardSearchAggregations",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return DashboardSearchResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
