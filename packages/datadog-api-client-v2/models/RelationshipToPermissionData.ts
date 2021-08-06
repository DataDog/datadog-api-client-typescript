/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PermissionsType } from "./PermissionsType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Relationship to permission object.
 */

export class RelationshipToPermissionData {
  /**
   * ID of the permission.
   */
  "id"?: string;
  "type"?: PermissionsType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "PermissionsType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RelationshipToPermissionData.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): RelationshipToPermissionData {
    const res = new RelationshipToPermissionData();

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (["permissions", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new RelationshipToPermissionData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: RelationshipToPermissionData): { [key: string]: any } {
    const attributeTypes = RelationshipToPermissionData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (["permissions", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
