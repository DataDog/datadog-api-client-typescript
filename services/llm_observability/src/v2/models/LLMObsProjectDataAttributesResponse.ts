import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an LLM Observability project.
 */
export class LLMObsProjectDataAttributesResponse {
  /**
   * Timestamp when the project was created.
   */
  "createdAt": Date;
  /**
   * Description of the project.
   */
  "description": string | null;
  /**
   * Name of the project.
   */
  "name": string;
  /**
   * Timestamp when the project was last updated.
   */
  "updatedAt": Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return LLMObsProjectDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
