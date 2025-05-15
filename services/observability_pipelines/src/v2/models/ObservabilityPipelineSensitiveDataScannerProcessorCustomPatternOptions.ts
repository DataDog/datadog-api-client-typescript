import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options for defining a custom regex pattern.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions {
  /**
   * A regular expression used to detect sensitive values. Must be a valid regex.
   */
  "rule": string;
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
    rule: {
      baseName: "rule",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions.attributeTypeMap;
  }

  public constructor() {}
}
