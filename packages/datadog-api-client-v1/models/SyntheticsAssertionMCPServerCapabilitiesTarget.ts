/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionMCPServerCapabilitiesType } from "./SyntheticsAssertionMCPServerCapabilitiesType";
import { SyntheticsAssertionOperator } from "./SyntheticsAssertionOperator";
import { SyntheticsMCPServerCapability } from "./SyntheticsMCPServerCapability";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An assertion that checks that an MCP server advertises the expected capabilities.
 */
export class SyntheticsAssertionMCPServerCapabilitiesTarget {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsAssertionOperator;
  /**
   * List of MCP server capabilities to assert against.
   */
  "target": Array<SyntheticsMCPServerCapability>;
  /**
   * Type of the assertion.
   */
  "type": SyntheticsAssertionMCPServerCapabilitiesType;

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
      type: "SyntheticsAssertionOperator",
      required: true,
    },
    target: {
      baseName: "target",
      type: "Array<SyntheticsMCPServerCapability>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsAssertionMCPServerCapabilitiesType",
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
    return SyntheticsAssertionMCPServerCapabilitiesTarget.attributeTypeMap;
  }

  public constructor() {}
}
