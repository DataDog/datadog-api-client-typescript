import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDataDefinition } from "./FormDataDefinition";
import { FormUiDefinition } from "./FormUiDefinition";

/**
 * The attributes for creating a form.
 */
export class CreateFormDataAttributes {
  /**
   * Whether the form accepts anonymous submissions.
   */
  "anonymous"?: boolean;
  /**
   * A JSON Schema definition that describes the form's data fields.
   */
  "dataDefinition": FormDataDefinition;
  /**
   * The description of the form.
   */
  "description"?: string;
  /**
   * Whether the form is an IDP survey.
   */
  "idpSurvey"?: boolean;
  /**
   * The name of the form.
   */
  "name": string;
  /**
   * Whether each user can only submit one response.
   */
  "singleResponse"?: boolean;
  /**
   * UI configuration for rendering form fields, including widget overrides, field ordering, and themes.
   */
  "uiDefinition": FormUiDefinition;
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
    anonymous: {
      baseName: "anonymous",
      type: "boolean",
    },
    dataDefinition: {
      baseName: "data_definition",
      type: "FormDataDefinition",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    idpSurvey: {
      baseName: "idp_survey",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    singleResponse: {
      baseName: "single_response",
      type: "boolean",
    },
    uiDefinition: {
      baseName: "ui_definition",
      type: "FormUiDefinition",
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
    return CreateFormDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
