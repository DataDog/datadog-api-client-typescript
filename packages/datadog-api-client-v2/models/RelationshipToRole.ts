/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Relationship to role.
 */

export class RelationshipToRole {
  "data"?: RelationshipToRoleData;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RelationshipToRoleData",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToRole.attributeTypeMap;
  }

  public constructor() {}
}
