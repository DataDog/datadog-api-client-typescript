import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentBatchUpdateRuleExecutionStatesDataAttributes } from "./IncidentBatchUpdateRuleExecutionStatesDataAttributes";
import { IncidentRuleExecutionStateType } from "./IncidentRuleExecutionStateType";

/**
 * Data for batch updating rule execution states.
 */
export class IncidentBatchUpdateRuleExecutionStatesData {
  /**
   * Attributes for batch updating rule execution states.
   */
  "attributes": IncidentBatchUpdateRuleExecutionStatesDataAttributes;
  /**
   * Incident rule execution state resource type.
   */
  "type": IncidentRuleExecutionStateType;
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
      type: "IncidentBatchUpdateRuleExecutionStatesDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentRuleExecutionStateType",
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
    return IncidentBatchUpdateRuleExecutionStatesData.attributeTypeMap;
  }

  public constructor() {}
}
