import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about the latest failed test run of the flaky test.
 */
export class FlakyTestRunMetadata {
  /**
   * The duration of the test run in milliseconds.
   */
  "durationMs"?: number;
  /**
   * The error message from the test failure.
   */
  "errorMessage"?: string;
  /**
   * The stack trace from the test failure.
   */
  "errorStack"?: string;
  /**
   * The line number where the test ends in the source file.
   */
  "sourceEnd"?: number;
  /**
   * The source file where the test is defined.
   */
  "sourceFile"?: string;
  /**
   * The line number where the test starts in the source file.
   */
  "sourceStart"?: number;
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
    durationMs: {
      baseName: "duration_ms",
      type: "number",
      format: "int64",
    },
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    errorStack: {
      baseName: "error_stack",
      type: "string",
    },
    sourceEnd: {
      baseName: "source_end",
      type: "number",
      format: "int64",
    },
    sourceFile: {
      baseName: "source_file",
      type: "string",
    },
    sourceStart: {
      baseName: "source_start",
      type: "number",
      format: "int64",
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
    return FlakyTestRunMetadata.attributeTypeMap;
  }

  public constructor() {}
}
