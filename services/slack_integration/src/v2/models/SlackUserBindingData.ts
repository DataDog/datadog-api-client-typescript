import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SlackUserBindingType } from "./SlackUserBindingType";

/**
 * Slack team ID data from a response.
 */
export class SlackUserBindingData {
  /**
   * The Slack team ID.
   */
  "id"?: string;
  /**
   * Slack user binding resource type.
   */
  "type"?: SlackUserBindingType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SlackUserBindingType",
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
    return SlackUserBindingData.attributeTypeMap;
  }

  public constructor() {}
}
