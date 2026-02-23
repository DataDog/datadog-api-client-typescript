import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineElasticsearchDestinationAuth } from "./ObservabilityPipelineElasticsearchDestinationAuth";
import { ObservabilityPipelineOpenSearchDestinationDataStream } from "./ObservabilityPipelineOpenSearchDestinationDataStream";
import { ObservabilityPipelineOpenSearchDestinationType } from "./ObservabilityPipelineOpenSearchDestinationType";

/**
 * The `opensearch` destination writes logs to an OpenSearch cluster.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineOpenSearchDestination {
  /**
   * Authentication settings for the Elasticsearch destination.
   * When `strategy` is `basic`, use `username_key` and `password_key` to reference credentials stored in environment variables or secrets.
   */
  "auth"?: ObservabilityPipelineElasticsearchDestinationAuth;
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * The index to write logs to.
   */
  "bulkIndex"?: string;
  /**
   * Configuration options for writing to OpenSearch Data Streams instead of a fixed index.
   */
  "dataStream"?: ObservabilityPipelineOpenSearchDestinationDataStream;
  /**
   * Name of the environment variable or secret that holds the OpenSearch endpoint URL.
   */
  "endpointUrlKey"?: string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The destination type. The value should always be `opensearch`.
   */
  "type": ObservabilityPipelineOpenSearchDestinationType;
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
    auth: {
      baseName: "auth",
      type: "ObservabilityPipelineElasticsearchDestinationAuth",
    },
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    bulkIndex: {
      baseName: "bulk_index",
      type: "string",
    },
    dataStream: {
      baseName: "data_stream",
      type: "ObservabilityPipelineOpenSearchDestinationDataStream",
    },
    endpointUrlKey: {
      baseName: "endpoint_url_key",
      type: "string",
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
      type: "ObservabilityPipelineOpenSearchDestinationType",
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
    return ObservabilityPipelineOpenSearchDestination.attributeTypeMap;
  }

  public constructor() {}
}
