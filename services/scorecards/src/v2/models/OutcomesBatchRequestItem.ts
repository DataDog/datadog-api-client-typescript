import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { State } from "./State";

/**
 * Scorecard outcome for a specific rule, for a given service within a batched update.
 */
export class OutcomesBatchRequestItem {
  /**
   * Any remarks regarding the scorecard rule's evaluation, and supports HTML hyperlinks.
   */
  "remarks"?: string;
  /**
   * The unique ID for a scorecard rule.
   */
  "ruleId": string;
  /**
   * The unique name for a service in the catalog.
   */
  "serviceName": string;
  /**
   * The state of the rule evaluation.
   */
  "state": State;
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
    remarks: {
      baseName: "remarks",
      type: "string",
    },
    ruleId: {
      baseName: "rule_id",
      type: "string",
      required: true,
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "State",
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
    return OutcomesBatchRequestItem.attributeTypeMap;
  }

  public constructor() {}
}
