import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Canvas coordinates and dimensions for an annotation on the workflow canvas.
 */
export class AnnotationDisplayBounds {
  /**
   * The annotation's height on the canvas.
   */
  "height"?: number;
  /**
   * The annotation's width on the canvas.
   */
  "width"?: number;
  /**
   * The annotation's horizontal canvas coordinate.
   */
  "x"?: number;
  /**
   * The annotation's vertical canvas coordinate.
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
      format: "double",
    },
    width: {
      baseName: "width",
      type: "number",
      format: "double",
    },
    x: {
      baseName: "x",
      type: "number",
      format: "double",
    },
    y: {
      baseName: "y",
      type: "number",
      format: "double",
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
    return AnnotationDisplayBounds.attributeTypeMap;
  }

  public constructor() {}
}
