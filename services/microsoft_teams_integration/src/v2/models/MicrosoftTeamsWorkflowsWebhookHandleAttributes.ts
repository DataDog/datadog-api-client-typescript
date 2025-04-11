import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Workflows Webhook handle attributes.
 */
export class MicrosoftTeamsWorkflowsWebhookHandleAttributes {
  /**
   * Workflows Webhook handle name.
   */
  "name"?: string;
  /**
   * Workflows Webhook URL.
   */
  "url"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return MicrosoftTeamsWorkflowsWebhookHandleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
