/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonOpenSearchDestinationAuth } from "./ObservabilityPipelineAmazonOpenSearchDestinationAuth";
import { ObservabilityPipelineAmazonOpenSearchDestinationType } from "./ObservabilityPipelineAmazonOpenSearchDestinationType";
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineOpenSearchDestinationDataStream } from "./ObservabilityPipelineOpenSearchDestinationDataStream";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `amazon_opensearch` destination writes logs to Amazon OpenSearch.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineAmazonOpenSearchDestination {
  /**
   * Authentication settings for the Amazon OpenSearch destination.
   * The `strategy` field determines whether basic or AWS-based authentication is used.
   * When `strategy` is `basic`, use `username_key` and `password_key` to reference credentials stored in environment variables or secrets.
   */
  "auth"?: ObservabilityPipelineAmazonOpenSearchDestinationAuth;
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
   * Name of the environment variable or secret that holds the Amazon OpenSearch endpoint URL.
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
   * The destination type. The value should always be `amazon_opensearch`.
   */
  "type": ObservabilityPipelineAmazonOpenSearchDestinationType;

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
      type: "ObservabilityPipelineAmazonOpenSearchDestinationAuth",
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
      type: "ObservabilityPipelineAmazonOpenSearchDestinationType",
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
    return ObservabilityPipelineAmazonOpenSearchDestination.attributeTypeMap;
  }

  public constructor() {}
}
