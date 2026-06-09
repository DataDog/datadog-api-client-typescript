import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRuleExecutionStateDataAttributesResponse } from "./IncidentRuleExecutionStateDataAttributesResponse";
import { IncidentRuleExecutionStateType } from "./IncidentRuleExecutionStateType";

/**
 * Rule execution state data in a response.
 */
export class IncidentRuleExecutionStateDataResponse {
  /**
   * Attributes of an incident rule execution state.
   */
  "attributes": IncidentRuleExecutionStateDataAttributesResponse;
  /**
   * The rule execution state identifier.
   */
  "id": string;
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
      type: "IncidentRuleExecutionStateDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentRuleExecutionStateDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
