import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardSearchAttributes } from "./DashboardSearchAttributes";
import { DashboardSearchMetadata } from "./DashboardSearchMetadata";
import { MetricDashboardType } from "./MetricDashboardType";

/**
 * A dashboard search result.
 */
export class DashboardSearchResultData {
  /**
   * Dashboard search result attributes.
   */
  "attributes": DashboardSearchAttributes;
  /**
   * Dashboard identifier.
   */
  "id": string;
  /**
   * Metadata about the dashboard.
   */
  "meta": DashboardSearchMetadata;
  /**
   * Dashboard resource type.
   */
  "type": MetricDashboardType;
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
    attributes: {
      baseName: "attributes",
      type: "DashboardSearchAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "DashboardSearchMetadata",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricDashboardType",
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
    return DashboardSearchResultData.attributeTypeMap;
  }

  public constructor() {}
}
