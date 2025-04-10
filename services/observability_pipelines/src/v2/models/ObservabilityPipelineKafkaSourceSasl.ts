import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelinePipelineKafkaSourceSaslMechanism } from "./ObservabilityPipelinePipelineKafkaSourceSaslMechanism";

/**
 * Specifies the SASL mechanism for authenticating with a Kafka cluster.
 */
export class ObservabilityPipelineKafkaSourceSasl {
  /**
   * SASL mechanism used for Kafka authentication.
   */
  "mechanism"?: ObservabilityPipelinePipelineKafkaSourceSaslMechanism;
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
    mechanism: {
      baseName: "mechanism",
      type: "ObservabilityPipelinePipelineKafkaSourceSaslMechanism",
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
    return ObservabilityPipelineKafkaSourceSasl.attributeTypeMap;
  }

  public constructor() {}
}
