import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatTargetAudienceUpdateRequestData } from "./GoogleChatTargetAudienceUpdateRequestData";

/**
 * Update target audience request.
 */
export class GoogleChatTargetAudienceUpdateRequest {
  /**
   * Data for an update target audience request.
   */
  "data": GoogleChatTargetAudienceUpdateRequestData;
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
      type: "GoogleChatTargetAudienceUpdateRequestData",
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
    return GoogleChatTargetAudienceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
