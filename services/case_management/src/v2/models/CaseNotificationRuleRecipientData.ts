import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Recipient data
 */
export class CaseNotificationRuleRecipientData {
  /**
   * Slack channel name
   */
  "channel"?: string;
  /**
   * Slack channel ID
   */
  "channelId"?: string;
  /**
   * Microsoft Teams channel name
   */
  "channelName"?: string;
  /**
   * Microsoft Teams connector name
   */
  "connectorName"?: string;
  /**
   * Email address
   */
  "email"?: string;
  /**
   * HTTP webhook name
   */
  "name"?: string;
  /**
   * PagerDuty service name
   */
  "serviceName"?: string;
  /**
   * Microsoft Teams team ID
   */
  "teamId"?: string;
  /**
   * Microsoft Teams team name
   */
  "teamName"?: string;
  /**
   * Microsoft Teams tenant ID
   */
  "tenantId"?: string;
  /**
   * Microsoft Teams tenant name
   */
  "tenantName"?: string;
  /**
   * Slack workspace name
   */
  "workspace"?: string;
  /**
   * Slack workspace ID
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
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return CaseNotificationRuleRecipientData.attributeTypeMap;
  }

  public constructor() {}
}
