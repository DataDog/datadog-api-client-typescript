/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An individual assertion result from a Synthetic test.
 */
export class SyntheticsTestResultAssertionResult {
  /**
   * Actual value observed during the test. Its type depends on the assertion type.
   */
  "actual"?: any;
  /**
   * Error message if the assertion failed.
   */
  "errorMessage"?: string;
  /**
   * Expected value for the assertion. Its type depends on the assertion type.
   */
  "expected"?: any;
  /**
   * Operator used for the assertion (for example, `is`, `contains`).
   */
  "operator"?: string;
  /**
   * Property targeted by the assertion, when applicable.
   */
  "property"?: string;
  /**
   * Target value for the assertion. Its type depends on the assertion type.
   */
  "target"?: any;
  /**
   * JSON path or XPath evaluated for the assertion.
   */
  "targetPath"?: string;
  /**
   * Operator used for the target path assertion.
   */
  "targetPathOperator"?: string;
  /**
   * Type of the assertion (for example, `responseTime`, `statusCode`, `body`).
   */
  "type"?: string;
  /**
   * Whether the assertion passed.
   */
  "valid"?: boolean;

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
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    expected: {
      baseName: "expected",
      type: "any",
    },
    operator: {
      baseName: "operator",
      type: "string",
    },
    property: {
      baseName: "property",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "any",
    },
    targetPath: {
      baseName: "target_path",
      type: "string",
    },
    targetPathOperator: {
      baseName: "target_path_operator",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    valid: {
      baseName: "valid",
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
    return SyntheticsTestResultAssertionResult.attributeTypeMap;
  }

  public constructor() {}
}
