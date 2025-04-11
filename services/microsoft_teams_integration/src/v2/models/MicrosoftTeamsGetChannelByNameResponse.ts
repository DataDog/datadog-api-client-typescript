import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsChannelInfoResponseData } from "./MicrosoftTeamsChannelInfoResponseData";

/**
 * Response with channel, team, and tenant ID information.
 */
export class MicrosoftTeamsGetChannelByNameResponse {
  /**
   * Channel data from a response.
   */
  "data"?: MicrosoftTeamsChannelInfoResponseData;
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
    data: {
      baseName: "data",
      type: "MicrosoftTeamsChannelInfoResponseData",
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
    return MicrosoftTeamsGetChannelByNameResponse.attributeTypeMap;
  }

  public constructor() {}
}
