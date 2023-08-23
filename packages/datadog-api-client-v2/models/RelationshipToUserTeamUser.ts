/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUserTeamUserData } from "./RelationshipToUserTeamUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between team membership and user
 */
export class RelationshipToUserTeamUser {
  /**
   * A user's relationship with a team
   */
  "data": RelationshipToUserTeamUserData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "RelationshipToUserTeamUserData",
      required: true,
    },
  };
}
