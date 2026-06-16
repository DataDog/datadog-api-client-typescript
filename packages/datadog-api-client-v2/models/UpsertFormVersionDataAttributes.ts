/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormDataDefinition } from "./FormDataDefinition";
import { FormUiDefinition } from "./FormUiDefinition";
import { FormVersionState } from "./FormVersionState";
import { UpsertFormVersionUpsertParams } from "./UpsertFormVersionUpsertParams";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes for creating or updating a form version.
 */
export class UpsertFormVersionDataAttributes {
  /**
   * A JSON Schema definition that describes the form's data fields.
   */
  "dataDefinition": FormDataDefinition;
  /**
   * The state of a form version.
   */
  "state": FormVersionState;
  /**
   * UI configuration for rendering form fields, including widget overrides, field ordering, and themes.
   */
  "uiDefinition": FormUiDefinition;
  /**
   * Concurrency control parameters for the form version upsert operation.
   */
  "upsertParams": UpsertFormVersionUpsertParams;

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
    state: {
      baseName: "state",
      type: "FormVersionState",
      required: true,
    },
    uiDefinition: {
      baseName: "ui_definition",
      type: "FormUiDefinition",
      required: true,
    },
    upsertParams: {
      baseName: "upsert_params",
      type: "UpsertFormVersionUpsertParams",
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
    return UpsertFormVersionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
