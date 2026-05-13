import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIWorkflowAttributes } from "./AIWorkflowAttributes";
import { AIWorkflowDataType } from "./AIWorkflowDataType";

/**
 * A single AI workflow resource.
 */
export class AIWorkflowData {
  /**
   * Attributes of an AI workflow.
   */
  "attributes": AIWorkflowAttributes;
  /**
   * The unique identifier of the AI workflow.
   */
  "id": string;
  /**
   * The resource type for AI workflows.
   */
  "type": AIWorkflowDataType;
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
      type: "AIWorkflowAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AIWorkflowDataType",
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
    return AIWorkflowData.attributeTypeMap;
  }

  public constructor() {}
}
