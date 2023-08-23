/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeamPermissionType } from "./UserTeamPermissionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Related user team permission data
 */
export class RelationshipToUserTeamPermissionData {
  /**
   * The ID of the user team permission
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
