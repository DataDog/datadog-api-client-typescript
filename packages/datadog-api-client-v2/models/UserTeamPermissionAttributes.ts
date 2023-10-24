/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * User team permission attributes
 */
export class UserTeamPermissionAttributes {
  /**
   * Object of team permission actions and boolean values that a logged in user can perform on this team.
   */
  "permissions"?: any;

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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserTeamPermissionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
