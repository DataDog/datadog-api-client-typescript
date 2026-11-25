/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFindingType } from "./SecurityFindingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the scope of findings to which the automation rule applies.
 */
export class AutomationRuleScope {
  /**
   * The security finding types that the automation rule applies to. At least one is required, and
   * each type may appear only once. Allowed values: `api_security`, `attack_path`,
   * `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`,
   * `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`,
   * `static_code_vulnerability`, and `workload_activity`.
   */
  "findingTypes": Array<SecurityFindingType>;
  /**
   * A search query to further filter the findings matched by this rule. The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).
   */
  "query"?: string;

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
    findingTypes: {
      baseName: "finding_types",
      type: "Array<SecurityFindingType>",
      required: true,
    },
    query: {
      baseName: "query",
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
    return AutomationRuleScope.attributeTypeMap;
  }

  public constructor() {}
}
