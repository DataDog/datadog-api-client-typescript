import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineTagCardinalityLimitProcessorTrackingModeMode } from "./ObservabilityPipelineTagCardinalityLimitProcessorTrackingModeMode";

/**
 * Controls whether the processor uses exact or probabilistic tag tracking.
 */
export class ObservabilityPipelineTagCardinalityLimitProcessorTrackingMode {
  /**
   * The cardinality tracking algorithm to use.
   */
  "mode": ObservabilityPipelineTagCardinalityLimitProcessorTrackingModeMode;
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
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorTrackingModeMode",
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
    return ObservabilityPipelineTagCardinalityLimitProcessorTrackingMode.attributeTypeMap;
  }

  public constructor() {}
}
