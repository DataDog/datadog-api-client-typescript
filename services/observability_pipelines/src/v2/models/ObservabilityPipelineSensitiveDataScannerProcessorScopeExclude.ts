import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions";

/**
 * Excludes specific fields from sensitive data scanning.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude {
  /**
   * Fields to which the scope rule applies.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions;
  /**
   * Excludes specific fields from processing.
   */
  "target": ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget;
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
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions",
      required: true,
    },
    target: {
      baseName: "target",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude.attributeTypeMap;
  }

  public constructor() {}
}
