import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of user object returned by the API.
 */
export class NotebookAuthor {
  /**
   * Creation time of the user.
   */
  "createdAt"?: Date;
  /**
   * Whether the user is disabled.
   */
  "disabled"?: boolean;
  /**
   * Email of the user.
   */
  "email"?: string;
  /**
   * Handle of the user.
   */
  "handle"?: string;
  /**
   * URL of the user's icon.
   */
  "icon"?: string;
  /**
   * Name of the user.
   */
  "name"?: string;
  /**
   * Status of the user.
   */
  "status"?: string;
  /**
   * Title of the user.
   */
  "title"?: string;
  /**
   * Whether the user is verified.
   */
  "verified"?: boolean;
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
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    email: {
      baseName: "email",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    verified: {
      baseName: "verified",
      type: "boolean",
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
    return NotebookAuthor.attributeTypeMap;
  }

  public constructor() {}
}
