import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class UpdateConnectionRequestDataAttributesFieldsToUpdateItems {
  "fieldId": string;
  "updatedDescription"?: string;
  "updatedDisplayName"?: string;
  "updatedFieldId"?: string;
  "updatedGroups"?: Array<string>;
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
    fieldId: {
      baseName: "field_id",
      type: "string",
      required: true,
    },
    updatedDescription: {
      baseName: "updated_description",
      type: "string",
    },
    updatedDisplayName: {
      baseName: "updated_display_name",
      type: "string",
    },
    updatedFieldId: {
      baseName: "updated_field_id",
      type: "string",
    },
    updatedGroups: {
      baseName: "updated_groups",
      type: "Array<string>",
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
    return UpdateConnectionRequestDataAttributesFieldsToUpdateItems.attributeTypeMap;
  }

  public constructor() {}
}
