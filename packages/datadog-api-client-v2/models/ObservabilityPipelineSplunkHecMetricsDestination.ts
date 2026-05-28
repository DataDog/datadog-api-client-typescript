/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineSplunkHecMetricsDestinationCompression } from "./ObservabilityPipelineSplunkHecMetricsDestinationCompression";
import { ObservabilityPipelineSplunkHecMetricsDestinationType } from "./ObservabilityPipelineSplunkHecMetricsDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `splunk_hec_metrics` destination forwards metrics to Splunk using the HTTP Event Collector (HEC).
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelineSplunkHecMetricsDestination {
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * Compression algorithm applied when sending metrics to Splunk HEC.
   */
  "compression"?: ObservabilityPipelineSplunkHecMetricsDestinationCompression;
  /**
   * Optional default namespace for metrics sent to Splunk HEC.
   */
  "defaultNamespace"?: string;
  /**
   * Name of the environment variable or secret that holds the Splunk HEC endpoint URL.
   */
  "endpointUrlKey"?: string;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * Optional name of the Splunk index where metrics are written.
   */
  "index"?: string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The Splunk source field value for metric events.
   */
  "source"?: string;
  /**
   * The Splunk sourcetype to assign to metric events.
   */
  "sourcetype"?: string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * Name of the environment variable or secret that holds the Splunk HEC token.
   */
  "tokenKey"?: string;
  /**
   * The destination type. Always `splunk_hec_metrics`.
   */
  "type": ObservabilityPipelineSplunkHecMetricsDestinationType;

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
    compression: {
      baseName: "compression",
      type: "ObservabilityPipelineSplunkHecMetricsDestinationCompression",
    },
    defaultNamespace: {
      baseName: "default_namespace",
      type: "string",
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
    index: {
      baseName: "index",
      type: "string",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
    },
    sourcetype: {
      baseName: "sourcetype",
      type: "string",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    tokenKey: {
      baseName: "token_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSplunkHecMetricsDestinationType",
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
    return ObservabilityPipelineSplunkHecMetricsDestination.attributeTypeMap;
  }

  public constructor() {}
}
