/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleRelationships } from "./RoleRelationships";
import { RolesType } from "./RolesType";
import { RoleUpdateAttributes } from "./RoleUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the update of a role.
 */
export class RoleUpdateData {
  /**
   * Attributes of the role.
   */
  "attributes": RoleUpdateAttributes;
  /**
   * The unique identifier of the role.
   */
  "id": string;
  /**
   * Relationships of the role object.
   */
  "relationships"?: RoleRelationships;
  /**
   * Roles type.
   */
  "type": RolesType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "RoleUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "RoleRelationships",
    },
    type: {
      baseName: "type",
      type: "RolesType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
