/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormDataDefinition } from "./FormDataDefinition";
import { FormUiDefinition } from "./FormUiDefinition";
import { FormVersionState } from "./FormVersionState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a form version.
 */
export class FormVersionAttributes {
  /**
   * The time at which the version was created.
   */
  "createdAt": Date;
  /**
   * A JSON Schema definition that describes the form's data fields.
   */
  "dataDefinition": FormDataDefinition;
  /**
   * The signature of the version definition.
   */
  "definitionSignature": string;
  /**
   * The ETag for optimistic concurrency control.
   */
  "etag": string | null;
  /**
   * The ID of the form version.
   */
  "id"?: string;
  /**
   * The time at which the version was last modified.
   */
  "modifiedAt": Date;
  /**
   * The state of a form version.
   */
  "state": FormVersionState;
  /**
   * UI configuration for rendering form fields, including widget overrides, field ordering, and themes.
   */
  "uiDefinition": FormUiDefinition;
  /**
   * The ID of the user who created this version.
   */
  "userId": number;
  /**
   * The UUID of the user who created this version.
   */
  "userUuid": string;
  /**
   * The sequential version number.
   */
  "version": number;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    dataDefinition: {
      baseName: "data_definition",
      type: "FormDataDefinition",
      required: true,
    },
    definitionSignature: {
      baseName: "definition_signature",
      type: "string",
      required: true,
    },
    etag: {
      baseName: "etag",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    userId: {
      baseName: "user_id",
      type: "number",
      required: true,
      format: "int64",
    },
    userUuid: {
      baseName: "user_uuid",
      type: "string",
      required: true,
      format: "uuid",
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
