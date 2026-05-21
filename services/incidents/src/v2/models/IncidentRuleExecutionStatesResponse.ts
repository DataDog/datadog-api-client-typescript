import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleExecutionStateDataResponse } from "./IncidentRuleExecutionStateDataResponse";

/**
 * Response with a list of rule execution states.
 */
export class IncidentRuleExecutionStatesResponse {
  /**
   * List of rule execution states.
   */
  "data": Array<IncidentRuleExecutionStateDataResponse>;
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
    data: {
      baseName: "data",
      type: "Array<IncidentRuleExecutionStateDataResponse>",
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
    return IncidentRuleExecutionStatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
