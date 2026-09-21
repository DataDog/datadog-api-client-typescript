import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountCreateData } from "./SnowflakeIntegrationAccountCreateData";

/**
 * Request payload to create a Snowflake integration account.
 */
export class SnowflakeIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a Snowflake integration account.
   */
  "data": SnowflakeIntegrationAccountCreateData;
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
    data: {
      baseName: "data",
      type: "SnowflakeIntegrationAccountCreateData",
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
    return SnowflakeIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
