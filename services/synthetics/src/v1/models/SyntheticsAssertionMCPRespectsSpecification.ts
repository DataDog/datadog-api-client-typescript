import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAssertionMCPRespectsSpecificationType } from "./SyntheticsAssertionMCPRespectsSpecificationType";

/**
 * An assertion that verifies the MCP server response respects the MCP specification.
 */
export class SyntheticsAssertionMCPRespectsSpecification {
  /**
   * Type of the assertion.
   */
  "type": SyntheticsAssertionMCPRespectsSpecificationType;
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
      type: "SyntheticsAssertionMCPRespectsSpecificationType",
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
    return SyntheticsAssertionMCPRespectsSpecification.attributeTypeMap;
  }

  public constructor() {}
}
