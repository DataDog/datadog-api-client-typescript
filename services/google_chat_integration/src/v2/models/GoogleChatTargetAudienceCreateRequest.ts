import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatTargetAudienceCreateRequestData } from "./GoogleChatTargetAudienceCreateRequestData";

/**
 * Create target audience request.
 */
export class GoogleChatTargetAudienceCreateRequest {
  /**
   * Data for a create target audience request.
   */
  "data": GoogleChatTargetAudienceCreateRequestData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "GoogleChatTargetAudienceCreateRequestData",
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
    return GoogleChatTargetAudienceCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
