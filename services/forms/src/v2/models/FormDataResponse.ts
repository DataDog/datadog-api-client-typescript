import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDataAttributesResponse } from "./FormDataAttributesResponse";
import { FormType } from "./FormType";

export class FormDataResponse {
  /**
   * Attributes of a form.
   */
  "attributes": FormDataAttributesResponse;
  /**
   * The form identifier.
   */
  "id": string;
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
      type: "FormDataAttributesResponse",
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
    return FormDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
