import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGeneratedMetricIncrementByOneStrategy } from "./ObservabilityPipelineGeneratedMetricIncrementByOneStrategy";

/**
 * Strategy that increments a generated metric by one for each matching event.
 */
export class ObservabilityPipelineGeneratedMetricIncrementByOne {
  /**
   * Increments the metric by 1 for each matching event.
   */
  "strategy": ObservabilityPipelineGeneratedMetricIncrementByOneStrategy;
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
    strategy: {
      baseName: "strategy",
      type: "ObservabilityPipelineGeneratedMetricIncrementByOneStrategy",
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
    return ObservabilityPipelineGeneratedMetricIncrementByOne.attributeTypeMap;
  }

  public constructor() {}
}
