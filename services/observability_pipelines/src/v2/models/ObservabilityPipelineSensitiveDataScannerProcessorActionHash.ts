import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction";

/**
 * Configuration for hashing matched sensitive values.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorActionHash {
  /**
   * Action type that replaces the matched sensitive data with a hashed representation, preserving structure while securing content.
   */
  "action": ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction;
  /**
   * The `ObservabilityPipelineSensitiveDataScannerProcessorActionHash` `options`.
   */
  "options"?: any;
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
    action: {
      baseName: "action",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction",
      required: true,
    },
    options: {
      baseName: "options",
      type: "any",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorActionHash.attributeTypeMap;
  }

  public constructor() {}
}
