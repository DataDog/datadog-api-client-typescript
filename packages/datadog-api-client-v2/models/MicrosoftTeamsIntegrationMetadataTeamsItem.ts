/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Item in the Microsoft Teams integration metadata teams array.
 */
export class MicrosoftTeamsIntegrationMetadataTeamsItem {
  /**
   * Team ID of the Microsoft Teams team
   */
  "msTeamId": string;
  /**
   * Microsoft Teams tenant ID
   */
  "msTenantId": string;
  /**
   * URL redirecting to the Microsoft Teams team
   */
  "redirectUrl": string;
  /**
   * Name of the Microsoft Teams team
   */
  "teamName": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    msTeamId: {
      baseName: "ms_team_id",
      type: "string",
      required: true,
    },
    msTenantId: {
      baseName: "ms_tenant_id",
      type: "string",
      required: true,
    },
    redirectUrl: {
      baseName: "redirect_url",
      type: "string",
      required: true,
    },
    teamName: {
      baseName: "team_name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MicrosoftTeamsIntegrationMetadataTeamsItem.attributeTypeMap;
  }

  public constructor() {}
}
