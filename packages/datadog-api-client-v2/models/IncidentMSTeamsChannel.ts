/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Microsoft Teams channel associated with an incident.
 */
export class IncidentMSTeamsChannel {
  /**
   * The Teams channel identifier.
   */
  "msChannelId": string;
  /**
   * The name of the Teams channel.
   */
  "msChannelName": string;
  /**
   * The Teams team identifier.
   */
  "msTeamId"?: string;
  /**
   * The Teams tenant identifier.
   */
  "msTenantId"?: string;
  /**
   * The redirect URL for the channel.
   */
  "redirectUrl"?: string;
  /**
   * The name of the Teams team.
   */
  "teamName"?: string;

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
    msChannelId: {
      baseName: "ms_channel_id",
      type: "string",
      required: true,
    },
    msChannelName: {
      baseName: "ms_channel_name",
      type: "string",
      required: true,
    },
    msTeamId: {
      baseName: "ms_team_id",
      type: "string",
    },
    msTenantId: {
      baseName: "ms_tenant_id",
      type: "string",
    },
    redirectUrl: {
      baseName: "redirect_url",
      type: "string",
    },
    teamName: {
      baseName: "team_name",
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
    return IncidentMSTeamsChannel.attributeTypeMap;
  }

  public constructor() {}
}
