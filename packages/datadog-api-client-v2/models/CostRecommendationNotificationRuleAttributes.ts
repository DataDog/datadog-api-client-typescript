/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationNotificationRuleDestinationType } from "./CostRecommendationNotificationRuleDestinationType";
import { CostRecommendationNotificationRuleFrequency } from "./CostRecommendationNotificationRuleFrequency";
import { CostRecommendationNotificationRuleMessageCustomization } from "./CostRecommendationNotificationRuleMessageCustomization";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes of a recommendation notification rule.
 */
export class CostRecommendationNotificationRuleAttributes {
  /**
   * The Slack channel ID. Empty for `teams` rules.
   */
  "channelId": string;
  /**
   * When the rule was created.
   */
  "createdAt": Date;
  /**
   * The UUID of the user who created the rule.
   */
  "createdBy": string;
  /**
   * Where the digest is sent. `slack` requires `workspace_id` and `channel_id`; `teams` requires the
   * `teams_*` attributes. Defaults to `slack`.
   */
  "destinationType": CostRecommendationNotificationRuleDestinationType;
  /**
   * Whether the digest is sent.
   */
  "enabled": boolean;
  /**
   * How often the digest is sent. `weekly` and `biweekly` use `weekly_execution_day` and `weekly_execution_time`;
   * `every_30` and `every_90` (days) use `interval_execution_date` and `interval_execution_time`.
   */
  "frequency": CostRecommendationNotificationRuleFrequency;
  /**
   * The first date (`YYYY-MM-DD`) of an `every_30` or `every_90` schedule.
   */
  "intervalExecutionDate": string | null;
  /**
   * The time of day (`HH:MM`, in `timezone`) of an `every_30` or `every_90` schedule.
   */
  "intervalExecutionTime": string | null;
  /**
   * Slack member IDs to mention in the digest. Only valid for `slack` rules.
   */
  "mentionTargets": Array<string>;
  /**
   * Which sections the digest shows. Sent as a whole: sections left out of a request use their defaults, which
   * show everything.
   */
  "messageCustomization": CostRecommendationNotificationRuleMessageCustomization;
  /**
   * When the rule was last modified.
   */
  "modifiedAt": Date;
  /**
   * The UUID of the user who last modified the rule.
   */
  "modifiedBy": string;
  /**
   * The name of the rule, unique within the organization.
   */
  "name": string;
  /**
   * The ID of the organization that owns the rule.
   */
  "orgId": Int64;
  /**
   * The recommendation search query that selects what the digest includes. Empty selects every recommendation.
   */
  "scopeQuery": string;
  /**
   * The Microsoft Teams channel ID. Empty for `slack` rules.
   */
  "teamsChannelId": string;
  /**
   * The Microsoft Teams channel name. Empty for `slack` rules.
   */
  "teamsChannelName": string;
  /**
   * The Microsoft Teams team ID. Empty for `slack` rules.
   */
  "teamsTeamId": string;
  /**
   * The Microsoft Teams team name. Empty for `slack` rules.
   */
  "teamsTeamName": string;
  /**
   * The Microsoft Teams tenant ID. Empty for `slack` rules.
   */
  "teamsTenantId": string;
  /**
   * The Microsoft Teams tenant name. Empty for `slack` rules.
   */
  "teamsTenantName": string;
  /**
   * The IANA time zone of the schedule.
   */
  "timezone": string;
  /**
   * The day of the week of a `weekly` or `biweekly` schedule, such as `monday`.
   */
  "weeklyExecutionDay": string | null;
  /**
   * The time of day (`HH:MM`, in `timezone`) of a `weekly` or `biweekly` schedule.
   */
  "weeklyExecutionTime": string | null;
  /**
   * The Slack workspace ID. Empty for `teams` rules.
   */
  "workspaceId": string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    destinationType: {
      baseName: "destination_type",
      type: "CostRecommendationNotificationRuleDestinationType",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    frequency: {
      baseName: "frequency",
      type: "CostRecommendationNotificationRuleFrequency",
      required: true,
    },
    intervalExecutionDate: {
      baseName: "interval_execution_date",
      type: "string",
      required: true,
    },
    intervalExecutionTime: {
      baseName: "interval_execution_time",
      type: "string",
      required: true,
    },
    mentionTargets: {
      baseName: "mention_targets",
      type: "Array<string>",
      required: true,
    },
    messageCustomization: {
      baseName: "message_customization",
      type: "CostRecommendationNotificationRuleMessageCustomization",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    scopeQuery: {
      baseName: "scope_query",
      type: "string",
      required: true,
    },
    teamsChannelId: {
      baseName: "teams_channel_id",
      type: "string",
      required: true,
    },
    teamsChannelName: {
      baseName: "teams_channel_name",
      type: "string",
      required: true,
    },
    teamsTeamId: {
      baseName: "teams_team_id",
      type: "string",
      required: true,
    },
    teamsTeamName: {
      baseName: "teams_team_name",
      type: "string",
      required: true,
    },
    teamsTenantId: {
      baseName: "teams_tenant_id",
      type: "string",
      required: true,
    },
    teamsTenantName: {
      baseName: "teams_tenant_name",
      type: "string",
      required: true,
    },
    timezone: {
      baseName: "timezone",
      type: "string",
      required: true,
    },
    weeklyExecutionDay: {
      baseName: "weekly_execution_day",
      type: "string",
      required: true,
    },
    weeklyExecutionTime: {
      baseName: "weekly_execution_time",
      type: "string",
      required: true,
    },
    workspaceId: {
      baseName: "workspace_id",
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
    return CostRecommendationNotificationRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
