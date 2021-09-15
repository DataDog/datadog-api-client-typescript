/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * An array of service level objective objects.
 */

export class CheckCanDeleteSLOResponseData {
  /**
   * An array of of SLO IDs that can be safely deleted.
   */
  "ok"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    ok: {
      baseName: "ok",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return CheckCanDeleteSLOResponseData.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): CheckCanDeleteSLOResponseData {
    const res = new CheckCanDeleteSLOResponseData();

    res.ok = ObjectSerializer.deserialize(data.ok, "Array<string>", "");

    return res;
  }

  static serialize(data: CheckCanDeleteSLOResponseData): {
    [key: string]: any;
  } {
    const attributeTypes = CheckCanDeleteSLOResponseData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.ok = ObjectSerializer.serialize(data.ok, "Array<string>", "");

    return res;
  }

  public constructor() {}
}
