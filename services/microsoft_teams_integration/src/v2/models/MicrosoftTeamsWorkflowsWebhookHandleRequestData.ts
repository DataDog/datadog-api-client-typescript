import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes } from "./MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes";
import { MicrosoftTeamsWorkflowsWebhookHandleType } from "./MicrosoftTeamsWorkflowsWebhookHandleType";

/**
 * Workflows Webhook handle data from a response.
 */
export class MicrosoftTeamsWorkflowsWebhookHandleRequestData {
  /**
   * Workflows Webhook handle attributes.
   */
  "attributes": MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes;
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
      type: "MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsWorkflowsWebhookHandleType",
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
    return MicrosoftTeamsWorkflowsWebhookHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
