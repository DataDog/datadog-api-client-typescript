import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionState } from "./FormVersionState";
import { FormVersionUpsertParams } from "./FormVersionUpsertParams";

export class FormVersionAttributes {
  /**
   * The data definition for the form.
   */
  "dataDefinition": any;
  /**
   * The state of the form version.
   */
  "state"?: FormVersionState;
  /**
   * The UI definition for the form.
   */
  "uiDefinition": any;
  /**
   * Parameters for upserting a form version.
   */
  "upsertParams": FormVersionUpsertParams;
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
    dataDefinition: {
      baseName: "data_definition",
      type: "any",
      required: true,
    },
    state: {
      baseName: "state",
      type: "FormVersionState",
    },
    uiDefinition: {
      baseName: "ui_definition",
      type: "any",
      required: true,
    },
    upsertParams: {
      baseName: "upsert_params",
      type: "FormVersionUpsertParams",
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
    return FormVersionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
