/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";
import { UsersRelationship } from "./UsersRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Project relationships
 */
export class ProjectRelationships {
  /**
   * Relationship between a team and a team link
   */
  "memberTeam"?: RelationshipToTeamLinks;
  /**
   * Relationship to users.
   */
  "memberUser"?: UsersRelationship;

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
    memberTeam: {
      baseName: "member_team",
      type: "RelationshipToTeamLinks",
    },
    memberUser: {
      baseName: "member_user",
      type: "UsersRelationship",
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
    return ProjectRelationships.attributeTypeMap;
  }

  public constructor() {}
}
