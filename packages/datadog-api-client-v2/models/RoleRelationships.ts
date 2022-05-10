/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToUsers } from "./RelationshipToUsers";

import { AttributeTypeMap } from "../util";

/**
 * Relationships of the role object.
 */
export class RoleRelationships {
  /**
   * Relationship to multiple permissions objects.
   */
  "permissions"?: RelationshipToPermissions;
  /**
   * Relationship to users.
   */
  "users"?: RelationshipToUsers;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    permissions: {
      baseName: "permissions",
      type: "RelationshipToPermissions",
    },
    users: {
      baseName: "users",
      type: "RelationshipToUsers",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
