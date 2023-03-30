/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUserTeamPermissionData } from "./RelationshipToUserTeamPermissionData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between a user team permission and a team
 */
export class RelationshipToUserTeamPermission {
  /**
   * Related user team permission data
   */
  "data"?: RelationshipToUserTeamPermissionData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RelationshipToUserTeamPermissionData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToUserTeamPermission.attributeTypeMap;
  }

  public constructor() {}
}
