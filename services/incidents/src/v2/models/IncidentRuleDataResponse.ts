import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleAttributesResponse } from "./IncidentRuleAttributesResponse";
import { IncidentRuleType } from "./IncidentRuleType";

export class IncidentRuleDataResponse {
  "attributes": IncidentRuleAttributesResponse;
  /**
   * The ID of the rule.
   */
  "id": string;
  /**
   * Incident rule resource type.
   */
  "type": IncidentRuleType;
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
      type: "IncidentRuleAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentRuleType",
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
    return IncidentRuleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
