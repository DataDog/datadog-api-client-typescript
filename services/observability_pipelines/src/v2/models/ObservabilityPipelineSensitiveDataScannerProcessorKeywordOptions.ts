import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for keywords used to reinforce sensitive data pattern detection.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions {
  /**
   * A list of keywords to match near the sensitive pattern.
   */
  "keywords": Array<string>;
  /**
   * Maximum number of tokens between a keyword and a sensitive value match.
   */
  "proximity": number;
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
    keywords: {
      baseName: "keywords",
      type: "Array<string>",
      required: true,
    },
    proximity: {
      baseName: "proximity",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions.attributeTypeMap;
  }

  public constructor() {}
}
