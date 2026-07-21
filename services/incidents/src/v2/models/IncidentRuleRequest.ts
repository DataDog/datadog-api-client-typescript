import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleDataRequest } from "./IncidentRuleDataRequest";

/**
 * Request payload for creating an incident rule.
 */
export class IncidentRuleRequest {
  /**
   * Incident rule data in a create request.
   */
  "data": IncidentRuleDataRequest;
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
      type: "IncidentRuleDataRequest",
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
    return IncidentRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
