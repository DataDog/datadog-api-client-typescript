import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowWebhookExecutionResponseAttributes } from "./WorkflowWebhookExecutionResponseAttributes";
import { WorkflowWebhookExecutionResponseType } from "./WorkflowWebhookExecutionResponseType";

export class WorkflowWebhookExecutionResponseData {
  "attributes": WorkflowWebhookExecutionResponseAttributes;
  /**
   * The unique identifier of the execution
   */
  "id": string;
  /**
   * The type for workflow webhook execution response
   */
  "type": WorkflowWebhookExecutionResponseType;
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
      type: "WorkflowWebhookExecutionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WorkflowWebhookExecutionResponseType",
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
    return WorkflowWebhookExecutionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
