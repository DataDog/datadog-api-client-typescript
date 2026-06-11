import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormUpdateAttributes } from "./FormUpdateAttributes";

/**
 * The attributes for updating a form.
 */
export class UpdateFormDataAttributes {
  /**
   * The fields to update on a form. At least one field must be provided.
   */
  "formUpdate": FormUpdateAttributes;
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
      type: "FormUpdateAttributes",
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
    return UpdateFormDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
