import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardGlobalTimeLiveSpan } from "./DashboardGlobalTimeLiveSpan";

/**
 * Object containing the live span selection for the dashboard.
 */
export class DashboardGlobalTime {
  /**
   * Dashboard global time live_span selection
   */
  "liveSpan"?: DashboardGlobalTimeLiveSpan;
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
    liveSpan: {
      baseName: "live_span",
      type: "DashboardGlobalTimeLiveSpan",
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
    return DashboardGlobalTime.attributeTypeMap;
  }

  public constructor() {}
}
