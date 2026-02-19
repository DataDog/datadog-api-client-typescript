/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsNetworkAssertionLatencyType } from "./SyntheticsNetworkAssertionLatencyType";
import { SyntheticsNetworkAssertionOperator } from "./SyntheticsNetworkAssertionOperator";
import { SyntheticsNetworkAssertionProperty } from "./SyntheticsNetworkAssertionProperty";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Network latency assertion for a Network Path test.
 */
export class SyntheticsNetworkAssertionLatency {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsNetworkAssertionOperator;
  /**
   * The associated assertion property.
   */
  "property": SyntheticsNetworkAssertionProperty;
  /**
   * Target value in milliseconds.
   */
  "target": number;
  /**
   * Type of the latency assertion.
   */
  "type": SyntheticsNetworkAssertionLatencyType;

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
    property: {
      baseName: "property",
      type: "SyntheticsNetworkAssertionProperty",
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
      type: "SyntheticsNetworkAssertionLatencyType",
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
    return SyntheticsNetworkAssertionLatency.attributeTypeMap;
  }

  public constructor() {}
}
