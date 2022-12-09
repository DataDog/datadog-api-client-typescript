/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleCreateAttributes } from "./RoleCreateAttributes";
import { RoleRelationships } from "./RoleRelationships";
import { RolesType } from "./RolesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the creation of a role.
 */
export class RoleCreateData {
  /**
   * Attributes of the created role.
   */
  "attributes": RoleCreateAttributes;
  /**
   * Relationships of the role object.
   */
  "relationships"?: RoleRelationships;
  /**
   * Roles type.
   */
  "type"?: RolesType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "RoleCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "RoleRelationships",
    },
    type: {
      baseName: "type",
      type: "RolesType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
