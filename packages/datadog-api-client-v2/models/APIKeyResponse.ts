/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APIKeyResponseIncludedItem } from "./APIKeyResponseIncludedItem";
import { FullAPIKey } from "./FullAPIKey";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Response for retrieving an API key.
 */

export class APIKeyResponse {
  "data"?: FullAPIKey;
  /**
   * Array of objects related to the API key.
   */
  "included"?: Array<APIKeyResponseIncludedItem>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "FullAPIKey",
    },
    included: {
      baseName: "included",
      type: "Array<APIKeyResponseIncludedItem>",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
