import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A position in source code, identified by line and column numbers.
 */
export class AnalysisPosition {
  /**
   * The column number in the source file (1-based).
   */
  "col": number;
  /**
   * The line number in the source file (1-based).
   */
  "line": number;
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
    col: {
      baseName: "col",
      type: "number",
      required: true,
      format: "int64",
    },
    line: {
      baseName: "line",
      type: "number",
      required: true,
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
    return AnalysisPosition.attributeTypeMap;
  }

  public constructor() {}
}
