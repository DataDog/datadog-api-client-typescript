import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget";

/**
 * Applies scanning across all available fields.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorScopeAll {
  /**
   * Applies the rule to all fields.
   */
  "target": ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget;
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
    target: {
      baseName: "target",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorScopeAll.attributeTypeMap;
  }

  public constructor() {}
}
