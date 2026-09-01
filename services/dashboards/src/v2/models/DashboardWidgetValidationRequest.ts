import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardWidgetValidationLayoutType } from "./DashboardWidgetValidationLayoutType";
import { DashboardWidgetValidationReflowType } from "./DashboardWidgetValidationReflowType";

/**
 * Request containing dashboard widgets and their layout context.
 */
export class DashboardWidgetValidationRequest {
  /**
   * Layout type used to apply dashboard-specific widget layout validation.
   */
  "layoutType": DashboardWidgetValidationLayoutType;
  /**
   * Reflow behavior used for an ordered dashboard.
   */
  "reflowType"?: DashboardWidgetValidationReflowType;
  /**
   * Dashboard widgets to validate.
   */
  "widgets": Array<{ [key: string]: any }>;
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
    layoutType: {
      baseName: "layout_type",
      type: "DashboardWidgetValidationLayoutType",
      required: true,
    },
    reflowType: {
      baseName: "reflow_type",
      type: "DashboardWidgetValidationReflowType",
    },
    widgets: {
      baseName: "widgets",
      type: "Array<{ [key: string]: any; }>",
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
    return DashboardWidgetValidationRequest.attributeTypeMap;
  }

  public constructor() {}
}
