import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a Google Chat target audience.
 */
export class GoogleChatTargetAudienceCreateRequestAttributes {
  /**
   * The audience ID.
   */
  "audienceId": string;
  /**
   * The audience name.
   */
  "audienceName": string;
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
    audienceId: {
      baseName: "audience_id",
      type: "string",
      required: true,
    },
    audienceName: {
      baseName: "audience_name",
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
    return GoogleChatTargetAudienceCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
