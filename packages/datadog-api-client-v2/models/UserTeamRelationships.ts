/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUserTeamUser } from "./RelationshipToUserTeamUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between membership and a user
 */
export class UserTeamRelationships {
  /**
   * Relationship between team membership and user
   */
  "user"?: RelationshipToUserTeamUser;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    user: {
      baseName: "user",
      type: "RelationshipToUserTeamUser",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserTeamRelationships.attributeTypeMap;
  }

  public constructor() {}
}