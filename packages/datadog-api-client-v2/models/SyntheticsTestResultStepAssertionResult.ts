/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Assertion result for a browser or mobile step.
 */
export class SyntheticsTestResultStepAssertionResult {
  /**
   * Actual value observed during the step assertion. Its type depends on the check type.
   */
  "actual"?: any;
  /**
   * Type of the step assertion check.
   */
  "checkType"?: string;
  /**
   * Expected value for the step assertion. Its type depends on the check type.
   */
  "expected"?: any;
  /**
   * Whether the assertion involves secure variables.
   */
  "hasSecureVariables"?: boolean;

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
    actual: {
      baseName: "actual",
      type: "any",
    },
    checkType: {
      baseName: "check_type",
      type: "string",
    },
    expected: {
      baseName: "expected",
      type: "any",
    },
    hasSecureVariables: {
      baseName: "has_secure_variables",
      type: "boolean",
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
    return SyntheticsTestResultStepAssertionResult.attributeTypeMap;
  }

  public constructor() {}
}
