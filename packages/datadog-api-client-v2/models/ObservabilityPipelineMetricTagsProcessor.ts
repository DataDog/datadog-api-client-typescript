/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineMetricTagsProcessorRule } from "./ObservabilityPipelineMetricTagsProcessorRule";
import { ObservabilityPipelineMetricTagsProcessorType } from "./ObservabilityPipelineMetricTagsProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `metric_tags` processor filters metrics based on their tags using Datadog tag key patterns.
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelineMetricTagsProcessor {
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which metrics this processor targets.
   */
  "include": string;
  /**
   * A list of rules for filtering metric tags.
   */
  "rules": Array<ObservabilityPipelineMetricTagsProcessorRule>;
  /**
   * The processor type. The value should always be `metric_tags`.
   */
  "type": ObservabilityPipelineMetricTagsProcessorType;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<ObservabilityPipelineMetricTagsProcessorRule>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineMetricTagsProcessorType",
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
    return ObservabilityPipelineMetricTagsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
