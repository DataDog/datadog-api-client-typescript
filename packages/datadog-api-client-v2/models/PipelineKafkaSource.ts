/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PipelineKafkaSourceLibrdkafkaOption } from "./PipelineKafkaSourceLibrdkafkaOption";
import { PipelineKafkaSourceSasl } from "./PipelineKafkaSourceSasl";
import { PipelineKafkaSourceType } from "./PipelineKafkaSourceType";
import { PipelineTls } from "./PipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `kafka` source ingests data from Apache Kafka topics.
 */
export class PipelineKafkaSource {
  /**
   * Consumer group ID used by the Kafka client.
   */
  "groupId": string;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * Optional list of advanced Kafka client configuration options, defined as key-value pairs.
   */
  "librdkafkaOptions"?: Array<PipelineKafkaSourceLibrdkafkaOption>;
  /**
   * Specifies the SASL mechanism for authenticating with a Kafka cluster.
   */
  "sasl"?: PipelineKafkaSourceSasl;
  /**
   * Configuration for enabling TLS encryption.
   */
  "tls"?: PipelineTls;
  /**
   * A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.
   */
  "topics": Array<string>;
  /**
   * The source type. The value should always be `kafka`.
   */
  "type": PipelineKafkaSourceType;

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
    groupId: {
      baseName: "group_id",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    librdkafkaOptions: {
      baseName: "librdkafka_options",
      type: "Array<PipelineKafkaSourceLibrdkafkaOption>",
    },
    sasl: {
      baseName: "sasl",
      type: "PipelineKafkaSourceSasl",
    },
    tls: {
      baseName: "tls",
      type: "PipelineTls",
    },
    topics: {
      baseName: "topics",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PipelineKafkaSourceType",
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
    return PipelineKafkaSource.attributeTypeMap;
  }

  public constructor() {}
}
