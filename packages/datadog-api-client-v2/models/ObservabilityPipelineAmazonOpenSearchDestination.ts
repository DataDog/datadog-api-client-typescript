/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonOpenSearchDestinationAuth } from "./ObservabilityPipelineAmazonOpenSearchDestinationAuth";
import { ObservabilityPipelineAmazonOpenSearchDestinationType } from "./ObservabilityPipelineAmazonOpenSearchDestinationType";
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `amazon_opensearch` destination writes logs to Amazon OpenSearch.
 */
export class ObservabilityPipelineAmazonOpenSearchDestination {
  /**
   * Authentication settings for the Amazon OpenSearch destination.
   * The `strategy` field determines whether basic or AWS-based authentication is used.
   */
  "auth": ObservabilityPipelineAmazonOpenSearchDestinationAuth;
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * The index to write logs to.
   */
  "bulkIndex"?: string;
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
      required: true,
    },
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    bulkIndex: {
      baseName: "bulk_index",
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
