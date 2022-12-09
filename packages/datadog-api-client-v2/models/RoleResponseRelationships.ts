/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToPermissions } from "./RelationshipToPermissions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the role object returned by the API.
 */
export class RoleResponseRelationships {
  /**
   * Relationship to multiple permissions objects.
   */
  "permissions"?: RelationshipToPermissions;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    permissions: {
      baseName: "permissions",
      type: "RelationshipToPermissions",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
