import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFormData } from "./CreateFormData";

/**
 * A request to create a form.
 */
export class CreateFormRequest {
  /**
   * The data for creating a form.
   */
  "data": CreateFormData;
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
      type: "CreateFormData",
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
    return CreateFormRequest.attributeTypeMap;
  }

  public constructor() {}
}
