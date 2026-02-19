/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsNetworkAssertionJitterType } from "./SyntheticsNetworkAssertionJitterType";
import { SyntheticsNetworkAssertionOperator } from "./SyntheticsNetworkAssertionOperator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
