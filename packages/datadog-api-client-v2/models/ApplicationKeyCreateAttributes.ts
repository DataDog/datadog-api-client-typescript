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
 * Attributes used to create an application Key.
 */

export class ApplicationKeyCreateAttributes {
  /**
   * Name of the application key.
   */
  "name": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ApplicationKeyCreateAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): ApplicationKeyCreateAttributes {
    const res = new ApplicationKeyCreateAttributes();

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'ApplicationKeyCreateAttributes' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    return res;
  }

  static serialize(
    data: ApplicationKeyCreateAttributes
  ): { [key: string]: any } {
    const attributeTypes = ApplicationKeyCreateAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'ApplicationKeyCreateAttributes' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    return res;
  }

  public constructor() {}
}
