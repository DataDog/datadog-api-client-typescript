/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnalysisViolation } from "./AnalysisViolation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The result of applying a single static analysis rule to the analyzed source code.
 */
export class AnalysisRuleResponse {
  /**
   * A list of error messages encountered while executing the rule.
   */
  "errors": Array<string>;
  /**
   * An error message if the rule execution failed, or null if execution succeeded.
   */
  "executionError": string | null;
  /**
   * The time taken to execute the rule, in milliseconds.
   */
  "executionTimeMs": number;
  /**
   * The identifier of the rule that produced this response.
   */
  "identifier": string;
  /**
   * The raw output produced by the rule engine during execution.
   */
  "output": string;
  /**
   * The list of violations found by this rule.
   */
  "violations": Array<AnalysisViolation>;

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
    errors: {
      baseName: "errors",
      type: "Array<string>",
      required: true,
    },
    executionError: {
      baseName: "execution_error",
      type: "string",
      required: true,
    },
    executionTimeMs: {
      baseName: "execution_time_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    identifier: {
      baseName: "identifier",
      type: "string",
      required: true,
    },
    output: {
      baseName: "output",
      type: "string",
      required: true,
    },
    violations: {
      baseName: "violations",
      type: "Array<AnalysisViolation>",
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
    return AnalysisRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
