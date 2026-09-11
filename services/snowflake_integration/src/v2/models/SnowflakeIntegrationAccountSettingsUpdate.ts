import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for updating the Snowflake integration account. Only the fields provided are changed.
 */
export class SnowflakeIntegrationAccountSettingsUpdate {
  /**
   * Identifier of the Snowflake account to monitor, either as `organization-account` or as the legacy `account_name.region_id.cloud_provider` account locator. An account identifier can be configured once per Datadog organization; reusing one is rejected with a `422` response. Accounts reached through AWS PrivateLink are not supported.
   */
  "snowflakeAccountIdentifier"?: string;
  /**
   * Snowflake user Datadog authenticates as. Create a dedicated user for Datadog and grant it a role with access to the data you want to collect.
   */
  "username"?: string;
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
    },
    username: {
      baseName: "username",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
