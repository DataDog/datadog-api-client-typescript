import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDataAttributes } from "./FormDataAttributes";
import { FormType } from "./FormType";

/**
 * A form resource object.
 */
export class FormData {
  /**
   * The attributes of a form.
   */
  "attributes": FormDataAttributes;
  /**
   * The ID of the form.
   */
  "id": string;
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
      type: "FormDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return FormData.attributeTypeMap;
  }

  public constructor() {}
}
