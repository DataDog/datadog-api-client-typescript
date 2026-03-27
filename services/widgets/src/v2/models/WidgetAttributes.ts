import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetDefinition } from "./WidgetDefinition";

/**
 * Attributes of a widget resource.
 */
export class WidgetAttributes {
  /**
   * ISO 8601 timestamp of when the widget was created.
   */
  "createdAt": string;
  /**
   * The definition of a widget, including its type and configuration.
   */
  "definition": WidgetDefinition;
  /**
   * Will be implemented soon. Currently always returns false.
   */
  "isFavorited": boolean;
  /**
   * ISO 8601 timestamp of when the widget was last modified.
   */
  "modifiedAt": string;
  /**
   * User-defined tags for organizing widgets.
   */
  "tags": Array<string> | null;
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
      type: "WidgetDefinition",
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
    return WidgetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
