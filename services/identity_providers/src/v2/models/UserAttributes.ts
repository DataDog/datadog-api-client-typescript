import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of user object returned by the API.
 */
export class UserAttributes {
  /**
   * The ISO 8601 timestamp of when the user account was created.
   */
  "createdAt"?: Date;
  /**
   * Whether the user account is deactivated. Disabled users cannot log in.
   */
  "disabled"?: boolean;
  /**
   * The email address of the user, used for login and notifications.
   */
  "email"?: string;
  /**
   * The unique handle (username) of the user, typically matching their email prefix.
   */
  "handle"?: string;
  /**
   * URL of the user's profile icon, typically a Gravatar URL derived from the email address.
   */
  "icon"?: string;
  /**
   * The ISO 8601 timestamp of the user's most recent login, or null if the user has never logged in.
   */
  "lastLoginTime"?: Date;
  /**
   * Whether multi-factor authentication (MFA) is enabled for the user's account.
   */
  "mfaEnabled"?: boolean;
  /**
   * The ISO 8601 timestamp of when the user account was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The full display name of the user as shown in the Datadog UI.
   */
  "name"?: string;
  /**
   * Whether this is a service account rather than a human user.
   * Service accounts are used for programmatic API access.
   */
  "serviceAccount"?: boolean;
  /**
   * The current status of the user account (for example, `Active`, `Pending`, or `Disabled`).
   */
  "status"?: string;
  /**
   * The job title of the user (for example, "Senior Engineer" or "Product Manager").
   */
  "title"?: string;
  /**
   * The globally unique identifier (UUID) of the user.
   */
  "uuid"?: string;
  /**
   * Whether the user's email address has been verified.
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
    lastLoginTime: {
      baseName: "last_login_time",
      type: "Date",
      format: "date-time",
    },
    mfaEnabled: {
      baseName: "mfa_enabled",
      type: "boolean",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "boolean",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    uuid: {
      baseName: "uuid",
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
    return UserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
