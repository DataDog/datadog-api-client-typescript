import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesRequestDataAttributes } from "./TeamRoutingRulesRequestDataAttributes";
import { TeamRoutingRulesRequestDataType } from "./TeamRoutingRulesRequestDataType";

/**
 * Holds the data necessary to create or update team routing rules, including attributes, ID, and resource type.
 */
export class TeamRoutingRulesRequestData {
  /**
   * Represents the attributes of a request to update or create team routing rules.
   */
  "attributes"?: TeamRoutingRulesRequestDataAttributes;
  /**
   * Specifies the unique identifier for this set of team routing rules.
   */
  "id"?: string;
  /**
   * Team routing rules resource type.
   */
  "type": TeamRoutingRulesRequestDataType;
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
      type: "TeamRoutingRulesRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TeamRoutingRulesRequestDataType",
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
    return TeamRoutingRulesRequestData.attributeTypeMap;
  }

  public constructor() {}
}
