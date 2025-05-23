/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelinePipelineKafkaSourceSaslMechanism } from "./ObservabilityPipelinePipelineKafkaSourceSaslMechanism";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
