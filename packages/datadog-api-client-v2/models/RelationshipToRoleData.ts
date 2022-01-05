/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RolesType } from "./RolesType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Relationship to role object.
 */

export class RelationshipToRoleData {
  /**
   * ID of the role.
   */
  "id"?: string;
  "type"?: RolesType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RolesType",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToRoleData.attributeTypeMap;
  }

  public constructor() {}
}
