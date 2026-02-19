/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes required to create a new role by cloning an existing one.
 */
export class RoleCloneAttributes {
  /**
   * Name of the new role that is cloned.
   */
  "name": string;
  /**
   * The managed role from which this role automatically inherits new permissions.
   * Specify one of the following: "Datadog Admin Role", "Datadog Standard Role", or "Datadog Read Only Role".
   * If empty or not specified, the role does not automatically inherit permissions from any managed role.
   */
  "receivesPermissionsFrom"?: Array<string>;

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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    receivesPermissionsFrom: {
      baseName: "receives_permissions_from",
      type: "Array<string>",
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
    return RoleCloneAttributes.attributeTypeMap;
  }

  public constructor() {}
}
