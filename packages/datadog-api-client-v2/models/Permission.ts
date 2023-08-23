/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PermissionAttributes } from "./PermissionAttributes";
import { PermissionsType } from "./PermissionsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Permission object.
 */
export class Permission {
  /**
   * Attributes of a permission.
   */
  "attributes"?: PermissionAttributes;
  /**
   * ID of the permission.
   */
  "id"?: string;
  /**
   * Permissions resource type.
   */
  "type": PermissionsType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "PermissionAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "PermissionsType",
      required: true,
    },
  };
}
