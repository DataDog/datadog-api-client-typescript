import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsWorkflowsWebhookHandleResponseData } from "./MicrosoftTeamsWorkflowsWebhookHandleResponseData";

/**
 * Response with a list of Workflows webhook handles.
 */
export class MicrosoftTeamsWorkflowsWebhookHandlesResponse {
  /**
   * An array of Workflows webhook handles.
   */
  "data": Array<MicrosoftTeamsWorkflowsWebhookHandleResponseData>;
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
      type: "Array<MicrosoftTeamsWorkflowsWebhookHandleResponseData>",
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
    return MicrosoftTeamsWorkflowsWebhookHandlesResponse.attributeTypeMap;
  }

  public constructor() {}
}
