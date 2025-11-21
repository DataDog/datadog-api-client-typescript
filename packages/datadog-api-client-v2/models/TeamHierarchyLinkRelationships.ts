/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyLinkTeamRelationship } from "./TeamHierarchyLinkTeamRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team hierarchy link relationships
 */
export class TeamHierarchyLinkRelationships {
  /**
   * Team hierarchy link team relationship
   */
  "parentTeam": TeamHierarchyLinkTeamRelationship;
  /**
   * Team hierarchy link team relationship
   */
  "subTeam": TeamHierarchyLinkTeamRelationship;

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
      type: "TeamHierarchyLinkTeamRelationship",
      required: true,
    },
    subTeam: {
      baseName: "sub_team",
      type: "TeamHierarchyLinkTeamRelationship",
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
    return TeamHierarchyLinkRelationships.attributeTypeMap;
  }

  public constructor() {}
}
