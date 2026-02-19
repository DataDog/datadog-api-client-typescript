import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkAssertionJitterType } from "./SyntheticsNetworkAssertionJitterType";
import { SyntheticsNetworkAssertionOperator } from "./SyntheticsNetworkAssertionOperator";

/**
 * Jitter assertion for a Network Path test.
 */
export class SyntheticsNetworkAssertionJitter {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsNetworkAssertionOperator;
  /**
   * Target value in milliseconds.
   */
  "target": number;
  /**
   * Type of the jitter assertion.
   */
  "type": SyntheticsNetworkAssertionJitterType;
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
    operator: {
      baseName: "operator",
      type: "SyntheticsNetworkAssertionOperator",
      required: true,
    },
    target: {
      baseName: "target",
      type: "number",
      required: true,
      format: "double",
    },
    type: {
      baseName: "type",
      type: "SyntheticsNetworkAssertionJitterType",
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
    return SyntheticsNetworkAssertionJitter.attributeTypeMap;
  }

  public constructor() {}
}
