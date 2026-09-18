import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Validation result for one dashboard widget.
 */
export class DashboardWidgetValidationResult {
  /**
   * Validation error message, when the widget is invalid.
   */
  "errorMessage": string | null;
  /**
   * Path to the invalid value, when available.
   */
  "errorPath": string | null;
  /**
   * Whether the widget passed validation.
   */
  "isValid": boolean;
  /**
   * Type of the validated widget, when available.
   */
  "widgetType": string | null;
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
    errorMessage: {
      baseName: "error_message",
      type: "string",
      required: true,
    },
    errorPath: {
      baseName: "error_path",
      type: "string",
      required: true,
    },
    isValid: {
      baseName: "is_valid",
      type: "boolean",
      required: true,
    },
    widgetType: {
      baseName: "widget_type",
      type: "string",
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
    return DashboardWidgetValidationResult.attributeTypeMap;
  }

  public constructor() {}
}
