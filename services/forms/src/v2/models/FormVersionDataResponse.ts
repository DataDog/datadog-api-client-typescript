import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionDataAttributesResponse } from "./FormVersionDataAttributesResponse";
import { FormVersionType } from "./FormVersionType";

export class FormVersionDataResponse {
  /**
   * Attributes of a form version.
   */
  "attributes": FormVersionDataAttributesResponse;
  /**
   * The version identifier.
   */
  "id": string;
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
      type: "FormVersionDataAttributesResponse",
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
    return FormVersionDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
