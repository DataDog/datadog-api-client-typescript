/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiKey } from "./ApiKey";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * An API key with its associated metadata.
 */

export class ApiKeyResponse {
  "apiKey"?: ApiKey;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    apiKey: {
      baseName: "api_key",
      type: "ApiKey",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return ApiKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
