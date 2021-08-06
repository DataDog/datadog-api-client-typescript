/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RoleCreateAttributes } from "./RoleCreateAttributes";
import { RoleRelationships } from "./RoleRelationships";
import { RolesType } from "./RolesType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Data related to the creation of a role.
 */

export class RoleCreateData {
  "attributes": RoleCreateAttributes;
  "relationships"?: RoleRelationships;
  "type"?: RolesType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "RoleCreateAttributes",
      format: "",
    },
    relationships: {
      baseName: "relationships",
      type: "RoleRelationships",
      format: "",
    },
    type: {
      baseName: "type",
      type: "RolesType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RoleCreateData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RoleCreateData {
    const res = new RoleCreateData();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'RoleCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "RoleCreateAttributes",
      ""
    );

    res.relationships = ObjectSerializer.deserialize(
      data.relationships,
      "RoleRelationships",
      ""
    );

    if (["roles", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new RoleCreateData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: RoleCreateData): { [key: string]: any } {
    const attributeTypes = RoleCreateData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'RoleCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "RoleCreateAttributes",
      ""
    );

    res.relationships = ObjectSerializer.serialize(
      data.relationships,
      "RoleRelationships",
      ""
    );

    if (["roles", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
