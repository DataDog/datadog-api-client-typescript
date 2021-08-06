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
 * In this object, the key is the tag, the value is a list of host names that are reporting that tag.
 */

export class TagToHosts {
  /**
   * A list of tags to apply to the host.
   */
  "tags"?: { [key: string]: Array<string> };

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    tags: {
      baseName: "tags",
      type: "{ [key: string]: Array<string>; }",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return TagToHosts.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): TagToHosts {
    const res = new TagToHosts();

    res.tags = ObjectSerializer.deserialize(
      data.tags,
      "{ [key: string]: Array<string>; }",
      ""
    );

    return res;
  }

  static serialize(data: TagToHosts): { [key: string]: any } {
    const attributeTypes = TagToHosts.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.tags = ObjectSerializer.serialize(
      data.tags,
      "{ [key: string]: Array<string>; }",
      ""
    );

    return res;
  }

  public constructor() {}
}
