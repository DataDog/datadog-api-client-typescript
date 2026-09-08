import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A test case of a forwarded static analysis rule.
 */
export class AnalysisRequestRuleTest {
  /**
   * The expected number of findings the rule should produce against the test code.
   */
  "annotationCount"?: number;
  /**
   * The source code snippet used as input for the rule test.
   */
  "code"?: string;
  /**
   * The filename associated with the test code snippet.
   */
  "filename"?: string;
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
    annotationCount: {
      baseName: "annotation_count",
      type: "number",
      format: "int64",
    },
    code: {
      baseName: "code",
      type: "string",
    },
    filename: {
      baseName: "filename",
      type: "string",
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
    return AnalysisRequestRuleTest.attributeTypeMap;
  }

  public constructor() {}
}
