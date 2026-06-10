import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFormDataAttributes } from "./CreateFormDataAttributes";
import { FormType } from "./FormType";

/**
 * The data for creating a form.
 */
export class CreateFormData {
  /**
   * The attributes for creating a form.
   */
  "attributes": CreateFormDataAttributes;
  /**
   * The resource type for a form.
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
      type: "CreateFormDataAttributes",
      required: true,
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
    return CreateFormData.attributeTypeMap;
  }

  public constructor() {}
}
