import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionAttributes } from "./FormVersionAttributes";
import { FormVersionType } from "./FormVersionType";

export class FormVersionDataRequest {
  "attributes": FormVersionAttributes;
  /**
   * Type for form versions.
   */
  "type": FormVersionType;
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
      type: "FormVersionAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormVersionType",
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
    return FormVersionDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
