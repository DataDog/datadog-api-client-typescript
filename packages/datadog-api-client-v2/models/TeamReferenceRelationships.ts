/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamReferenceRelationshipsOncallUsers } from "./TeamReferenceRelationshipsOncallUsers";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Collects the key relationship fields for a team reference, specifically on-call users.
 */
export class TeamReferenceRelationships {
  /**
   * Defines which users are on-call within a team, stored as an array of references.
   */
  "oncallUsers"?: TeamReferenceRelationshipsOncallUsers;

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
    oncallUsers: {
      baseName: "oncall_users",
      type: "TeamReferenceRelationshipsOncallUsers",
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
    return TeamReferenceRelationships.attributeTypeMap;
  }

  public constructor() {}
}
