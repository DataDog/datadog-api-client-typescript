import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions";

/**
 * Includes only specific fields for sensitive data scanning.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude {
  /**
   * Fields to which the scope rule applies.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions;
  /**
   * Applies the rule only to included fields.
   */
  "target": ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget;
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
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude.attributeTypeMap;
  }

  public constructor() {}
}
