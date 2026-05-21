import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentBatchCreateRuleExecutionStatesData } from "./IncidentBatchCreateRuleExecutionStatesData";

/**
 * Request to batch create rule execution states.
 */
export class IncidentBatchCreateRuleExecutionStatesRequest {
  /**
   * Data for batch creating rule execution states.
   */
  "data": IncidentBatchCreateRuleExecutionStatesData;
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
      type: "IncidentBatchCreateRuleExecutionStatesData",
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
    return IncidentBatchCreateRuleExecutionStatesRequest.attributeTypeMap;
  }

  public constructor() {}
}
