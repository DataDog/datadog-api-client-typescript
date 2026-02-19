/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the role.
 */
export class RoleUpdateAttributes {
  /**
   * Creation time of the role.
   */
  "createdAt"?: Date;
  /**
   * Time of last role modification.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the role.
   */
  "name"?: string;
  /**
   * The managed role from which this role automatically inherits new permissions.
   * Specify one of the following: "Datadog Admin Role", "Datadog Standard Role", or "Datadog Read Only Role".
   * If empty or not specified, the role does not automatically inherit permissions from any managed role.
   */
  "receivesPermissionsFrom"?: Array<string>;
  /**
   * The user count.
   */
  "userCount"?: number;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    receivesPermissionsFrom: {
      baseName: "receives_permissions_from",
      type: "Array<string>",
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      format: "int32",
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
    return RoleUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
