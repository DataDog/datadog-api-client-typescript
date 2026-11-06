import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Archived session to recover.
 */
export class RumRecoverySessionInput {
  /**
   * Application UUID.
   */
  "applicationId": string;
  /**
   * Session UUID.
   */
  "sessionId": string;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    sessionId: {
      baseName: "session_id",
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
    return RumRecoverySessionInput.attributeTypeMap;
  }

  public constructor() {}
}
