import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Per-file line coverage data including executable, covered, and added lines.
 */
export class FileCoverageLines {
  /**
   * Line numbers that were added in the specified scope (for example, in a PR diff).
   */
  "addedLines"?: Array<number>;
  /**
   * Line numbers that were covered by tests.
   */
  "coveredLines"?: Array<number>;
  /**
   * Line numbers that are executable (can be covered).
   */
  "executableLines"?: Array<number>;
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
    addedLines: {
      baseName: "added_lines",
      type: "Array<number>",
      format: "int64",
    },
    coveredLines: {
      baseName: "covered_lines",
      type: "Array<number>",
      format: "int64",
    },
    executableLines: {
      baseName: "executable_lines",
      type: "Array<number>",
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
    return FileCoverageLines.attributeTypeMap;
  }

  public constructor() {}
}
