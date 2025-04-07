import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `AnnotationDisplayBounds` object.
 */
export class AnnotationDisplayBounds {
  /**
   * The `bounds` `height`.
   */
  "height"?: number;
  /**
   * The `bounds` `width`.
   */
  "width"?: number;
  /**
   * The `bounds` `x`.
   */
  "x"?: number;
  /**
   * The `bounds` `y`.
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
      type: "any",
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
