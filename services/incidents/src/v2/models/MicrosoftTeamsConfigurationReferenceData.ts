import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Microsoft Teams configuration relationship data object.
 */
export class MicrosoftTeamsConfigurationReferenceData {
  /**
   * The unique identifier of the Microsoft Teams configuration.
   */
  "id": string;
  /**
   * The type of the Microsoft Teams configuration.
   */
  "type": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return MicrosoftTeamsConfigurationReferenceData.attributeTypeMap;
  }

  public constructor() {}
}
