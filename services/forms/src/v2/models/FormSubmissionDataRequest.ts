import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormSubmissionAttributes } from "./FormSubmissionAttributes";
import { FormSubmissionType } from "./FormSubmissionType";

export class FormSubmissionDataRequest {
  "attributes": FormSubmissionAttributes;
  /**
   * Type for form submissions.
   */
  "type": FormSubmissionType;
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
      type: "FormSubmissionAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormSubmissionType",
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
    return FormSubmissionDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
