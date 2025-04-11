import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Item in the Microsoft Teams integration metadata teams array.
 */
export class MSTeamsIntegrationMetadataTeamsItem {
  /**
   * Microsoft Teams channel ID.
   */
  "msChannelId": string;
  /**
   * Microsoft Teams channel name.
   */
  "msChannelName": string;
  /**
   * Microsoft Teams tenant ID.
   */
  "msTenantId": string;
  /**
   * URL redirecting to the Microsoft Teams channel.
   */
  "redirectUrl": string;
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
    msChannelId: {
      baseName: "ms_channel_id",
      type: "string",
      required: true,
    },
    msChannelName: {
      baseName: "ms_channel_name",
      type: "string",
      required: true,
    },
    msTenantId: {
      baseName: "ms_tenant_id",
      type: "string",
      required: true,
    },
    redirectUrl: {
      baseName: "redirect_url",
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
    return MSTeamsIntegrationMetadataTeamsItem.attributeTypeMap;
  }

  public constructor() {}
}
