import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsWorkflowsWebhookHandleAttributes } from "./MicrosoftTeamsWorkflowsWebhookHandleAttributes";
import { MicrosoftTeamsWorkflowsWebhookHandleType } from "./MicrosoftTeamsWorkflowsWebhookHandleType";

/**
 * Workflows Webhook handle data from a response.
 */
export class MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData {
  /**
   * Workflows Webhook handle attributes.
   */
  "attributes": MicrosoftTeamsWorkflowsWebhookHandleAttributes;
  /**
   * Specifies the Workflows webhook handle resource type.
   */
  "type": MicrosoftTeamsWorkflowsWebhookHandleType;
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
      type: "MicrosoftTeamsWorkflowsWebhookHandleAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsWorkflowsWebhookHandleType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
