import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Platform information for the device used to run the test.
 */
export class SyntheticsTestResultDevicePlatform {
  /**
   * Platform name (for example, `linux`, `macos`).
   */
  "name"?: string;
  /**
   * Platform version.
   */
  "version"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return SyntheticsTestResultDevicePlatform.attributeTypeMap;
  }

  public constructor() {}
}
