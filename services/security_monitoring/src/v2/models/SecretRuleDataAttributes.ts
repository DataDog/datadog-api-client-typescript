import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecretRuleDataAttributesMatchValidation } from "./SecretRuleDataAttributesMatchValidation";

export class SecretRuleDataAttributes {
  "defaultIncludedKeywords"?: Array<string>;
  "description"?: string;
  "license"?: string;
  "matchValidation"?: SecretRuleDataAttributesMatchValidation;
  "name"?: string;
  "pattern"?: string;
  "priority"?: string;
  "sdsId"?: string;
  "validators"?: Array<string>;
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
    defaultIncludedKeywords: {
      baseName: "default_included_keywords",
      type: "Array<string>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    license: {
      baseName: "license",
      type: "string",
    },
    matchValidation: {
      baseName: "match_validation",
      type: "SecretRuleDataAttributesMatchValidation",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "string",
    },
    sdsId: {
      baseName: "sds_id",
      type: "string",
    },
    validators: {
      baseName: "validators",
      type: "Array<string>",
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
    return SecretRuleDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
