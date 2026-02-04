import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionState } from "./FormVersionState";

/**
 * Attributes of a form version.
 */
export class FormVersionDataAttributesResponse {
  /**
   * Creation timestamp.
   */
  "createdAt": Date;
  /**
   * The data definition for the form.
   */
  "dataDefinition": any;
  /**
   * Signature of the form definition.
   */
  "definitionSignature": string;
  /**
   * The entity tag for the version.
   */
  "etag": string;
  /**
   * Last modification timestamp.
   */
  "modifiedAt": Date;
  /**
   * The state of the form version.
   */
  "state": FormVersionState;
  /**
   * The UI definition for the form.
   */
  "uiDefinition": any;
  /**
   * The ID of the user who created the version.
   */
  "userId": number;
  /**
   * The UUID of the user who created the version.
   */
  "userUuid": string;
  /**
   * The version number.
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
      type: "any",
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
      type: "any",
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
    return FormVersionDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
