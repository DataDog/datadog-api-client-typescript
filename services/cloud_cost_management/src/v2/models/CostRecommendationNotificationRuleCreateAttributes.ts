import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationNotificationRuleDestinationType } from "./CostRecommendationNotificationRuleDestinationType";
import { CostRecommendationNotificationRuleFrequency } from "./CostRecommendationNotificationRuleFrequency";
import { CostRecommendationNotificationRuleMessageCustomization } from "./CostRecommendationNotificationRuleMessageCustomization";

/**
 * Attributes of a new recommendation notification rule. Schedule attributes depend on `frequency` and target
 * attributes depend on `destination_type`.
 */
export class CostRecommendationNotificationRuleCreateAttributes {
  /**
   * The Slack channel ID, starting with `C` or `G`. Required for `slack` rules.
   */
  "channelId"?: string;
  /**
   * Where the digest is sent. `slack` requires `workspace_id` and `channel_id`; `teams` requires the
   * `teams_*` attributes. Defaults to `slack`.
   */
  "destinationType"?: CostRecommendationNotificationRuleDestinationType;
  /**
   * Whether the digest is sent. Defaults to `true`.
   */
  "enabled"?: boolean;
  /**
   * How often the digest is sent. `weekly` and `biweekly` use `weekly_execution_day` and `weekly_execution_time`;
   * `every_30` and `every_90` (days) use `interval_execution_date` and `interval_execution_time`.
   */
  "frequency": CostRecommendationNotificationRuleFrequency;
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
  "name": string;
  /**
   * The recommendation search query that selects what the digest includes. Empty selects every recommendation.
   */
  "scopeQuery"?: string;
  /**
   * The Microsoft Teams channel ID. Required for `teams` rules.
   */
  "teamsChannelId"?: string;
  /**
   * The Microsoft Teams channel name. Required for `teams` rules.
   */
  "teamsChannelName"?: string;
  /**
   * The Microsoft Teams team ID. Required for `teams` rules.
   */
  "teamsTeamId"?: string;
  /**
   * The Microsoft Teams team name. Required for `teams` rules.
   */
  "teamsTeamName"?: string;
  /**
   * The Microsoft Teams tenant ID. Required for `teams` rules.
   */
  "teamsTenantId"?: string;
  /**
   * The Microsoft Teams tenant name. Required for `teams` rules.
   */
  "teamsTenantName"?: string;
  /**
   * The IANA time zone of the schedule.
   */
  "timezone": string;
  /**
   * The day of the week of a `weekly` or `biweekly` schedule, such as `monday`.
   */
  "weeklyExecutionDay"?: string;
  /**
   * The time of day (`HH:MM`, in `timezone`) of a `weekly` or `biweekly` schedule.
   */
  "weeklyExecutionTime"?: string;
  /**
   * The Slack workspace ID, starting with `T`. Required for `slack` rules.
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
      required: true,
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
      required: true,
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
      required: true,
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
    return CostRecommendationNotificationRuleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
