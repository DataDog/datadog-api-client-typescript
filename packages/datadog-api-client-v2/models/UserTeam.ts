/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeamAttributes } from "./UserTeamAttributes";
import { UserTeamRelationships } from "./UserTeamRelationships";
import { UserTeamType } from "./UserTeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user's relationship with a team
 */
export class UserTeam {
  /**
   * Team membership attributes
   */
  "attributes"?: UserTeamAttributes;
  /**
   * The ID of a user's relationship with a team
   */
  "id": string;
  /**
   * Relationship between membership and a user
   */
  "relationships"?: UserTeamRelationships;
  /**
   * Team membership type
   */
  "type": UserTeamType;

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
      type: "UserTeamAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UserTeamRelationships",
    },
    type: {
      baseName: "type",
      type: "UserTeamType",
      required: true,
    },
  };
}
