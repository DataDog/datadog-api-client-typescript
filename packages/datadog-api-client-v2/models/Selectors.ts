/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RuleSeverity } from "./RuleSeverity";
import { RuleTypesItems } from "./RuleTypesItems";
import { TriggerSource } from "./TriggerSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Selectors are used to filter security issues for which notifications should be generated.
 * Users can specify rule severities, rule types, a query to filter security issues on tags and attributes, and the trigger source.
 * Only the trigger_source field is required.
 */
export class Selectors {
  /**
   * The query is composed of one or several key:value pairs, which can be used to filter security issues on tags and attributes.
   * It is at most 6,000 characters. Finding-based rules can't filter on attributes in the `@workflow` or `@_dd`
   * namespaces, on `@status`, or on `@compliance.evaluation`.
   */
  "query"?: string;
  /**
   * Security rule types used as filters in security rules.
   * Signal-based notification rules accept `application_security`, `log_detection`, `workload_security`, and
   * `signal_correlation`.
   * Finding-based notification rules accept `application_code_vulnerability`,
   * `application_library_vulnerability`, `attack_path`, `container_image_vulnerability`, `identity_risk`,
   * `misconfiguration`, `api_security`, `host_vulnerability`, `iac_misconfiguration`, `sast_vulnerability`,
   * `secret_vulnerability`, `workload_activity`, `sensitive_data`, and `serverless_function_code_vulnerability`.
   * Rule types that don't match the rule's `trigger_source` are rejected.
   */
  "ruleTypes"?: Array<RuleTypesItems>;
  /**
   * The security rules severities to consider.
   * Allowed values are `critical`, `high`, `medium`, `low`, and `info`; `unknown` is rejected.
   */
  "severities"?: Array<RuleSeverity>;
  /**
   * The type of security issues on which the rule applies. Notification rules based on security signals need to use the trigger source "security_signals",
   * while notification rules based on security findings need to use the trigger source "security_findings".
   */
  "triggerSource": TriggerSource;

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
    query: {
      baseName: "query",
      type: "string",
    },
    ruleTypes: {
      baseName: "rule_types",
      type: "Array<RuleTypesItems>",
    },
    severities: {
      baseName: "severities",
      type: "Array<RuleSeverity>",
    },
    triggerSource: {
      baseName: "trigger_source",
      type: "TriggerSource",
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
    return Selectors.attributeTypeMap;
  }

  public constructor() {}
}
