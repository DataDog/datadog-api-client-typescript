import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection";

/**
 * Controls how partial redaction is applied, including character count and direction.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions {
  /**
   * Number of characters to leave visible from the start or end of the matched value; the rest are redacted.
   */
  "characters": number;
  /**
   * Indicates whether to redact characters from the first or last part of the matched value.
   */
  "direction": ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection;
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
    characters: {
      baseName: "characters",
      type: "number",
      required: true,
      format: "int64",
    },
    direction: {
      baseName: "direction",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions.attributeTypeMap;
  }

  public constructor() {}
}
