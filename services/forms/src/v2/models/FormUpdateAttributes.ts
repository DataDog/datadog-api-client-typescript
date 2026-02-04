import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormUpdateAttributesFormUpdate } from "./FormUpdateAttributesFormUpdate";

/**
 * Attributes for updating a form.
 */
export class FormUpdateAttributes {
  /**
   * Update parameters for the form.
   */
  "formUpdate"?: FormUpdateAttributesFormUpdate;
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
    formUpdate: {
      baseName: "form_update",
      type: "FormUpdateAttributesFormUpdate",
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
    return FormUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
