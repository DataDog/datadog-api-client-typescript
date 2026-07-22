import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceInsightAttributes } from "./GovernanceInsightAttributes";
import { GovernanceInsightResourceType } from "./GovernanceInsightResourceType";

/**
 * A governance insight resource.
 */
export class GovernanceInsightData {
  /**
   * The attributes of a governance insight.
   */
  "attributes": GovernanceInsightAttributes;
  /**
   * The unique identifier of the insight.
   */
  "id": string;
  /**
   * JSON:API resource type for a governance insight.
   */
  "type": GovernanceInsightResourceType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "GovernanceInsightAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GovernanceInsightResourceType",
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
    return GovernanceInsightData.attributeTypeMap;
  }

  public constructor() {}
}
