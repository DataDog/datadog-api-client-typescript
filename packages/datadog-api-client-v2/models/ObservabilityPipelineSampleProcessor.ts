/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSampleProcessorType } from "./ObservabilityPipelineSampleProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `sample` processor allows probabilistic sampling of logs at a fixed rate.
 */
export class ObservabilityPipelineSampleProcessor {
  /**
   * Optional list of fields to group events by. Each group will be sampled independently
   */
  "groupBy"?: Array<string>;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The percentage of logs to sample.
   */
  "percentage"?: number;
  /**
   * Number of events to sample (1 in N).
   */
  "rate"?: number;
  /**
   * The processor type. The value should always be `sample`.
   */
  "type": ObservabilityPipelineSampleProcessorType;

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
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
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
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    percentage: {
      baseName: "percentage",
      type: "number",
      format: "double",
    },
    rate: {
      baseName: "rate",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSampleProcessorType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineSampleProcessor.attributeTypeMap;
  }

  public constructor() {}
}
