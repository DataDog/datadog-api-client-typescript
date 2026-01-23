import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class CustomRuleRevisionTest {
  /**
   * Expected violation count
   */
  "annotationCount": number;
  /**
   * Test code
   */
  "code": string;
  /**
   * Test filename
   */
  "filename": string;
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
      required: true,
      format: "int64",
    },
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    filename: {
      baseName: "filename",
      type: "string",
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
    return CustomRuleRevisionTest.attributeTypeMap;
  }

  public constructor() {}
}
