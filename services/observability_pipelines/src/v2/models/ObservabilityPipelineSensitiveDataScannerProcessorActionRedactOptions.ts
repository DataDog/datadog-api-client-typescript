import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for fully redacting sensitive data.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions {
  /**
   * The string used to replace matched sensitive data (for example, "***" or "[REDACTED]").
   */
  "replace": string;
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
    replace: {
      baseName: "replace",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions.attributeTypeMap;
  }

  public constructor() {}
}
