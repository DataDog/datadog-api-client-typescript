/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineDatadogTracesDestinationType } from "./ObservabilityPipelineDatadogTracesDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `datadog_traces` destination forwards traces to Datadog.
 *
 * **Supported pipeline types:** traces
 */
export class ObservabilityPipelineDatadogTracesDestination {
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the input for this component.
   */
  "inputs": Array<string>;
  /**
   * The destination type. The value should always be `datadog_traces`.
   */
  "type": ObservabilityPipelineDatadogTracesDestinationType;

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
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineDatadogTracesDestinationType",
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
    return ObservabilityPipelineDatadogTracesDestination.attributeTypeMap;
  }

  public constructor() {}
}
