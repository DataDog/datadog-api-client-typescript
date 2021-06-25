/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Datadog application key.
 */

export class FullApplicationKey {
  "attributes"?: FullApplicationKeyAttributes;
  /**
   * ID of the application key.
   */
  "id"?: string;
  "relationships"?: ApplicationKeyRelationships;
  "type"?: ApplicationKeysType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "FullApplicationKeyAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    relationships: {
      baseName: "relationships",
      type: "ApplicationKeyRelationships",
      format: "",
    },
    type: {
      baseName: "type",
      type: "ApplicationKeysType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FullApplicationKey.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): FullApplicationKey {
    const res = new FullApplicationKey();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "FullApplicationKeyAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.relationships = ObjectSerializer.deserialize(
      data.relationships,
      "ApplicationKeyRelationships",
      ""
    );

    if (["application_keys", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  static serialize(data: FullApplicationKey): { [key: string]: any } {
    const attributeTypes = FullApplicationKey.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "FullApplicationKeyAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.relationships = ObjectSerializer.serialize(
      data.relationships,
      "ApplicationKeyRelationships",
      ""
    );

    if (["application_keys", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
