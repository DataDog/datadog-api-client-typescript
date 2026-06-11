import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDataDefinition } from "./FormDataDefinition";
import { FormUiDefinition } from "./FormUiDefinition";
import { UpsertAndPublishFormVersionUpsertParams } from "./UpsertAndPublishFormVersionUpsertParams";

/**
 * The attributes for upserting and publishing a form version.
 */
export class UpsertAndPublishFormVersionDataAttributes {
  /**
   * A JSON Schema definition that describes the form's data fields.
   */
  "dataDefinition": FormDataDefinition;
  /**
   * UI configuration for rendering form fields, including widget overrides, field ordering, and themes.
   */
  "uiDefinition": FormUiDefinition;
  /**
   * Concurrency control parameters for the upsert and publish operation.
   */
  "upsertParams": UpsertAndPublishFormVersionUpsertParams;
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
      type: "FormDataDefinition",
      required: true,
    },
    uiDefinition: {
      baseName: "ui_definition",
      type: "FormUiDefinition",
      required: true,
    },
    upsertParams: {
      baseName: "upsert_params",
      type: "UpsertAndPublishFormVersionUpsertParams",
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
    return UpsertAndPublishFormVersionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
