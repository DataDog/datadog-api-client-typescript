import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFormData } from "./UpdateFormData";

/**
 * A request to update a form.
 */
export class UpdateFormRequest {
  /**
   * The data for updating a form.
   */
  "data": UpdateFormData;
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
    data: {
      baseName: "data",
      type: "UpdateFormData",
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
    return UpdateFormRequest.attributeTypeMap;
  }

  public constructor() {}
}
