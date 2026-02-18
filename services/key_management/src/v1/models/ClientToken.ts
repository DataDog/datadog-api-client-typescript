import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Client token object. Client tokens (also known as public API keys) enable you to submit
 * data from your browser or mobile applications to Datadog.
 */
export class ClientToken {
  /**
   * Creation timestamp of the client token.
   */
  "createdAt"?: Date;
  /**
   * Handle of the user who created the client token.
   */
  "createdByHandle"?: string;
  /**
   * UUID of the user who created the client token.
   */
  "createdByUuid"?: string;
  /**
   * Timestamp when the client token was disabled.
   */
  "disabledAt"?: Date;
  /**
   * ID of the user who disabled the client token.
   */
  "disabledBy"?: number;
  /**
   * Handle of the user who disabled the client token.
   */
  "disabledByHandle"?: string;
  /**
   * The hash value of the client token. This is the secret token value that should be
   * used in your browser or mobile application.
   */
  "hash"?: string;
  /**
   * ID of the user who last modified the client token.
   */
  "modifiedBy"?: number;
  /**
   * Name of the client token.
   */
  "name"?: string;
  /**
   * Organization ID associated with the client token.
   */
  "orgId"?: number;
  /**
   * List of allowed origin URLs for browser-based applications. Requests from URLs
   * not in this list will be rejected.
   */
  "originUrls": Array<string>;
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
      format: "date-time",
    },
    createdByHandle: {
      baseName: "created_by_handle",
      type: "string",
    },
    createdByUuid: {
      baseName: "created_by_uuid",
      type: "string",
      format: "uuid",
    },
    disabledAt: {
      baseName: "disabled_at",
      type: "Date",
      format: "date-time",
    },
    disabledBy: {
      baseName: "disabled_by",
      type: "number",
      format: "int64",
    },
    disabledByHandle: {
      baseName: "disabled_by_handle",
      type: "string",
    },
    hash: {
      baseName: "hash",
      type: "string",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    originUrls: {
      baseName: "origin_urls",
      type: "Array<string>",
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
    return ClientToken.attributeTypeMap;
  }

  public constructor() {}
}
