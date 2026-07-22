/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineKafkaSaslMechanism } from "./ObservabilityPipelineKafkaSaslMechanism";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "mechanism": {
      "baseName": "mechanism",
      "type": "ObservabilityPipelineKafkaSaslMechanism",
    },
    "passwordKey": {
      "baseName": "password_key",
      "type": "string",
    },
    "usernameKey": {
      "baseName": "username_key",
      "type": "string",
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

  public constructor() {











  }
}









