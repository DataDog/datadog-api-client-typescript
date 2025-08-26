/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineReduceProcessorMergeStrategyStrategy } from "./ObservabilityPipelineReduceProcessorMergeStrategyStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
