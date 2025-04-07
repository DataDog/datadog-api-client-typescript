import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata object containing the publication creation information.
 */
export class DeploymentMetadata {
  /**
   * Timestamp of when the app was published.
   */
  "createdAt"?: Date;
  /**
   * The ID of the user who published the app.
   */
  "userId"?: number;
  /**
   * The name (or email address) of the user who published the app.
   */
  "userName"?: string;
  /**
   * The UUID of the user who published the app.
   */
  "userUuid"?: string;
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
    userId: {
      baseName: "user_id",
      type: "number",
      format: "int64",
    },
    userName: {
      baseName: "user_name",
      type: "string",
    },
    userUuid: {
      baseName: "user_uuid",
      type: "string",
      format: "uuid",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentMetadata.attributeTypeMap;
  }

  public constructor() {}
}
