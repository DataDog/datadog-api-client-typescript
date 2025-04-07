import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The proxy to perform the test.
 */
export class SyntheticsTestRequestProxy {
  /**
   * Headers to include when performing the test.
   */
  "headers"?: any;
  /**
   * URL of the proxy to perform the test.
   */
  "url": string;
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
    headers: {
      baseName: "headers",
      type: "any",
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
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
    return SyntheticsTestRequestProxy.attributeTypeMap;
  }

  public constructor() {}
}
