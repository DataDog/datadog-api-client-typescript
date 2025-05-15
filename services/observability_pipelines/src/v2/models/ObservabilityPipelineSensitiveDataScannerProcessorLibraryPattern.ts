import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType";

/**
 * Specifies a pattern from Datadog’s sensitive data detection library to match known sensitive data types.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern {
  /**
   * Options for selecting a predefined library pattern and enabling keyword support.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions;
  /**
   * Indicates that a predefined library pattern is used.
   */
  "type": ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType;
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
      type: "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern.attributeTypeMap;
  }

  public constructor() {}
}
