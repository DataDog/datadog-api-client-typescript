/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APIKeyUpdateData } from "./APIKeyUpdateData";

export class APIKeyUpdateRequest {
  "data": APIKeyUpdateData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    data: {
      baseName: "data",
      type: "APIKeyUpdateData",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return APIKeyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
