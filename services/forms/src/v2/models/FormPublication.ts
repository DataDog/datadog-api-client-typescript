import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Publication information for the form.
 */
export class FormPublication {
  /**
   * Creation timestamp.
   */
  "createdAt": Date;
  /**
   * The form identifier.
   */
  "formId": string;
  /**
   * The version of the form that was published.
   */
  "formVersion"?: number;
  /**
   * The unique identifier of the publication.
   */
  "id": string;
  /**
   * Last modification timestamp.
   */
  "modifiedAt": Date;
  /**
   * The organization ID.
   */
  "orgId": number;
  /**
   * The publication sequence number.
   */
  "publishSeq"?: number;
  /**
   * The ID of the user who published.
   */
  "userId": number;
  /**
   * The UUID of the user who published.
   */
  "userUuid": string;
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
    formId: {
      baseName: "form_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    formVersion: {
      baseName: "form_version",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    publishSeq: {
      baseName: "publish_seq",
      type: "number",
      format: "int64",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormPublication.attributeTypeMap;
  }

  public constructor() {}
}
