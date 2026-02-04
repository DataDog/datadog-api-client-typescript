import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormPublicationAttributes } from "./FormPublicationAttributes";
import { FormPublicationType } from "./FormPublicationType";

export class FormPublicationDataRequest {
  "attributes": FormPublicationAttributes;
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
      type: "FormPublicationAttributes",
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
    return FormPublicationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
