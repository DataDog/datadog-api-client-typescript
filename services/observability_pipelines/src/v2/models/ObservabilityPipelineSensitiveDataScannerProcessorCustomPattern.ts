import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType";

/**
 * Defines a custom regex-based pattern for identifying sensitive data in logs.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern {
  /**
   * Options for defining a custom regex pattern.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions;
  /**
   * Indicates a custom regular expression is used for matching.
   */
  "type": ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType;
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
    options: {
      baseName: "options",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern.attributeTypeMap;
  }

  public constructor() {}
}
