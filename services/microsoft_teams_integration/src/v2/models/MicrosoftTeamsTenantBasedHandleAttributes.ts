import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tenant-based handle attributes.
 */
export class MicrosoftTeamsTenantBasedHandleAttributes {
  /**
   * Channel id.
   */
  "channelId"?: string;
  /**
   * Tenant-based handle name.
   */
  "name"?: string;
  /**
   * Team id.
   */
  "teamId"?: string;
  /**
   * Tenant id.
   */
  "tenantId"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
    },
    tenantId: {
      baseName: "tenant_id",
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
    return MicrosoftTeamsTenantBasedHandleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
