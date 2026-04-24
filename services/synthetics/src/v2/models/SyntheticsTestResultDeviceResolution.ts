import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Screen resolution of the device used to run the test.
 */
export class SyntheticsTestResultDeviceResolution {
  /**
   * Viewport height in pixels.
   */
  "height"?: number;
  /**
   * Device pixel ratio.
   */
  "pixelRatio"?: number;
  /**
   * Viewport width in pixels.
   */
  "width"?: number;
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
    pixelRatio: {
      baseName: "pixel_ratio",
      type: "number",
      format: "double",
    },
    width: {
      baseName: "width",
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
    return SyntheticsTestResultDeviceResolution.attributeTypeMap;
  }

  public constructor() {}
}
