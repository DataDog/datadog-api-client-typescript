import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountSchemaResponseProperties } from "./WebIntegrationAccountSchemaResponseProperties";

/**
 * Response containing the JSON schema for an integration's account configuration.
 * This schema defines the required and optional fields for both settings and secrets,
 * including field types, validation rules, and descriptions.
 *
 * The response is a standard [JSON Schema (draft-07)](https://json-schema.org/draft-07/schema#) document describing the account
 * configuration structure. Since this is a dynamic JSON Schema, the exact properties
 * will vary by integration.
 */
export class WebIntegrationAccountSchemaResponse {
  /**
   * The JSON Schema version URI.
   */
  "schema": string;
  /**
   * Whether additional properties are allowed at the root level (typically false).
   */
  "additionalProperties"?: boolean;
  /**
   * The properties object containing settings and secrets schema definitions.
   * Both are always present in every integration schema.
   */
  "properties": WebIntegrationAccountSchemaResponseProperties;
  /**
   * List of required top-level properties.
   */
  "required": Array<string>;
  /**
   * The root type of the schema (always "object").
   */
  "type": string;
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
    schema: {
      baseName: "$schema",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "boolean",
    },
    properties: {
      baseName: "properties",
      type: "WebIntegrationAccountSchemaResponseProperties",
      required: true,
    },
    required: {
      baseName: "required",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
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
    return WebIntegrationAccountSchemaResponse.attributeTypeMap;
  }

  public constructor() {}
}
