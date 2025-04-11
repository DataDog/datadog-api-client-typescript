import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestConfig } from "./SyntheticsTestConfig";

/**
 * Object describing the API test configuration.
 */
export class SyntheticsAPITestResultFullCheck {
  /**
   * Configuration object for a Synthetic test.
   */
  "config": SyntheticsTestConfig;
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
    config: {
      baseName: "config",
      type: "SyntheticsTestConfig",
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
    return SyntheticsAPITestResultFullCheck.attributeTypeMap;
  }

  public constructor() {}
}
