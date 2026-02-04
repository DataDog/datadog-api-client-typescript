import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormSubmissionType } from "./FormSubmissionType";

export class FormSubmissionDataResponse {
  /**
   * The submission identifier.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return FormSubmissionDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
