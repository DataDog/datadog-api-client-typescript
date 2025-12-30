import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineKafkaLibrdkafkaOption } from "./ObservabilityPipelineKafkaLibrdkafkaOption";
import { ObservabilityPipelineKafkaSasl } from "./ObservabilityPipelineKafkaSasl";
import { ObservabilityPipelineKafkaSourceType } from "./ObservabilityPipelineKafkaSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `kafka` source ingests data from Apache Kafka topics.
 */
export class ObservabilityPipelineKafkaSource {
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
  "librdkafkaOptions"?: Array<ObservabilityPipelineKafkaLibrdkafkaOption>;
  /**
   * Specifies the SASL mechanism for authenticating with a Kafka cluster.
   */
  "sasl"?: ObservabilityPipelineKafkaSasl;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.
   */
  "topics": Array<string>;
  /**
   * The source type. The value should always be `kafka`.
   */
  "type": ObservabilityPipelineKafkaSourceType;
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
      type: "Array<ObservabilityPipelineKafkaLibrdkafkaOption>",
    },
    sasl: {
      baseName: "sasl",
      type: "ObservabilityPipelineKafkaSasl",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    topics: {
      baseName: "topics",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineKafkaSourceType",
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
    return ObservabilityPipelineKafkaSource.attributeTypeMap;
  }

  public constructor() {}
}
