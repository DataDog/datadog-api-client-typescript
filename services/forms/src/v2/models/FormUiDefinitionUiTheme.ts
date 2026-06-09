import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormUiDefinitionUiThemePrimaryColor } from "./FormUiDefinitionUiThemePrimaryColor";

/**
 * The visual theme applied to the form.
 */
export class FormUiDefinitionUiTheme {
  /**
   * The primary color of the form theme.
   */
  "primaryColor"?: FormUiDefinitionUiThemePrimaryColor;
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
    primaryColor: {
      baseName: "primaryColor",
      type: "FormUiDefinitionUiThemePrimaryColor",
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
    return FormUiDefinitionUiTheme.attributeTypeMap;
  }

  public constructor() {}
}
