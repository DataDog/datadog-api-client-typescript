import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Bounding box of an element on the page.
 */
export class SyntheticsTestResultBounds {
  /**
   * Height in pixels.
   */
  "height"?: number;
  /**
   * Width in pixels.
   */
  "width"?: number;
  /**
   * Horizontal position in pixels.
   */
  "x"?: number;
  /**
   * Vertical position in pixels.
   */
  "y"?: number;
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
      format: "int64",
    },
    width: {
      baseName: "width",
      type: "number",
      format: "int64",
    },
    x: {
      baseName: "x",
      type: "number",
      format: "int64",
    },
    y: {
      baseName: "y",
      type: "number",
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
    return SyntheticsTestResultBounds.attributeTypeMap;
  }

  public constructor() {}
}
