import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a widget recovered from an image watermark.
 */
export class StegadographyWidgetAttributes {
  /**
   * Horizontal pixel coordinate of the watermark within the image.
   */
  "locationx": number;
  /**
   * Vertical pixel coordinate of the watermark within the image.
   */
  "locationy": number;
  /**
   * Stored snapshot of the widget state, returned exactly as it was cached.
   */
  "rawData": string;
  /**
   * The watermark value extracted from the image that this widget was matched against.
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
