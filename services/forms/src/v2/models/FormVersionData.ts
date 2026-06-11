import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionAttributes } from "./FormVersionAttributes";
import { FormVersionType } from "./FormVersionType";

/**
 * A form version resource object.
 */
export class FormVersionData {
  /**
   * The attributes of a form version.
   */
  "attributes": FormVersionAttributes;
  /**
   * The ID of the form version.
   */
  "id": string;
  /**
   * The resource type for a form version.
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
    id: {
      baseName: "id",
      type: "string",
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
    return FormVersionData.attributeTypeMap;
  }

  public constructor() {}
}
