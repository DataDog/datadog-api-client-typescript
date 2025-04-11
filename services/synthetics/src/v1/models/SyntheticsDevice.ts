import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing the device used to perform the Synthetic test.
 */
export class SyntheticsDevice {
  /**
   * Screen height of the device.
   */
  "height": number;
  /**
   * The device ID.
   */
  "id": string;
  /**
   * Whether or not the device is a mobile.
   */
  "isMobile"?: boolean;
  /**
   * The device name.
   */
  "name": string;
  /**
   * Screen width of the device.
   */
  "width": number;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    isMobile: {
      baseName: "isMobile",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    width: {
      baseName: "width",
      type: "number",
      required: true,
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
    return SyntheticsDevice.attributeTypeMap;
  }

  public constructor() {}
}
