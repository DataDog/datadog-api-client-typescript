/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DefaultInboxRuleAttributesResponse } from "./DefaultInboxRuleAttributesResponse";
import { DefaultInboxRuleType } from "./DefaultInboxRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for a default inbox rule returned by the API.
 */
export class DefaultInboxRuleDataResponse {
  /**
   * Attributes of a default inbox rule returned by the API.
   */
  "attributes": DefaultInboxRuleAttributesResponse;
  /**
   * The ID of the default inbox rule.
   * Known default rule IDs include: `identity_risk_default_rule`,
   * `secret_default_rule`, `library_vulnerability_default_rule`,
   * `attack_path_default_rule`, `host_and_container_vulnerability_default_rule`,
   * `runtime_code_vulnerability_default_rule`, `iac_misconfiguration_default_rule`,
   * and `misconfiguration_default_rule`. Datadog can add new default rules
   * over time.
   */
  "id": string;
  /**
   * The JSON:API type for default inbox rules.
   */
  "type": DefaultInboxRuleType;

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
      type: "DefaultInboxRuleAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DefaultInboxRuleType",
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
    return DefaultInboxRuleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
