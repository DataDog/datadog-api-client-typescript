import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDatastoreConfigAttributes } from "./FormDatastoreConfigAttributes";
import { FormPublicationAttributes } from "./FormPublicationAttributes";
import { FormVersionAttributes } from "./FormVersionAttributes";

/**
 * The attributes of a form.
 */
export class FormDataAttributes {
  /**
   * Whether the form is currently active.
   */
  "active": boolean;
  /**
   * Whether the form accepts anonymous submissions.
   */
  "anonymous": boolean;
  /**
   * The time at which the form was created.
   */
  "createdAt": Date;
  /**
   * The datastore configuration for a form.
   */
  "datastoreConfig": FormDatastoreConfigAttributes;
  /**
   * The description of the form.
   */
  "description": string;
  /**
   * The date and time at which the form stops accepting responses.
   */
  "endDate"?: Date;
  /**
   * Whether the current user has already submitted this form. Only present for forms with `single_response` set to `true`.
   */
  "hasSubmitted"?: boolean;
  /**
   * Whether the form is an IDP survey.
   */
  "idpSurvey": boolean;
  /**
   * The time at which the form was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the form.
   */
  "name": string;
  /**
   * The ID of the organization that owns this form.
   */
  "orgId": number;
  /**
   * The attributes of a form publication.
   */
  "publication"?: FormPublicationAttributes;
  /**
   * Whether the form is available in the self-service catalog.
   */
  "selfService": boolean;
  /**
   * Whether each user can only submit one response.
   */
  "singleResponse": boolean;
  /**
   * The ID of the user who created this form.
   */
  "userId": number;
  /**
   * The UUID of the user who created this form.
   */
  "userUuid": string;
  /**
   * The attributes of a form version.
   */
  "version"?: FormVersionAttributes;
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
    active: {
      baseName: "active",
      type: "boolean",
      required: true,
    },
    anonymous: {
      baseName: "anonymous",
      type: "boolean",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    datastoreConfig: {
      baseName: "datastore_config",
      type: "FormDatastoreConfigAttributes",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    hasSubmitted: {
      baseName: "has_submitted",
      type: "boolean",
    },
    idpSurvey: {
      baseName: "idp_survey",
      type: "boolean",
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
      type: "FormPublicationAttributes",
    },
    selfService: {
      baseName: "self_service",
      type: "boolean",
      required: true,
    },
    singleResponse: {
      baseName: "single_response",
      type: "boolean",
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
      type: "FormVersionAttributes",
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
    return FormDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
