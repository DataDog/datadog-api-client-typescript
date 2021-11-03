/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class SecurityFilterExclusionFilterResponse {
  /**
   * The exclusion filter name.
   */
  "name"?: string;
  /**
   * The exclusion filter query.
   */
  "query"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFilterExclusionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
