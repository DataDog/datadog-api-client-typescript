import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleDataAttributesRequest } from "./IncidentRuleDataAttributesRequest";
import { IncidentRuleType } from "./IncidentRuleType";

/**
 * Incident rule data in a create request.
 */
export class IncidentRuleDataRequest {
  /**
   * Attributes for creating an incident rule.
   */
  "attributes": IncidentRuleDataAttributesRequest;
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
      type: "IncidentRuleDataAttributesRequest",
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
    return IncidentRuleDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
