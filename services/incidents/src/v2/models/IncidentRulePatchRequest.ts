import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRulePatchDataRequest } from "./IncidentRulePatchDataRequest";

/**
 * Request payload for patching an incident rule.
 */
export class IncidentRulePatchRequest {
  /**
   * Incident rule data in a patch request.
   */
  "data": IncidentRulePatchDataRequest;
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
      type: "IncidentRulePatchDataRequest",
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
    return IncidentRulePatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
