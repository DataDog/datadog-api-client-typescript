import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardUsageAttributes } from "./DashboardUsageAttributes";
import { DashboardUsageType } from "./DashboardUsageType";

/**
 * A single dashboard usage record.
 */
export class DashboardUsage {
  /**
   * Usage statistics for a dashboard. The `viewer` field and all view-count fields (`total_views`, `viewed_at`, `total_views_by_type`) are populated only when Real User Monitoring (RUM) is active for the org.
   */
  "attributes": DashboardUsageAttributes;
  /**
   * The dashboard ID.
   */
  "id": string;
  /**
   * The type of the resource. Always `dashboards-usages`.
   */
  "type": DashboardUsageType;
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
      type: "DashboardUsageAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DashboardUsageType",
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
    return DashboardUsage.attributeTypeMap;
  }

  public constructor() {}
}
