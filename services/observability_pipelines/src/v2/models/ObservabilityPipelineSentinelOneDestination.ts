import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineSentinelOneDestinationRegion } from "./ObservabilityPipelineSentinelOneDestinationRegion";
import { ObservabilityPipelineSentinelOneDestinationType } from "./ObservabilityPipelineSentinelOneDestinationType";

/**
 * The `sentinel_one` destination sends logs to SentinelOne.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineSentinelOneDestination {
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The SentinelOne region to send logs to.
   */
  "region": ObservabilityPipelineSentinelOneDestinationRegion;
  /**
   * Name of the environment variable or secret that holds the SentinelOne API token.
   */
  "tokenKey"?: string;
  /**
   * The destination type. The value should always be `sentinel_one`.
   */
  "type": ObservabilityPipelineSentinelOneDestinationType;
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
    region: {
      baseName: "region",
      type: "ObservabilityPipelineSentinelOneDestinationRegion",
      required: true,
    },
    tokenKey: {
      baseName: "token_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSentinelOneDestinationType",
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
    return ObservabilityPipelineSentinelOneDestination.attributeTypeMap;
  }

  public constructor() {}
}
