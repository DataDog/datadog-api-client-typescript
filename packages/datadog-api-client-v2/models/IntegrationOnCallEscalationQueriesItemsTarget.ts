/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The target recipient for an On-Call escalation query
 */
export class IntegrationOnCallEscalationQueriesItemsTarget {
  /**
   * Whether to use dynamic team paging for escalation
   */
  "dynamicTeamPaging"?: boolean;
  /**
   * The identifier of the team to escalate to
   */
  "teamId"?: string;
  /**
   * The identifier of the user to escalate to
   */
  "userId"?: string;

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
    dynamicTeamPaging: {
      baseName: "dynamic_team_paging",
      type: "boolean",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
    },
    userId: {
      baseName: "user_id",
      type: "string",
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
    return IntegrationOnCallEscalationQueriesItemsTarget.attributeTypeMap;
  }

  public constructor() {}
}
