/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetIntegrationSchemaSpecValueV2 } from "./FleetIntegrationSchemaSpecValueV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A property of an object-typed configuration value. A `oneOf` keyword (an array of exclusive alternative value specifications this property can match) can appear directly on this object when alternatives apply.
 */
export class FleetIntegrationSchemaSpecPropertyV2 {
  /**
   * Whether, or which, additional properties are allowed on the object. Can be a boolean or a nested schema. Present only when `type` is `object`.
   */
  "additionalProperties"?: any;
  /**
   * Alternative value specifications this property can match. Absent when none apply.
   */
  "anyOf"?: Array<FleetIntegrationSchemaSpecValueV2>;
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
   * The property name.
   */
  "name": string;
  /**
   * Nested properties. Present only when `type` is `object` and the object declares properties.
   */
  "properties"?: Array<FleetIntegrationSchemaSpecPropertyV2>;
  /**
   * The JSON Schema type of the property, such as `string` or `boolean`. Absent when not set.
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
    items: {
      baseName: "items",
      type: "FleetIntegrationSchemaSpecValueV2",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "Array<FleetIntegrationSchemaSpecPropertyV2>",
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
    return FleetIntegrationSchemaSpecPropertyV2.attributeTypeMap;
  }

  public constructor() {}
}
