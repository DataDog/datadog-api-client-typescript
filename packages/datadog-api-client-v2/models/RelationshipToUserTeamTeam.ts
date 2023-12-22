/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUserTeamTeamData } from "./RelationshipToUserTeamTeamData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between team membership and team
 */
export class RelationshipToUserTeamTeam {
  /**
   * The team associated with the membership
   */
  "data": RelationshipToUserTeamTeamData;

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
      type: "RelationshipToUserTeamTeamData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToUserTeamTeam.attributeTypeMap;
  }

  public constructor() {}
}
