import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardWidgetValidationResult } from "./DashboardWidgetValidationResult";

/**
 * Ordered validation results corresponding to the requested widgets.
 */
export class DashboardWidgetValidationResponse {
  /**
   * Validation results in the same order as the requested widgets.
   */
  "results": Array<DashboardWidgetValidationResult>;
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
    results: {
      baseName: "results",
      type: "Array<DashboardWidgetValidationResult>",
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
    return DashboardWidgetValidationResponse.attributeTypeMap;
  }

  public constructor() {}
}
