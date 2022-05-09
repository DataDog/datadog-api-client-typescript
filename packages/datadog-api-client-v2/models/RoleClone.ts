/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleCloneAttributes } from "./RoleCloneAttributes";
import { RolesType } from "./RolesType";

import { AttributeTypeMap } from "../util";

/**
 * Data for the clone role request.
 */
export class RoleClone {
  /**
   * Attributes required to create a new role by cloning an existing one.
   */
  "attributes": RoleCloneAttributes;
  /**
   * Roles type.
   */
  "type": RolesType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "RoleCloneAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RolesType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleClone.attributeTypeMap;
  }

  public constructor() {}
}
