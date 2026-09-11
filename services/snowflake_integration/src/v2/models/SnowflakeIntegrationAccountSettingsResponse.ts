import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the Snowflake integration account.
 */
export class SnowflakeIntegrationAccountSettingsResponse {
  /**
   * Identifier of the Snowflake account being monitored.
   */
  "snowflakeAccountIdentifier": string;
  /**
   * Snowflake user Datadog authenticates as.
   */
  "username": string;
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
    snowflakeAccountIdentifier: {
      baseName: "snowflake_account_identifier",
      type: "string",
      required: true,
    },
    username: {
      baseName: "username",
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
    return SnowflakeIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
