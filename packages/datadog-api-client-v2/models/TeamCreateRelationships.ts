/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUsers } from "./RelationshipToUsers";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships formed with the team on creation
 */
export class TeamCreateRelationships {
  /**
   * Relationship to users.
   */
  "users"?: RelationshipToUsers;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    users: {
      baseName: "users",
      type: "RelationshipToUsers",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
