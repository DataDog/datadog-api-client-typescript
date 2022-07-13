/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a permission.
 */
export class PermissionAttributes {
  /**
   * Creation time of the permission.
   */
  "created"?: Date;
  /**
   * Description of the permission.
   */
  "description"?: string;
  /**
   * Displayed name for the permission.
   */
  "displayName"?: string;
  /**
   * Display type.
   */
  "displayType"?: string;
  /**
   * Name of the permission group.
   */
  "groupName"?: string;
  /**
   * Name of the permission.
   */
  "name"?: string;
  /**
   * Whether or not the permission is restricted.
   */
  "restricted"?: boolean;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    displayType: {
      baseName: "display_type",
      type: "string",
    },
    groupName: {
      baseName: "group_name",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    restricted: {
      baseName: "restricted",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PermissionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
