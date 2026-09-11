import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountAuthenticationResponse } from "./SnowflakeIntegrationAccountAuthenticationResponse";
import { SnowflakeIntegrationAccountSettingsResponse } from "./SnowflakeIntegrationAccountSettingsResponse";
import { SnowflakeIntegrationDataflowsResponse } from "./SnowflakeIntegrationDataflowsResponse";

/**
 * Attributes of a Snowflake integration account returned in responses.
 */
export class SnowflakeIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Snowflake integration account.
   */
  "authentication": SnowflakeIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from Snowflake, keyed by dataflow id.
   */
  "dataflows": SnowflakeIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Snowflake integration account.
   */
  "name": string;
  /**
   * Settings configured on the Snowflake integration account.
   */
  "settings": SnowflakeIntegrationAccountSettingsResponse;
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
    authentication: {
      baseName: "authentication",
      type: "SnowflakeIntegrationAccountAuthenticationResponse",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "SnowflakeIntegrationDataflowsResponse",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "SnowflakeIntegrationAccountSettingsResponse",
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
    return SnowflakeIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
