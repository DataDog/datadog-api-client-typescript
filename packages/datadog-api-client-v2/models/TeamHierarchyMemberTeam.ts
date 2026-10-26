/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyMemberTeamAttributes } from "./TeamHierarchyMemberTeamAttributes";
import { TeamHierarchyMemberTeamType } from "./TeamHierarchyMemberTeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The requested team, included at most once. Descendant teams are not included.
 */
export class TeamHierarchyMemberTeam {
  /**
   * Available attributes of the requested team.
   */
  "attributes"?: TeamHierarchyMemberTeamAttributes;
  /**
   * UUID of the requested team.
   */
  "id": string;
  /**
   * Requested team resource type.
   */
  "type": TeamHierarchyMemberTeamType;

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
    attributes: {
      baseName: "attributes",
      type: "TeamHierarchyMemberTeamAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "TeamHierarchyMemberTeamType",
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
    return TeamHierarchyMemberTeam.attributeTypeMap;
  }

  public constructor() {}
}
