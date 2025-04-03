import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Powerpack inner widget layout.
 */
export class PowerpackInnerWidgetLayout {
  /**
   * The height of the widget. Should be a non-negative integer.
   */
  "height": number;
  /**
   * The width of the widget. Should be a non-negative integer.
   */
  "width": number;
  /**
   * The position of the widget on the x (horizontal) axis. Should be a non-negative integer.
   */
  "x": number;
  /**
   * The position of the widget on the y (vertical) axis. Should be a non-negative integer.
   */
  "y": number;
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
    height: {
      baseName: "height",
      type: "number",
      required: true,
      format: "int64",
    },
    width: {
      baseName: "width",
      type: "number",
      required: true,
      format: "int64",
    },
    x: {
      baseName: "x",
      type: "number",
      required: true,
      format: "int64",
    },
    y: {
      baseName: "y",
      type: "number",
      required: true,
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackInnerWidgetLayout.attributeTypeMap;
  }

  public constructor() {}
}
