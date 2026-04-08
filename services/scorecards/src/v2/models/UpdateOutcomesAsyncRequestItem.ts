import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { State } from "./State";

/**
 * Scorecard outcome for a single entity and rule.
 */
export class UpdateOutcomesAsyncRequestItem {
  /**
   * The unique reference for an IDP entity.
   */
  "entityReference": string;
  /**
   * Any remarks regarding the scorecard rule's evaluation. Supports HTML hyperlinks.
   */
  "remarks"?: string;
  /**
   * The unique ID for a scorecard rule.
   */
  "ruleId": string;
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
    entityReference: {
      baseName: "entity_reference",
      type: "string",
      required: true,
    },
    remarks: {
      baseName: "remarks",
      type: "string",
    },
    ruleId: {
      baseName: "rule_id",
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
    return UpdateOutcomesAsyncRequestItem.attributeTypeMap;
  }

  public constructor() {}
}
