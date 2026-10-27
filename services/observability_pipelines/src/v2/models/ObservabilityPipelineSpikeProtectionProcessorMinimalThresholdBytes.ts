import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytesType } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytesType";

/**
 * Sets a specific byte threshold for the matching partition.
 */
export class ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes {
  /**
   * The minimal threshold, in bytes, for the matching partition.
   */
  "bytes": number;
  /**
   * The minimal threshold type. The value should always be `threshold`.
   */
  "type": ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytesType;
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
    bytes: {
      baseName: "bytes",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytesType",
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
    return ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes.attributeTypeMap;
  }

  public constructor() {}
}
