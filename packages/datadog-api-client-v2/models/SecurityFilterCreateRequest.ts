/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilterCreateData } from "./SecurityFilterCreateData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Request object that includes the security filter that you would like to create.
 */

export class SecurityFilterCreateRequest {
  "data": SecurityFilterCreateData;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "SecurityFilterCreateData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFilterCreateRequest.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SecurityFilterCreateRequest {
    const res = new SecurityFilterCreateRequest();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'SecurityFilterCreateRequest' object"
      );
    }
    res.data = ObjectSerializer.deserialize(
      data.data,
      "SecurityFilterCreateData",
      ""
    );

    return res;
  }

  static serialize(data: SecurityFilterCreateRequest): { [key: string]: any } {
    const attributeTypes = SecurityFilterCreateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'SecurityFilterCreateRequest' object"
      );
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "SecurityFilterCreateData",
      ""
    );

    return res;
  }

  public constructor() {}
}
