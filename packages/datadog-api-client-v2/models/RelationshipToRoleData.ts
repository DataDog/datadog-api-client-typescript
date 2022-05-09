/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RolesType } from "./RolesType";

import { AttributeTypeMap } from "../util";

/**
 * Relationship to role object.
 */
export class RelationshipToRoleData {
  /**
   * The unique identifier of the role.
   */
  "id"?: string;
  /**
   * Roles type.
   */
  "type"?: RolesType;

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
      type: "RolesType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToRoleData.attributeTypeMap;
  }

  public constructor() {}
}
