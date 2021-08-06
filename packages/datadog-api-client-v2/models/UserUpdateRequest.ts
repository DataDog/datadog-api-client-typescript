/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserUpdateData } from "./UserUpdateData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Update a user.
 */

export class UserUpdateRequest {
  "data": UserUpdateData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "UserUpdateData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UserUpdateRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UserUpdateRequest {
    const res = new UserUpdateRequest();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'UserUpdateRequest' object"
      );
    }
    res.data = ObjectSerializer.deserialize(data.data, "UserUpdateData", "");

    return res;
  }

  static serialize(data: UserUpdateRequest): { [key: string]: any } {
    const attributeTypes = UserUpdateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'UserUpdateRequest' object"
      );
    }
    res.data = ObjectSerializer.serialize(data.data, "UserUpdateData", "");

    return res;
  }

  public constructor() {}
}
