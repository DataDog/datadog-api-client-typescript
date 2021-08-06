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
 * Object describing the creator of the shared element.
 */

export class Creator {
  /**
   * Email of the creator.
   */
  "email"?: string;
  /**
   * Handle of the creator.
   */
  "handle"?: string;
  /**
   * Name of the creator.
   */
  "name"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    email: {
      baseName: "email",
      type: "string",
      format: "",
    },
    handle: {
      baseName: "handle",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return Creator.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): Creator {
    const res = new Creator();

    res.email = ObjectSerializer.deserialize(data.email, "string", "");

    res.handle = ObjectSerializer.deserialize(data.handle, "string", "");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    return res;
  }

  static serialize(data: Creator): { [key: string]: any } {
    const attributeTypes = Creator.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.email = ObjectSerializer.serialize(data.email, "string", "");

    res.handle = ObjectSerializer.serialize(data.handle, "string", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    return res;
  }

  public constructor() {}
}
