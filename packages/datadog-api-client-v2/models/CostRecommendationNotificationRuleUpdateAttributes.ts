/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationNotificationRuleDestinationType } from "./CostRecommendationNotificationRuleDestinationType";
import { CostRecommendationNotificationRuleFrequency } from "./CostRecommendationNotificationRuleFrequency";
import { CostRecommendationNotificationRuleMessageCustomization } from "./CostRecommendationNotificationRuleMessageCustomization";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes to change. Attributes left out keep their value; `mention_targets` and `message_customization`
 * replace the stored value when sent.
 */
export class CostRecommendationNotificationRuleUpdateAttributes {
  /**
   * The Slack channel ID, starting with `C` or `G`.
   */
  "channelId"?: string;
  /**
   * Where the digest is sent. `slack` requires `workspace_id` and `channel_id`; `teams` requires the
   * `teams_*` attributes. Defaults to `slack`.
   */
  "destinationType"?: CostRecommendationNotificationRuleDestinationType;
  /**
   * Whether the digest is sent.
   */
  "enabled"?: boolean;
  /**
   * How often the digest is sent. `weekly` and `biweekly` use `weekly_execution_day` and `weekly_execution_time`;
   * `every_30` and `every_90` (days) use `interval_execution_date` and `interval_execution_time`.
   */
  "frequency"?: CostRecommendationNotificationRuleFrequency;
  /**
   * The first date (`YYYY-MM-DD`) of an `every_30` or `every_90` schedule.
   */
  "intervalExecutionDate"?: string;
  /**
   * The time of day (`HH:MM`, in `timezone`) of an `every_30` or `every_90` schedule.
   */
  "intervalExecutionTime"?: string;
  /**
   * Slack member IDs to mention in the digest. Only valid for `slack` rules.
   */
  "mentionTargets"?: Array<string>;
  /**
   * Which sections the digest shows. Sent as a whole: sections left out of a request use their defaults, which
   * show everything.
   */
  "messageCustomization"?: CostRecommendationNotificationRuleMessageCustomization;
  /**
   * The name of the rule, unique within the organization.
   */
  "name"?: string;
  /**
   * The recommendation search query that selects what the digest includes. Empty selects every recommendation.
   */
  "scopeQuery"?: string;
  /**
   * The Microsoft Teams channel ID.
   */
  "teamsChannelId"?: string;
  /**
   * The Microsoft Teams channel name.
   */
  "teamsChannelName"?: string;
  /**
   * The Microsoft Teams team ID.
   */
  "teamsTeamId"?: string;
  /**
   * The Microsoft Teams team name.
   */
  "teamsTeamName"?: string;
  /**
   * The Microsoft Teams tenant ID.
   */
  "teamsTenantId"?: string;
  /**
   * The Microsoft Teams tenant name.
   */
  "teamsTenantName"?: string;
  /**
   * The IANA time zone of the schedule.
   */
  "timezone"?: string;
  /**
   * The day of the week of a `weekly` or `biweekly` schedule, such as `monday`.
   */
  "weeklyExecutionDay"?: string;
  /**
   * The time of day (`HH:MM`, in `timezone`) of a `weekly` or `biweekly` schedule.
   */
  "weeklyExecutionTime"?: string;
  /**
   * The Slack workspace ID, starting with `T`.
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
    channelId: {
      baseName: "channel_id",
      type: "string",
    },
    destinationType: {
      baseName: "destination_type",
      type: "CostRecommendationNotificationRuleDestinationType",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    frequency: {
      baseName: "frequency",
      type: "CostRecommendationNotificationRuleFrequency",
    },
    intervalExecutionDate: {
      baseName: "interval_execution_date",
      type: "string",
    },
    intervalExecutionTime: {
      baseName: "interval_execution_time",
      type: "string",
    },
    mentionTargets: {
      baseName: "mention_targets",
      type: "Array<string>",
    },
    messageCustomization: {
      baseName: "message_customization",
      type: "CostRecommendationNotificationRuleMessageCustomization",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    scopeQuery: {
      baseName: "scope_query",
      type: "string",
    },
    teamsChannelId: {
      baseName: "teams_channel_id",
      type: "string",
    },
    teamsChannelName: {
      baseName: "teams_channel_name",
      type: "string",
    },
    teamsTeamId: {
      baseName: "teams_team_id",
      type: "string",
    },
    teamsTeamName: {
      baseName: "teams_team_name",
      type: "string",
    },
    teamsTenantId: {
      baseName: "teams_tenant_id",
      type: "string",
    },
    teamsTenantName: {
      baseName: "teams_tenant_name",
      type: "string",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    weeklyExecutionDay: {
      baseName: "weekly_execution_day",
      type: "string",
    },
    weeklyExecutionTime: {
      baseName: "weekly_execution_time",
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
    return CostRecommendationNotificationRuleUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
