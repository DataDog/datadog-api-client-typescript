import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * JSON Schema definition for a single field within settings or secrets.
 * The exact fields vary by integration.
 */
export class WebIntegrationAccountSchemaResponseSettingsField {
  /**
   * Whether additional properties are allowed for this field.
   */
  "additionalProperties"?: boolean;
  /**
   * Default value for the field if not provided.
   */
  "_default"?: any;
  /**
   * Human-readable description of the field's purpose.
   */
  "description"?: string;
  /**
   * Schema for array items when type is "array".
   */
  "items"?: any;
  /**
   * Minimum length for string fields.
   */
  "minLength"?: number;
  /**
   * The data type of the field (string, boolean, integer, array, object).
   */
  "type"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "boolean",
    },
    _default: {
      baseName: "default",
      type: "any",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    items: {
      baseName: "items",
      type: "any",
    },
    minLength: {
      baseName: "minLength",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return WebIntegrationAccountSchemaResponseSettingsField.attributeTypeMap;
  }

  public constructor() {}
}
