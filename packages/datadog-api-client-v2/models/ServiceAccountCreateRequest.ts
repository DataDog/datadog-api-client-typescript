/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceAccountCreateData } from "./ServiceAccountCreateData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Create a service account.
 */

export class ServiceAccountCreateRequest {
  "data": ServiceAccountCreateData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "ServiceAccountCreateData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ServiceAccountCreateRequest.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): ServiceAccountCreateRequest {
    const res = new ServiceAccountCreateRequest();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'ServiceAccountCreateRequest' object"
      );
    }
    res.data = ObjectSerializer.deserialize(
      data.data,
      "ServiceAccountCreateData",
      ""
    );

    return res;
  }

  static serialize(data: ServiceAccountCreateRequest): { [key: string]: any } {
    const attributeTypes = ServiceAccountCreateRequest.getAttributeTypeMap();
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
        "missing required attribute 'data' on 'ServiceAccountCreateRequest' object"
      );
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "ServiceAccountCreateData",
      ""
    );

    return res;
  }

  public constructor() {}
}
