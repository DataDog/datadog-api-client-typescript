/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDecoding } from "./ObservabilityPipelineDecoding";
import { ObservabilityPipelineHttpClientSourceAuthStrategy } from "./ObservabilityPipelineHttpClientSourceAuthStrategy";
import { ObservabilityPipelineHttpClientSourceType } from "./ObservabilityPipelineHttpClientSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `http_client` source scrapes logs from HTTP endpoints at regular intervals.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineHttpClientSource {
  /**
   * Optional authentication strategy for HTTP requests.
   */
  "authStrategy"?: ObservabilityPipelineHttpClientSourceAuthStrategy;
  /**
   * The decoding format used to interpret incoming logs.
   */
  "decoding": ObservabilityPipelineDecoding;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * The interval (in seconds) between HTTP scrape requests.
   */
  "scrapeIntervalSecs"?: number;
  /**
   * The timeout (in seconds) for each scrape request.
   */
  "scrapeTimeoutSecs"?: number;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `http_client`.
   */
  "type": ObservabilityPipelineHttpClientSourceType;

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
    authStrategy: {
      baseName: "auth_strategy",
      type: "ObservabilityPipelineHttpClientSourceAuthStrategy",
    },
    decoding: {
      baseName: "decoding",
      type: "ObservabilityPipelineDecoding",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    scrapeIntervalSecs: {
      baseName: "scrape_interval_secs",
      type: "number",
      format: "int64",
    },
    scrapeTimeoutSecs: {
      baseName: "scrape_timeout_secs",
      type: "number",
      format: "int64",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineHttpClientSourceType",
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
    return ObservabilityPipelineHttpClientSource.attributeTypeMap;
  }

  public constructor() {}
}
