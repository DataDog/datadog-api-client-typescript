import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleTagValueTransformType } from "./ArbitraryRuleTagValueTransformType";

/**
 * A transform applied to the values of one tag key.
 */
export class ArbitraryRuleTagValueTransform {
  /**
   * The value used when no `map` entry matches.
   */
  "_default"?: string;
  /**
   * Lookup map from input value to output value, for `lookup_map`.
   */
  "map"?: { [key: string]: string };
  /**
   * The regular expression, for `regex_extract` and `regex_replace`.
   */
  "pattern"?: string;
  /**
   * The replacement string, for `string_replace` and `regex_replace`.
   */
  "replacement"?: string;
  /**
   * The substring to replace, for `string_replace`.
   */
  "target"?: string;
  /**
   * The kind of transform.
   */
  "type": ArbitraryRuleTagValueTransformType;
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
    _default: {
      baseName: "default",
      type: "string",
    },
    map: {
      baseName: "map",
      type: "{ [key: string]: string; }",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    replacement: {
      baseName: "replacement",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ArbitraryRuleTagValueTransformType",
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
    return ArbitraryRuleTagValueTransform.attributeTypeMap;
  }

  public constructor() {}
}
