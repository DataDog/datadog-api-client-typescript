import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatTargetAudienceType } from "./GoogleChatTargetAudienceType";
import { GoogleChatTargetAudienceUpdateRequestAttributes } from "./GoogleChatTargetAudienceUpdateRequestAttributes";

/**
 * Data for an update target audience request.
 */
export class GoogleChatTargetAudienceUpdateRequestData {
  /**
   * Attributes for updating a Google Chat target audience.
   */
  "attributes": GoogleChatTargetAudienceUpdateRequestAttributes;
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
      type: "GoogleChatTargetAudienceUpdateRequestAttributes",
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
    return GoogleChatTargetAudienceUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
