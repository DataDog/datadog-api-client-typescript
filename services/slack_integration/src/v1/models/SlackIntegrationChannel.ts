import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SlackIntegrationChannelDisplay } from "./SlackIntegrationChannelDisplay";

/**
 * The Slack channel configuration.
 */
export class SlackIntegrationChannel {
  /**
   * Configuration options for what is shown in an alert event message.
   */
  "display"?: SlackIntegrationChannelDisplay;
  /**
   * Your channel name.
   */
  "name"?: string;
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
    display: {
      baseName: "display",
      type: "SlackIntegrationChannelDisplay",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SlackIntegrationChannel.attributeTypeMap;
  }

  public constructor() {}
}
