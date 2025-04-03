import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tenant-based handle attributes.
 */
export class MicrosoftTeamsTenantBasedHandleInfoResponseAttributes {
  /**
   * Channel id.
   */
  "channelId"?: string;
  /**
   * Channel name.
   */
  "channelName"?: string;
  /**
   * Tenant-based handle name.
   */
  "name"?: string;
  /**
   * Team id.
   */
  "teamId"?: string;
  /**
   * Team name.
   */
  "teamName"?: string;
  /**
   * Tenant id.
   */
  "tenantId"?: string;
  /**
   * Tenant name.
   */
  "tenantName"?: string;
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
    channelName: {
      baseName: "channel_name",
      type: "string",
    },
    name: {
      baseName: "name",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MicrosoftTeamsTenantBasedHandleInfoResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
