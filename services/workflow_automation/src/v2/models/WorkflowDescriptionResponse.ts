import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class WorkflowDescriptionResponse {
  /**
   * The generated workflow description.
   */
  "description": string;
  /**
   * The generation ID.
   */
  "id": string;
  /**
   * A brief summary of the workflow.
   */
  "summary": string;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    summary: {
      baseName: "summary",
      type: "string",
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
    return WorkflowDescriptionResponse.attributeTypeMap;
  }

  public constructor() {}
}
