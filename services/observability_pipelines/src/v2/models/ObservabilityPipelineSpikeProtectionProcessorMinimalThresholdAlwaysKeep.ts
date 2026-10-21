import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType";

/**
 * Never activates spike protection for the matching partition, regardless of volume.
 */
export class ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep {
  /**
   * The minimal threshold type. The value should always be `always_keep`.
   */
  "type": ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType;
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType",
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
    return ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep.attributeTypeMap;
  }

  public constructor() {}
}
