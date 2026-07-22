import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFindingType } from "./SecurityFindingType";

/**
 * Defines the scope of findings to which the automation rule applies.
 */
export class AutomationRuleScope {
  /**
   * The list of security finding types that the automation rule applies to.
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
  "additionalProperties"?: { [key: string]: any; };
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
