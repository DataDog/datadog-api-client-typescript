import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRulePatchDataAttributesRequest } from "./IncidentRulePatchDataAttributesRequest";
import { IncidentRuleType } from "./IncidentRuleType";

/**
 * Incident rule data in a patch request.
 */
export class IncidentRulePatchDataRequest {
  /**
   * Attributes for patching an incident rule. All fields are optional.
   */
  "attributes"?: IncidentRulePatchDataAttributesRequest;
  /**
   * The rule identifier.
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
      type: "IncidentRulePatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentRulePatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
