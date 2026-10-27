/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineFieldValue } from "./ObservabilityPipelineFieldValue";
import { ObservabilityPipelineSpikeProtectionProcessorMinimalThreshold } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThreshold";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a minimal threshold that applies to a specific partition instead of the processor-wide `minimal_threshold`.
 */
export class ObservabilityPipelineSpikeProtectionProcessorThresholdOverride {
  /**
   * The set of field matchers that identifies the partition this override applies to. Every field name listed must also appear in `partition_fields`.
   */
  "fields": Array<ObservabilityPipelineFieldValue>;
  /**
   * The minimal threshold to apply to the matching partition.
   */
  "minimalThreshold": ObservabilityPipelineSpikeProtectionProcessorMinimalThreshold;

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
    fields: {
      baseName: "fields",
      type: "Array<ObservabilityPipelineFieldValue>",
      required: true,
    },
    minimalThreshold: {
      baseName: "minimal_threshold",
      type: "ObservabilityPipelineSpikeProtectionProcessorMinimalThreshold",
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
    return ObservabilityPipelineSpikeProtectionProcessorThresholdOverride.attributeTypeMap;
  }

  public constructor() {}
}
