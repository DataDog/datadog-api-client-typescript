import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormType } from "./FormType";
import { UpdateFormDataAttributes } from "./UpdateFormDataAttributes";

/**
 * The data for updating a form.
 */
export class UpdateFormData {
  /**
   * The attributes for updating a form.
   */
  "attributes": UpdateFormDataAttributes;
  /**
   * The ID of the form.
   */
  "id"?: string;
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
      type: "UpdateFormDataAttributes",
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
    return UpdateFormData.attributeTypeMap;
  }

  public constructor() {}
}
