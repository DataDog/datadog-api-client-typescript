import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateRuleAttributesResponse } from "./DueDateRuleAttributesResponse";
import { DueDateRuleType } from "./DueDateRuleType";

/**
 * The data object for a due date rule returned by the API.
 */
export class DueDateRuleDataResponse {
  /**
   * Attributes of a due date rule returned by the API.
   */
  "attributes": DueDateRuleAttributesResponse;
  /**
   * The ID of the due date rule.
   */
  "id": string;
  /**
   * The JSON:API type for due date rules.
   */
  "type": DueDateRuleType;
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
      type: "DueDateRuleAttributesResponse",
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
      type: "DueDateRuleType",
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
    return DueDateRuleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
