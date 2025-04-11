import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsChannelInfoResponseAttributes } from "./MicrosoftTeamsChannelInfoResponseAttributes";
import { MicrosoftTeamsChannelInfoType } from "./MicrosoftTeamsChannelInfoType";

/**
 * Channel data from a response.
 */
export class MicrosoftTeamsChannelInfoResponseData {
  /**
   * Channel attributes.
   */
  "attributes"?: MicrosoftTeamsChannelInfoResponseAttributes;
  /**
   * The ID of the channel.
   */
  "id"?: string;
  /**
   * Channel info resource type.
   */
  "type"?: MicrosoftTeamsChannelInfoType;
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
    attributes: {
      baseName: "attributes",
      type: "MicrosoftTeamsChannelInfoResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsChannelInfoType",
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
    return MicrosoftTeamsChannelInfoResponseData.attributeTypeMap;
  }

  public constructor() {}
}
