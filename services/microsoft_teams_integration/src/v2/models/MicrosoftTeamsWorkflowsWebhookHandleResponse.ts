import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsWorkflowsWebhookHandleResponseData } from "./MicrosoftTeamsWorkflowsWebhookHandleResponseData";

/**
 * Response of a Workflows webhook handle.
 */
export class MicrosoftTeamsWorkflowsWebhookHandleResponse {
  /**
   * Workflows Webhook handle data from a response.
   */
  "data": MicrosoftTeamsWorkflowsWebhookHandleResponseData;
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
      type: "MicrosoftTeamsWorkflowsWebhookHandleResponseData",
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
    return MicrosoftTeamsWorkflowsWebhookHandleResponse.attributeTypeMap;
  }

  public constructor() {}
}
