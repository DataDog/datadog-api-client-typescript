import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardSummaryDefinition } from "./DashboardSummaryDefinition";

/**
 * Dashboard summary response.
 */
export class DashboardSummary {
  /**
   * List of dashboard definitions.
   */
  "dashboards"?: Array<DashboardSummaryDefinition>;
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
    dashboards: {
      baseName: "dashboards",
      type: "Array<DashboardSummaryDefinition>",
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
    return DashboardSummary.attributeTypeMap;
  }

  public constructor() {}
}
