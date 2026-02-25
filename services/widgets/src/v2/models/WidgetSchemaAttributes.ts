import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Definition } from "./Definition";

export class WidgetSchemaAttributes {
  /**
   * ISO 8601 timestamp of when the widget was created.
   */
  "createdAt": string;
  /**
   * The definition of a widget, including its type and configuration.
   */
  "definition": Definition;
  /**
   * Deprecated: this field is not functional and always returns False.
   */
  "isFavorited": boolean;
  /**
   * ISO 8601 timestamp of when the widget was last modified.
   */
  "modifiedAt": string;
  /**
   * User-defined tags for organizing widgets.
   */
  "tags": Array<string>;
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
      type: "string",
      required: true,
    },
    definition: {
      baseName: "definition",
      type: "Definition",
      required: true,
    },
    isFavorited: {
      baseName: "is_favorited",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return WidgetSchemaAttributes.attributeTypeMap;
  }

  public constructor() {}
}
