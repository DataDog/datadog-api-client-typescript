import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineReduceProcessorMergeStrategyStrategy } from "./ObservabilityPipelineReduceProcessorMergeStrategyStrategy";

/**
 * Defines how a specific field should be merged across grouped events.
 */
export class ObservabilityPipelineReduceProcessorMergeStrategy {
  /**
   * The field path in the log event.
   */
  "path": string;
  /**
   * The merge strategy to apply.
   */
  "strategy": ObservabilityPipelineReduceProcessorMergeStrategyStrategy;
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
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    strategy: {
      baseName: "strategy",
      type: "ObservabilityPipelineReduceProcessorMergeStrategyStrategy",
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
    return ObservabilityPipelineReduceProcessorMergeStrategy.attributeTypeMap;
  }

  public constructor() {}
}
