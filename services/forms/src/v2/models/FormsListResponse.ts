import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDataResponse } from "./FormDataResponse";

/**
 * Response containing a list of forms.
 */
export class FormsListResponse {
  /**
   * An array of forms.
   */
  "data": Array<FormDataResponse>;
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
    data: {
      baseName: "data",
      type: "Array<FormDataResponse>",
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
    return FormsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
