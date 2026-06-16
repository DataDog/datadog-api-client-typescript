/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormUiDefinitionUiTheme } from "./FormUiDefinitionUiTheme";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "additionalProperties"?: { [key: string]: any };

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
