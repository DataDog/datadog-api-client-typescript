/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecretRuleDataAttributesMatchValidation } from "./SecretRuleDataAttributesMatchValidation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a secret detection rule, including its pattern, priority, and validation configuration.
 */
export class SecretRuleDataAttributes {
  /**
   * A list of keywords that are included by default when scanning for secrets matching this rule.
   */
  "defaultIncludedKeywords"?: Array<string>;
  /**
   * A detailed explanation of what type of secret this rule detects.
   */
  "description"?: string;
  /**
   * The license under which this secret rule is distributed.
   */
  "license"?: string;
  /**
   * Configuration for validating whether a detected secret is active by making an HTTP request and inspecting the response.
   */
  "matchValidation"?: SecretRuleDataAttributesMatchValidation;
  /**
   * The unique name of the secret detection rule.
   */
  "name"?: string;
  /**
   * The regular expression pattern used to identify potential secrets in source code or configuration.
   */
  "pattern"?: string;
  /**
   * The priority level of this rule, used to rank findings when multiple rules match.
   */
  "priority"?: string;
  /**
   * The identifier of the corresponding Sensitive Data Scanner rule, if one exists.
   */
  "sdsId"?: string;
  /**
   * A list of validator identifiers used to further confirm a detected secret is genuine.
   */
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
