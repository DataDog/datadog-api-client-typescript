/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeamPermissionAttributes } from "./UserTeamPermissionAttributes";
import { UserTeamPermissionType } from "./UserTeamPermissionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user's permissions for a given team
 */
export class UserTeamPermission {
  /**
   * User team permission attributes
   */
  "attributes"?: UserTeamPermissionAttributes;
  /**
   * The user team permission's identifier
   */
  "id": string;
  /**
   * User team permission type
   */
  "type": UserTeamPermissionType;

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
      type: "UserTeamPermissionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserTeamPermissionType",
      required: true,
    },
  };
}
