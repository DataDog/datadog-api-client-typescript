/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToUser } from "./RelationshipToUser";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Resources related to the application key.
 */

export class ApplicationKeyRelationships {
  "ownedBy"?: RelationshipToUser;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    ownedBy: {
      baseName: "owned_by",
      type: "RelationshipToUser",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ApplicationKeyRelationships.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): ApplicationKeyRelationships {
    const res = new ApplicationKeyRelationships();

    res.ownedBy = ObjectSerializer.deserialize(
      data.owned_by,
      "RelationshipToUser",
      ""
    );

    return res;
  }

  static serialize(data: ApplicationKeyRelationships): { [key: string]: any } {
    const attributeTypes = ApplicationKeyRelationships.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.owned_by = ObjectSerializer.serialize(
      data.ownedBy,
      "RelationshipToUser",
      ""
    );

    return res;
  }

  public constructor() {}
}
