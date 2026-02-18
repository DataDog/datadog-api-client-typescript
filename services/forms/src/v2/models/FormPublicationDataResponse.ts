import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormPublication } from "./FormPublication";
import { FormPublicationType } from "./FormPublicationType";

export class FormPublicationDataResponse {
  /**
   * Publication information for the form.
   */
  "attributes": FormPublication;
  /**
   * The publication identifier.
   */
  "id": string;
  /**
   * Type for form publications.
   */
  "type": FormPublicationType;
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
      type: "FormPublication",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormPublicationType",
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
    return FormPublicationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
