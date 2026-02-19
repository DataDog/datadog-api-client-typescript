/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsNetworkAssertionOperator } from "./SyntheticsNetworkAssertionOperator";
import { SyntheticsNetworkAssertionPacketLossPercentageType } from "./SyntheticsNetworkAssertionPacketLossPercentageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
