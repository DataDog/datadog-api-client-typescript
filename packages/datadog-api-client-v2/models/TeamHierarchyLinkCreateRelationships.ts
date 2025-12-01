/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyLinkCreateTeamRelationship } from "./TeamHierarchyLinkCreateTeamRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The related teams that will be connected by the team hierarchy link
 */
export class TeamHierarchyLinkCreateRelationships {
  /**
   * Data about each team that will be connected by the team hierarchy link
   */
  "parentTeam": TeamHierarchyLinkCreateTeamRelationship;
  /**
   * Data about each team that will be connected by the team hierarchy link
   */
  "subTeam": TeamHierarchyLinkCreateTeamRelationship;

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
    parentTeam: {
      baseName: "parent_team",
      type: "TeamHierarchyLinkCreateTeamRelationship",
      required: true,
    },
    subTeam: {
      baseName: "sub_team",
      type: "TeamHierarchyLinkCreateTeamRelationship",
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
    return TeamHierarchyLinkCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
