import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDatastoreConfig } from "./FormDatastoreConfig";
import { FormPublication } from "./FormPublication";
import { FormVersion } from "./FormVersion";

/**
 * Attributes of a form.
 */
export class FormDataAttributesResponse {
  /**
   * Creation timestamp.
   */
  "createdAt": Date;
  /**
   * Configuration for the form's associated datastore.
   */
  "datastoreConfig": FormDatastoreConfig;
  /**
   * The description of the form.
   */
  "description": string;
  /**
   * Last modification timestamp.
   */
  "modifiedAt": Date;
  /**
   * The name of the form.
   */
  "name": string;
  /**
   * The organization ID.
   */
  "orgId": number;
  /**
   * Publication information for the form.
   */
  "publication"?: FormPublication;
  /**
   * The ID of the user who created the form.
   */
  "userId": number;
  /**
   * The UUID of the user who created the form.
   */
  "userUuid": string;
  /**
   * Version information for the form.
   */
  "version"?: FormVersion;
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
    datastoreConfig: {
      baseName: "datastore_config",
      type: "FormDatastoreConfig",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    publication: {
      baseName: "publication",
      type: "FormPublication",
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
      type: "FormVersion",
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
    return FormDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
