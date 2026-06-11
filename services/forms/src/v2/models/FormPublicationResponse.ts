import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormPublicationData } from "./FormPublicationData";

/**
 * A response containing a single form publication.
 */
export class FormPublicationResponse {
  /**
   * A form publication resource object.
   */
  "data": FormPublicationData;
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
      type: "FormPublicationData",
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
    return FormPublicationResponse.attributeTypeMap;
  }

  public constructor() {}
}
