import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a watermarked widget recovered from an image.
 */
export class StegadographyWidgetAttributes {
  /**
   * Horizontal pixel coordinate where the watermark was found in the image.
   */
  "locationx": number;
  /**
   * Vertical pixel coordinate where the watermark was found in the image.
   */
  "locationy": number;
  /**
   * JSON-encoded string representing the widget state.
   */
  "rawData": string;
  /**
   * Hex-encoded watermark string identifying the widget.
   */
  "watermark": string;
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
    locationx: {
      baseName: "locationx",
      type: "number",
      required: true,
      format: "int64",
    },
    locationy: {
      baseName: "locationy",
      type: "number",
      required: true,
      format: "int64",
    },
    rawData: {
      baseName: "rawData",
      type: "string",
      required: true,
    },
    watermark: {
      baseName: "watermark",
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
    return StegadographyWidgetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
