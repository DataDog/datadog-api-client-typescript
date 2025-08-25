/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineGeneratedMetric } from "./ObservabilityPipelineGeneratedMetric";
import { ObservabilityPipelineGenerateMetricsProcessorType } from "./ObservabilityPipelineGenerateMetricsProcessorType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The `generate_datadog_metrics` processor creates custom metrics from logs and sends them to Datadog.
 * Metrics can be counters, gauges, or distributions and optionally grouped by log fields.
*/
export class ObservabilityPipelineGenerateMetricsProcessor {
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline.
  */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
  */
  "include": string;
  /**
   * A list of component IDs whose output is used as the `input` for this processor.
  */
  "inputs": Array<string>;
  /**
   * Configuration for generating individual metrics.
  */
  "metrics": Array<ObservabilityPipelineGeneratedMetric>;
  /**
   * The processor type. Always `generate_datadog_metrics`.
  */
  "type": ObservabilityPipelineGenerateMetricsProcessorType;

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
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "include": {
      "baseName": "include",
      "type": "string",
      "required": true,
    },
    "inputs": {
      "baseName": "inputs",
      "type": "Array<string>",
      "required": true,
    },
    "metrics": {
      "baseName": "metrics",
      "type": "Array<ObservabilityPipelineGeneratedMetric>",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineGenerateMetricsProcessorType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ObservabilityPipelineGenerateMetricsProcessor.attributeTypeMap;

  }

  public constructor() {











  }
}









