/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PermissionsType } from "./PermissionsType";

import { AttributeTypeMap } from "../util";

/**
 * Relationship to permission object.
 */
export class RelationshipToPermissionData {
  /**
   * ID of the permission.
   */
  "id"?: string;
  /**
   * Permissions resource type.
   */
  "type"?: PermissionsType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PermissionsType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToPermissionData.attributeTypeMap;
  }

  public constructor() {}
}
