import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloneFormDataAttributes } from "./CloneFormDataAttributes";
import { FormType } from "./FormType";

/**
 * The data for cloning a form.
 */
export class CloneFormData {
  /**
   * The attributes for cloning a form.
   */
  "attributes"?: CloneFormDataAttributes;
  /**
   * The resource type for a form.
   */
  "type": FormType;
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
    attributes: {
      baseName: "attributes",
      type: "CloneFormDataAttributes",
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
    return CloneFormData.attributeTypeMap;
  }

  public constructor() {}
}
