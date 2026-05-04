import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for an OCI config.
 */
export class OCIConfigAttributes {
  /**
   * The OCID of the OCI tenancy.
   */
  "accountId": string;
  /**
   * The timestamp when the OCI config was created.
   */
  "createdAt": string;
  /**
   * The error messages for the OCI config.
   */
  "errorMessages"?: Array<string>;
  /**
   * The status of the OCI config.
   */
  "status": string;
  /**
   * The timestamp when the OCI config status was last updated.
   */
  "statusUpdatedAt": string;
  /**
   * The timestamp when the OCI config was last updated.
   */
  "updatedAt": string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
      required: true,
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    statusUpdatedAt: {
      baseName: "status_updated_at",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
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
    return OCIConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
