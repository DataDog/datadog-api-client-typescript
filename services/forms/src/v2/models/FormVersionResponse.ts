import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionData } from "./FormVersionData";

/**
 * A response containing a single form version.
 */
export class FormVersionResponse {
  /**
   * A form version resource object.
   */
  "data": FormVersionData;
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
      type: "FormVersionData",
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
    return FormVersionResponse.attributeTypeMap;
  }

  public constructor() {}
}
