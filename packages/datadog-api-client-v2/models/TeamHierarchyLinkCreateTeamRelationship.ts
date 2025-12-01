/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyLinkCreateTeam } from "./TeamHierarchyLinkCreateTeam";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data about each team that will be connected by the team hierarchy link
 */
export class TeamHierarchyLinkCreateTeamRelationship {
  /**
   * This schema defines the attributes about each team that has to be provided when creating a team hierarchy link
   */
  "data": TeamHierarchyLinkCreateTeam;

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
    data: {
      baseName: "data",
      type: "TeamHierarchyLinkCreateTeam",
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
    return TeamHierarchyLinkCreateTeamRelationship.attributeTypeMap;
  }

  public constructor() {}
}
