/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDecoding } from "./ObservabilityPipelineDecoding";
import { ObservabilityPipelineHttpServerSourceAuthStrategy } from "./ObservabilityPipelineHttpServerSourceAuthStrategy";
import { ObservabilityPipelineHttpServerSourceType } from "./ObservabilityPipelineHttpServerSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The `http_server` source collects logs over HTTP POST from external services.
*/
export class ObservabilityPipelineHttpServerSource {
  /**
   * HTTP authentication method.
  */
  "authStrategy": ObservabilityPipelineHttpServerSourceAuthStrategy;
  /**
   * The decoding format used to interpret incoming logs.
  */
  "decoding": ObservabilityPipelineDecoding;
  /**
   * Unique ID for the HTTP server source.
  */
  "id": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
  */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `http_server`.
  */
  "type": ObservabilityPipelineHttpServerSourceType;

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
    "authStrategy": {
      "baseName": "auth_strategy",
      "type": "ObservabilityPipelineHttpServerSourceAuthStrategy",
      "required": true,
    },
    "decoding": {
      "baseName": "decoding",
      "type": "ObservabilityPipelineDecoding",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "tls": {
      "baseName": "tls",
      "type": "ObservabilityPipelineTls",
    },
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineHttpServerSourceType",
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




    return ObservabilityPipelineHttpServerSource.attributeTypeMap;

  }

  public constructor() {











  }
}









