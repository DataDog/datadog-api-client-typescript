/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineKafkaDestinationCompression } from "./ObservabilityPipelineKafkaDestinationCompression";
import { ObservabilityPipelineKafkaDestinationEncoding } from "./ObservabilityPipelineKafkaDestinationEncoding";
import { ObservabilityPipelineKafkaDestinationType } from "./ObservabilityPipelineKafkaDestinationType";
import { ObservabilityPipelineKafkaLibrdkafkaOption } from "./ObservabilityPipelineKafkaLibrdkafkaOption";
import { ObservabilityPipelineKafkaSasl } from "./ObservabilityPipelineKafkaSasl";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `kafka` destination sends logs to Apache Kafka topics.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineKafkaDestination {
  /**
   * Name of the environment variable or secret that holds the Kafka bootstrap servers list.
   */
  "bootstrapServersKey"?: string;
  /**
   * Compression codec for Kafka messages.
   */
  "compression"?: ObservabilityPipelineKafkaDestinationCompression;
  /**
   * Encoding format for log events.
   */
  "encoding": ObservabilityPipelineKafkaDestinationEncoding;
  /**
   * The field name to use for Kafka message headers.
   */
  "headersKey"?: string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The field name to use as the Kafka message key.
   */
  "keyField"?: string;
  /**
   * Optional list of advanced Kafka producer configuration options, defined as key-value pairs.
   */
  "librdkafkaOptions"?: Array<ObservabilityPipelineKafkaLibrdkafkaOption>;
  /**
   * Maximum time in milliseconds to wait for message delivery confirmation.
   */
  "messageTimeoutMs"?: number;
  /**
   * Duration in seconds for the rate limit window.
   */
  "rateLimitDurationSecs"?: number;
  /**
   * Maximum number of messages allowed per rate limit duration.
   */
  "rateLimitNum"?: number;
  /**
   * Specifies the SASL mechanism for authenticating with a Kafka cluster.
   */
  "sasl"?: ObservabilityPipelineKafkaSasl;
  /**
   * Socket timeout in milliseconds for network requests.
   */
  "socketTimeoutMs"?: number;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The Kafka topic name to publish logs to.
   */
  "topic": string;
  /**
   * The destination type. The value should always be `kafka`.
   */
  "type": ObservabilityPipelineKafkaDestinationType;

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
    bootstrapServersKey: {
      baseName: "bootstrap_servers_key",
      type: "string",
    },
    compression: {
      baseName: "compression",
      type: "ObservabilityPipelineKafkaDestinationCompression",
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineKafkaDestinationEncoding",
      required: true,
    },
    headersKey: {
      baseName: "headers_key",
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
    keyField: {
      baseName: "key_field",
      type: "string",
    },
    librdkafkaOptions: {
      baseName: "librdkafka_options",
      type: "Array<ObservabilityPipelineKafkaLibrdkafkaOption>",
    },
    messageTimeoutMs: {
      baseName: "message_timeout_ms",
      type: "number",
      format: "int64",
    },
    rateLimitDurationSecs: {
      baseName: "rate_limit_duration_secs",
      type: "number",
      format: "int64",
    },
    rateLimitNum: {
      baseName: "rate_limit_num",
      type: "number",
      format: "int64",
    },
    sasl: {
      baseName: "sasl",
      type: "ObservabilityPipelineKafkaSasl",
    },
    socketTimeoutMs: {
      baseName: "socket_timeout_ms",
      type: "number",
      format: "int64",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    topic: {
      baseName: "topic",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineKafkaDestinationType",
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
    return ObservabilityPipelineKafkaDestination.attributeTypeMap;
  }

  public constructor() {}
}
