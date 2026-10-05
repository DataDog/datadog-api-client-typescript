import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetIntegrationSchemaSpecPropertyV2 } from "./FleetIntegrationSchemaSpecPropertyV2";

/**
 * A JSON Schema-like specification for a configuration value.
 *
 * Object-typed values always include a `properties` array, even when empty.
 * Non-object-typed values never include `properties`. Throughout this schema,
 * an empty array is meaningfully different from an absent field.
 *
 * Three further JSON Schema keywords can appear directly on this object but are
 * not listed among its properties below to avoid clashing with this document's
 * own schema composition keywords: `enum` (an array of allowed values, present
 * only when there are enum constraints), `required` (an array of required
 * property names, present only when `type` is `object`), and `oneOf` (an array
 * of exclusive alternative value specifications this value can match, present
 * only when there are alternatives).
 */
export class FleetIntegrationSchemaSpecValueV2 {
  /**
   * Whether, or which, additional properties are allowed on the object. Can be a boolean or a nested schema. Present only when `type` is `object`.
   */
  "additionalProperties"?: any;
  /**
   * Alternative value specifications this value can match. Absent when none apply.
   */
  "anyOf"?: Array<FleetIntegrationSchemaSpecValueV2>;
  /**
   * The default value. Can be any JSON type. Absent when not set.
   */
  "_default"?: any;
  /**
   * A human-readable description of the value. Absent when not set.
   */
  "description"?: string;
  /**
   * A legacy, display-formatted representation of the default value. Can be any JSON type. Absent when not set.
   */
  "displayDefault"?: any;
  /**
   * An example value. Can be any JSON type. Absent when not set.
   */
  "example"?: any;
  /**
   * The maximum allowed numeric value, exclusive. Absent when not set.
   */
  "exclusiveMaximum"?: number;
  /**
   * The minimum allowed numeric value, exclusive. Absent when not set.
   */
  "exclusiveMinimum"?: number;
  /**
   * A JSON Schema-like specification for a configuration value.
   *
   * Object-typed values always include a `properties` array, even when empty.
   * Non-object-typed values never include `properties`. Throughout this schema,
   * an empty array is meaningfully different from an absent field.
   *
   * Three further JSON Schema keywords can appear directly on this object but are
   * not listed among its properties below to avoid clashing with this document's
   * own schema composition keywords: `enum` (an array of allowed values, present
   * only when there are enum constraints), `required` (an array of required
   * property names, present only when `type` is `object`), and `oneOf` (an array
   * of exclusive alternative value specifications this value can match, present
   * only when there are alternatives).
   */
  "items"?: FleetIntegrationSchemaSpecValueV2;
  /**
   * The maximum allowed string length. Absent when not set.
   */
  "maxLength"?: number;
  /**
   * The maximum allowed numeric value, inclusive. Absent when not set.
   */
  "maximum"?: number;
  /**
   * The minimum allowed string length. Absent when not set.
   */
  "minLength"?: number;
  /**
   * The minimum allowed numeric value, inclusive. Absent when not set.
   */
  "minimum"?: number;
  /**
   * A regular expression the string value must match. Absent when not set.
   */
  "pattern"?: string;
  /**
   * The object's declared properties. Present when `type` is `object`, including as an empty array when the object declares no properties. Absent for non-object types.
   */
  "properties"?: Array<FleetIntegrationSchemaSpecPropertyV2>;
  /**
   * Whether the value is a secret that should be masked. Absent when not set.
   */
  "secret"?: boolean;
  /**
   * The JSON Schema type of the value, such as `string` or `object`. Absent when not set.
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
      type: "any",
    },
    anyOf: {
      baseName: "anyOf",
      type: "Array<FleetIntegrationSchemaSpecValueV2>",
    },
    _default: {
      baseName: "default",
      type: "any",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayDefault: {
      baseName: "display_default",
      type: "any",
    },
    example: {
      baseName: "example",
      type: "any",
    },
    exclusiveMaximum: {
      baseName: "exclusiveMaximum",
      type: "number",
      format: "double",
    },
    exclusiveMinimum: {
      baseName: "exclusiveMinimum",
      type: "number",
      format: "double",
    },
    items: {
      baseName: "items",
      type: "FleetIntegrationSchemaSpecValueV2",
    },
    maxLength: {
      baseName: "maxLength",
      type: "number",
      format: "int64",
    },
    maximum: {
      baseName: "maximum",
      type: "number",
      format: "double",
    },
    minLength: {
      baseName: "minLength",
      type: "number",
      format: "int64",
    },
    minimum: {
      baseName: "minimum",
      type: "number",
      format: "double",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    properties: {
      baseName: "properties",
      type: "Array<FleetIntegrationSchemaSpecPropertyV2>",
    },
    secret: {
      baseName: "secret",
      type: "boolean",
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
    return FleetIntegrationSchemaSpecValueV2.attributeTypeMap;
  }

  public constructor() {}
}
