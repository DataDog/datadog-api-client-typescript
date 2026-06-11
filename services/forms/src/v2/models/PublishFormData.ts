import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormPublicationType } from "./FormPublicationType";
import { PublishFormDataAttributes } from "./PublishFormDataAttributes";

/**
 * The data for publishing a form version.
 */
export class PublishFormData {
  /**
   * The attributes for publishing a form version.
   */
  "attributes": PublishFormDataAttributes;
  /**
   * The resource type for a form publication.
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
      type: "PublishFormDataAttributes",
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
    return PublishFormData.attributeTypeMap;
  }

  public constructor() {}
}
