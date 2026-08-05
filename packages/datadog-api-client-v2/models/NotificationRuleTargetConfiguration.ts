/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationRuleTargetConfigurationRecipient } from "./NotificationRuleTargetConfigurationRecipient";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for a notification target. Which fields apply depends on the target's `type`.
 */
export class NotificationRuleTargetConfiguration {
  /**
   * Slack channel name, for a `SLACK_CHANNEL` target.
   */
  "channel"?: string;
  /**
   * Slack channel ID, for a `SLACK_CHANNEL` target, or Microsoft Teams channel ID, for an `MS_TEAMS_CHANNEL` target.
   */
  "channelId"?: string;
  /**
   * Microsoft Teams channel name, for an `MS_TEAMS_CHANNEL` target.
   */
  "channelName"?: string;
  /**
   * Microsoft Teams connector name, for an `MS_TEAMS_CHANNEL` target.
   */
  "connectorName"?: string;
  /**
   * Recipient for an `EMAIL` target.
   */
  "recipient"?: NotificationRuleTargetConfigurationRecipient;
  /**
   * PagerDuty service name, for a `PAGERDUTY_SERVICE` target.
   */
  "serviceName"?: string;
  /**
   * Microsoft Teams team ID, for an `MS_TEAMS_CHANNEL` target.
   */
  "teamId"?: string;
  /**
   * Microsoft Teams team name, for an `MS_TEAMS_CHANNEL` target.
   */
  "teamName"?: string;
  /**
   * Microsoft Teams tenant ID, for an `MS_TEAMS_CHANNEL` target.
   */
  "tenantId"?: string;
  /**
   * Microsoft Teams tenant name, for an `MS_TEAMS_CHANNEL` target.
   */
  "tenantName"?: string;
  /**
   * Slack username, for a `SLACK_USER` target.
   */
  "username"?: string;
  /**
   * Name of the configured webhook, for a `WEBHOOK` target.
   */
  "webhookName"?: string;
  /**
   * Slack workspace name, for a `SLACK_CHANNEL` or `SLACK_USER` target.
   */
  "workspace"?: string;
  /**
   * Slack workspace ID, for a `SLACK_CHANNEL` target.
   */
  "workspaceId"?: string;

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
    channel: {
      baseName: "channel",
      type: "string",
    },
    channelId: {
      baseName: "channel_id",
      type: "string",
    },
    channelName: {
      baseName: "channel_name",
      type: "string",
    },
    connectorName: {
      baseName: "connector_name",
      type: "string",
    },
    recipient: {
      baseName: "recipient",
      type: "NotificationRuleTargetConfigurationRecipient",
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
    },
    teamName: {
      baseName: "team_name",
      type: "string",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
    },
    tenantName: {
      baseName: "tenant_name",
      type: "string",
    },
    username: {
      baseName: "username",
      type: "string",
    },
    webhookName: {
      baseName: "webhook_name",
      type: "string",
    },
    workspace: {
      baseName: "workspace",
      type: "string",
    },
    workspaceId: {
      baseName: "workspace_id",
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
    return NotificationRuleTargetConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
