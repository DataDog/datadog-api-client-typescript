import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Channel attributes.
 */
export class MicrosoftTeamsChannelInfoResponseAttributes {
  /**
   * Indicates if this is the primary channel.
   */
  "isPrimary"?: boolean;
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
    isPrimary: {
      baseName: "is_primary",
      type: "boolean",
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
    return MicrosoftTeamsChannelInfoResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
