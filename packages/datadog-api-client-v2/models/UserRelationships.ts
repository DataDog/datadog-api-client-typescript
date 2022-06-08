/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToRoles } from "./RelationshipToRoles";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the user object.
 */
export class UserRelationships {
  /**
   * Relationship to roles.
   */
  "roles"?: RelationshipToRoles;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    roles: {
      baseName: "roles",
      type: "RelationshipToRoles",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserRelationships.attributeTypeMap;
  }

  public constructor() {}
}
