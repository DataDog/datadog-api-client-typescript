import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormType } from "./FormType";
import { FormUpdateAttributes } from "./FormUpdateAttributes";

export class FormUpdateDataRequest {
  /**
   * Attributes for updating a form.
   */
  "attributes": FormUpdateAttributes;
  /**
   * The form identifier.
   */
  "id"?: string;
  /**
   * Type for forms.
   */
  "type": FormType;
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
    attributes: {
      baseName: "attributes",
      type: "FormUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "FormType",
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
    return FormUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
