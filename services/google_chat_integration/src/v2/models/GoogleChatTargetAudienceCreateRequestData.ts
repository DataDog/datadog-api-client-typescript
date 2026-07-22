import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatTargetAudienceCreateRequestAttributes } from "./GoogleChatTargetAudienceCreateRequestAttributes";
import { GoogleChatTargetAudienceType } from "./GoogleChatTargetAudienceType";

/**
 * Data for a create target audience request.
 */
export class GoogleChatTargetAudienceCreateRequestData {
  /**
   * Attributes for creating a Google Chat target audience.
   */
  "attributes": GoogleChatTargetAudienceCreateRequestAttributes;
  /**
   * Google Chat target audience resource type.
   */
  "type": GoogleChatTargetAudienceType;
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
    attributes: {
      baseName: "attributes",
      type: "GoogleChatTargetAudienceCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GoogleChatTargetAudienceType",
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
    return GoogleChatTargetAudienceCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
