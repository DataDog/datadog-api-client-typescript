/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";
import { RelationshipToUserTeamPermission } from "./RelationshipToUserTeamPermission";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Resources related to a team
 */
export class TeamRelationships {
  /**
   * Relationship between a team and a team link
   */
  "teamLinks"?: RelationshipToTeamLinks;
  /**
   * Relationship between a user team permission and a team
   */
  "userTeamPermissions"?: RelationshipToUserTeamPermission;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    teamLinks: {
      baseName: "team_links",
      type: "RelationshipToTeamLinks",
    },
    userTeamPermissions: {
      baseName: "user_team_permissions",
      type: "RelationshipToUserTeamPermission",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamRelationships.attributeTypeMap;
  }

  public constructor() {}
}
