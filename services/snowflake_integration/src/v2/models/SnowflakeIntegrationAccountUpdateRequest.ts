import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountUpdateData } from "./SnowflakeIntegrationAccountUpdateData";

/**
 * Request payload to update a Snowflake integration account.
 */
export class SnowflakeIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating a Snowflake integration account.
   */
  "data": SnowflakeIntegrationAccountUpdateData;
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
      type: "SnowflakeIntegrationAccountUpdateData",
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
    return SnowflakeIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
