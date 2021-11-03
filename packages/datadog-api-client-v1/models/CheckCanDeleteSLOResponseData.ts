/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class CheckCanDeleteSLOResponseData {
  /**
   * An array of of SLO IDs that can be safely deleted.
   */
  "ok"?: Array<string>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    ok: {
      baseName: "ok",
      type: "Array<string>",
    },
  };

  static getAttributeTypeMap() {
    return CheckCanDeleteSLOResponseData.attributeTypeMap;
  }

  public constructor() {}
}
