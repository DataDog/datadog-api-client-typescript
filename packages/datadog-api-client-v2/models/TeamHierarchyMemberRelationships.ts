/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyMemberTeamRelationship } from "./TeamHierarchyMemberTeamRelationship";
import { TeamHierarchyMemberUserRelationship } from "./TeamHierarchyMemberUserRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * User and requested team linkage.
 */
export class TeamHierarchyMemberRelationships {
  /**
   * Linkage to the requested team.
   */
  "team": TeamHierarchyMemberTeamRelationship;
  /**
   * Linkage to the user.
   */
  "user": TeamHierarchyMemberUserRelationship;

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
    team: {
      baseName: "team",
      type: "TeamHierarchyMemberTeamRelationship",
      required: true,
    },
    user: {
      baseName: "user",
      type: "TeamHierarchyMemberUserRelationship",
      required: true,
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
    return TeamHierarchyMemberRelationships.attributeTypeMap;
  }

  public constructor() {}
}
