/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team update relationships
 */
export class TeamUpdateRelationships {
  /**
   * Relationship between a team and a team link
   */
  "teamLinks"?: RelationshipToTeamLinks;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    teamLinks: {
      baseName: "team_links",
      type: "RelationshipToTeamLinks",
    },
  };
}
