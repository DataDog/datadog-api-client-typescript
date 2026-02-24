import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineKafkaSaslMechanism } from "./ObservabilityPipelineKafkaSaslMechanism";

/**
 * Specifies the SASL mechanism for authenticating with a Kafka cluster.
 */
export class ObservabilityPipelineKafkaSasl {
  /**
   * SASL mechanism used for Kafka authentication.
   */
  "mechanism"?: ObservabilityPipelineKafkaSaslMechanism;
  /**
   * Name of the environment variable or secret that holds the SASL password.
   */
  "passwordKey"?: string;
  /**
   * Name of the environment variable or secret that holds the SASL username.
   */
  "usernameKey"?: string;
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
      type: "ObservabilityPipelineKafkaSaslMechanism",
    },
    passwordKey: {
      baseName: "password_key",
      type: "string",
    },
    usernameKey: {
      baseName: "username_key",
      type: "string",
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
    return ObservabilityPipelineKafkaSasl.attributeTypeMap;
  }

  public constructor() {}
}
