import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormUiDefinitionUiTheme } from "./FormUiDefinitionUiTheme";

/**
 * UI configuration for rendering form fields, including widget overrides, field ordering, and themes.
 */
export class FormUiDefinition {
  /**
   * The order in which form fields are displayed.
   */
  "uiOrder"?: Array<string>;
  /**
   * The visual theme applied to the form.
   */
  "uiTheme"?: FormUiDefinitionUiTheme;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    uiOrder: {
      baseName: "ui:order",
      type: "Array<string>",
    },
    uiTheme: {
      baseName: "ui:theme",
      type: "FormUiDefinitionUiTheme",
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
    return FormUiDefinition.attributeTypeMap;
  }

  public constructor() {}
}
