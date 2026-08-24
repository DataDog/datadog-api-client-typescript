/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An individual team's ownership entry within a teams ownership rule.
 */
export class TeamsOwnershipRuleTeamMapping {
  /**
   * The ID of the underlying mapping, used to delete this team's ownership individually.
   */
  "mappingId": string;
  /**
   * The handle of the owning team.
   */
  "teamHandle": string;

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
    mappingId: {
      baseName: "mapping_id",
      type: "string",
      required: true,
    },
    teamHandle: {
      baseName: "team_handle",
      type: "string",
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
    return TeamsOwnershipRuleTeamMapping.attributeTypeMap;
  }

  public constructor() {}
}
