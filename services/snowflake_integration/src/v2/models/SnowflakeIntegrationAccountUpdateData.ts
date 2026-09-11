import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountType } from "./IntegrationAccountType";
import { SnowflakeIntegrationAccountUpdateAttributes } from "./SnowflakeIntegrationAccountUpdateAttributes";

/**
 * Data envelope for updating a Snowflake integration account.
 */
export class SnowflakeIntegrationAccountUpdateData {
  /**
   * Writable attributes used to update a Snowflake integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration, as do the settings of an included dataflow that provides only `enabled`. `authentication` is the exception to partial updates: when provided it is replaced as a whole, so it must carry every field that creating an account requires.
   */
  "attributes": SnowflakeIntegrationAccountUpdateAttributes;
  /**
   * Unique identifier of the Snowflake integration account to update.
   */
  "id": string;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;
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
    attributes: {
      baseName: "attributes",
      type: "SnowflakeIntegrationAccountUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return SnowflakeIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
