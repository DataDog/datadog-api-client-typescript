/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamReferenceRelationshipsOncallUsersDataItems } from "./TeamReferenceRelationshipsOncallUsersDataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines which users are on-call within a team, stored as an array of references.
 */
export class TeamReferenceRelationshipsOncallUsers {
  /**
   * The list of user references who are on-call for this team.
   */
  "data"?: Array<TeamReferenceRelationshipsOncallUsersDataItems>;

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
      type: "Array<TeamReferenceRelationshipsOncallUsersDataItems>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamReferenceRelationshipsOncallUsers.attributeTypeMap;
  }

  public constructor() {}
}
