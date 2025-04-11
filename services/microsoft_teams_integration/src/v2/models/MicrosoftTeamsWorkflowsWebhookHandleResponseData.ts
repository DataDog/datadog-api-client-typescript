import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsWorkflowsWebhookHandleType } from "./MicrosoftTeamsWorkflowsWebhookHandleType";
import { MicrosoftTeamsWorkflowsWebhookResponseAttributes } from "./MicrosoftTeamsWorkflowsWebhookResponseAttributes";

/**
 * Workflows Webhook handle data from a response.
 */
export class MicrosoftTeamsWorkflowsWebhookHandleResponseData {
  /**
   * Workflows Webhook handle attributes.
   */
  "attributes"?: MicrosoftTeamsWorkflowsWebhookResponseAttributes;
  /**
   * The ID of the Workflows webhook handle.
   */
  "id"?: string;
  /**
   * Specifies the Workflows webhook handle resource type.
   */
  "type"?: MicrosoftTeamsWorkflowsWebhookHandleType;
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
    attributes: {
      baseName: "attributes",
      type: "MicrosoftTeamsWorkflowsWebhookResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsWorkflowsWebhookHandleType",
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
    return MicrosoftTeamsWorkflowsWebhookHandleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
