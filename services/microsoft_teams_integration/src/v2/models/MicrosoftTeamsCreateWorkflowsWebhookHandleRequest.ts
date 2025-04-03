import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsWorkflowsWebhookHandleRequestData } from "./MicrosoftTeamsWorkflowsWebhookHandleRequestData";

/**
 * Create Workflows webhook handle request.
 */
export class MicrosoftTeamsCreateWorkflowsWebhookHandleRequest {
  /**
   * Workflows Webhook handle data from a response.
   */
  "data": MicrosoftTeamsWorkflowsWebhookHandleRequestData;
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
    data: {
      baseName: "data",
      type: "MicrosoftTeamsWorkflowsWebhookHandleRequestData",
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
    return MicrosoftTeamsCreateWorkflowsWebhookHandleRequest.attributeTypeMap;
  }

  public constructor() {}
}
