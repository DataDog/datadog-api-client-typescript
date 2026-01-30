import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowWebhookExecutionResponseData } from "./WorkflowWebhookExecutionResponseData";

export class WorkflowWebhookExecutionResponse {
  "data": WorkflowWebhookExecutionResponseData;
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
      type: "WorkflowWebhookExecutionResponseData",
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
    return WorkflowWebhookExecutionResponse.attributeTypeMap;
  }

  public constructor() {}
}
