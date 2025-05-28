/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Represents a key-value pair used to configure low-level `librdkafka` client options for Kafka sources, such as timeouts, buffer sizes, and security settings.
*/
export class ObservabilityPipelineKafkaSourceLibrdkafkaOption {
  /**
   * The name of the `librdkafka` configuration option to set.
  */
  "name": string;
  /**
   * The value assigned to the specified `librdkafka` configuration option.
  */
  "value": string;

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
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "value": {
      "baseName": "value",
      "type": "string",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ObservabilityPipelineKafkaSourceLibrdkafkaOption.attributeTypeMap;

  }

  public constructor() {











  }
}









