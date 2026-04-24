import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Browser information for the device used to run the test.
 */
export class SyntheticsTestResultDeviceBrowser {
  /**
   * Browser type (for example, `chrome`, `firefox`).
   */
  "type"?: string;
  /**
   * User agent string reported by the browser.
   */
  "userAgent"?: string;
  /**
   * Browser version.
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
    type: {
      baseName: "type",
      type: "string",
    },
    userAgent: {
      baseName: "user_agent",
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
    return SyntheticsTestResultDeviceBrowser.attributeTypeMap;
  }

  public constructor() {}
}
