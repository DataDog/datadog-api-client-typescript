import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkAssertionOperator } from "./SyntheticsNetworkAssertionOperator";
import { SyntheticsNetworkAssertionPacketLossPercentageType } from "./SyntheticsNetworkAssertionPacketLossPercentageType";

/**
 * Packet loss percentage assertion for a Network Path test.
 */
export class SyntheticsNetworkAssertionPacketLossPercentage {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsNetworkAssertionOperator;
  /**
   * Target value as a percentage (0 to 1).
   */
  "target": number;
  /**
   * Type of the packet loss percentage assertion.
   */
  "type": SyntheticsNetworkAssertionPacketLossPercentageType;
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
      type: "SyntheticsNetworkAssertionPacketLossPercentageType",
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
    return SyntheticsNetworkAssertionPacketLossPercentage.attributeTypeMap;
  }

  public constructor() {}
}
