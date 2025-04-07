import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing the template variable's name, associated tag/attribute, default value and selectable values.
 */
export class SelectableTemplateVariableItems {
  /**
   * The default value of the template variable.
   */
  "defaultValue"?: string;
  /**
   * Name of the template variable.
   */
  "name"?: string;
  /**
   * The tag/attribute key associated with the template variable.
   */
  "prefix"?: string;
  /**
   * List of visible tag values on the shared dashboard.
   */
  "visibleTags"?: Array<string>;
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
    defaultValue: {
      baseName: "default_value",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    prefix: {
      baseName: "prefix",
      type: "string",
    },
    visibleTags: {
      baseName: "visible_tags",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SelectableTemplateVariableItems.attributeTypeMap;
  }

  public constructor() {}
}
