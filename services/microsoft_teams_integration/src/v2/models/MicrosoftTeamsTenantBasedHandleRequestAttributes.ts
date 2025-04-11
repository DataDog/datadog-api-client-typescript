import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tenant-based handle attributes.
 */
export class MicrosoftTeamsTenantBasedHandleRequestAttributes {
  /**
   * Channel id.
   */
  "channelId": string;
  /**
   * Tenant-based handle name.
   */
  "name": string;
  /**
   * Team id.
   */
  "teamId": string;
  /**
   * Tenant id.
   */
  "tenantId": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    teamId: {
      baseName: "team_id",
      type: "string",
      required: true,
    },
    tenantId: {
      baseName: "tenant_id",
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
    return MicrosoftTeamsTenantBasedHandleRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
