import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatTargetAudienceAttributes } from "./GoogleChatTargetAudienceAttributes";
import { GoogleChatTargetAudienceType } from "./GoogleChatTargetAudienceType";

/**
 * Google Chat target audience data from a response.
 */
export class GoogleChatTargetAudienceData {
  /**
   * Google Chat target audience attributes.
   */
  "attributes"?: GoogleChatTargetAudienceAttributes;
  /**
   * The ID of the target audience.
   */
  "id"?: string;
  /**
   * Google Chat target audience resource type.
   */
  "type"?: GoogleChatTargetAudienceType;
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
      type: "GoogleChatTargetAudienceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GoogleChatTargetAudienceType",
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
    return GoogleChatTargetAudienceData.attributeTypeMap;
  }

  public constructor() {}
}
