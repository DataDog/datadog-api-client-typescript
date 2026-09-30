/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetIntegrationSchemaSpecValueV2 } from "./FleetIntegrationSchemaSpecValueV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single configuration option within an integration's configuration file.
 */
export class FleetIntegrationSchemaSpecOptionV2 {
  /**
   * Deprecation information for a configuration option. Currently carries no fields and is always emitted as an empty object or `null`.
   */
  "deprecation": { [key: string]: any } | null;
  /**
   * A human-readable description of the option.
   */
  "description": string;
  /**
   * The display order priority of the option relative to other options.
   */
  "displayPriority": number;
  /**
   * Whether the option is enabled by default.
   */
  "enabled": boolean;
  /**
   * An example value for the option. Can be any JSON type. Absent from the response when not set.
   */
  "example"?: any;
  /**
   * Whether the option is hidden from the default configuration UI.
   */
  "hidden": boolean;
  /**
   * Metadata tags associated with the option. Returned as an empty array when the option has no tags.
   */
  "metadataTags": Array<string>;
  /**
   * Whether the option accepts multiple values.
   */
  "multiple": boolean;
  /**
   * Whether multiple instances of this option are defined in the configuration file.
   */
  "multipleInstancesDefined": boolean;
  /**
   * The option name.
   */
  "name": string;
  /**
   * Nested options. Absent from the response when the option has no nested options.
   */
  "options"?: Array<FleetIntegrationSchemaSpecOptionV2>;
  /**
   * A prefill value for the option. Can be any JSON type. Absent from the response when not set.
   */
  "prefill"?: any;
  /**
   * Whether the option is required.
   */
  "required": boolean;
  /**
   * Whether the option is a secret that should be masked. Absent from the response when not set, distinct from being explicitly set to `false`.
   */
  "secret"?: boolean;
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
  "value"?: FleetIntegrationSchemaSpecValueV2;

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
    deprecation: {
      baseName: "deprecation",
      type: "{ [key: string]: any; }",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    displayPriority: {
      baseName: "display_priority",
      type: "number",
      required: true,
      format: "int64",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    example: {
      baseName: "example",
      type: "any",
    },
    hidden: {
      baseName: "hidden",
      type: "boolean",
      required: true,
    },
    metadataTags: {
      baseName: "metadata_tags",
      type: "Array<string>",
      required: true,
    },
    multiple: {
      baseName: "multiple",
      type: "boolean",
      required: true,
    },
    multipleInstancesDefined: {
      baseName: "multiple_instances_defined",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "Array<FleetIntegrationSchemaSpecOptionV2>",
    },
    prefill: {
      baseName: "prefill",
      type: "any",
    },
    required: {
      baseName: "required",
      type: "boolean",
      required: true,
    },
    secret: {
      baseName: "secret",
      type: "boolean",
    },
    value: {
      baseName: "value",
      type: "FleetIntegrationSchemaSpecValueV2",
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
    return FleetIntegrationSchemaSpecOptionV2.attributeTypeMap;
  }

  public constructor() {}
}
