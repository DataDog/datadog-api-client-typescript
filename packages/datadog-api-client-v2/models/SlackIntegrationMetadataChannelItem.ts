/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Item in the Slack integration metadata channel array.
 */
export class SlackIntegrationMetadataChannelItem {
  /**
   * Slack channel ID.
   */
  "channelId": string;
  /**
   * Name of the Slack channel.
   */
  "channelName": string;
  /**
   * URL redirecting to the Slack channel.
   */
  "redirectUrl": string;
  /**
   * Slack team ID.
   */
  "teamId"?: string;

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
    channelId: {
      baseName: "channel_id",
      type: "string",
      required: true,
    },
    channelName: {
      baseName: "channel_name",
      type: "string",
      required: true,
    },
    redirectUrl: {
      baseName: "redirect_url",
      type: "string",
      required: true,
    },
    teamId: {
      baseName: "team_id",
      type: "string",
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
    return SlackIntegrationMetadataChannelItem.attributeTypeMap;
  }

  public constructor() {}
}
