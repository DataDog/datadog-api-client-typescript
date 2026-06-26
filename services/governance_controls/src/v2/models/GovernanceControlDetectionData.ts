import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlDetectionAttributes } from "./GovernanceControlDetectionAttributes";
import { GovernanceControlDetectionResourceType } from "./GovernanceControlDetectionResourceType";

/**
 * A governance control detection resource.
 */
export class GovernanceControlDetectionData {
  /**
   * The attributes of a governance control detection.
   */
  "attributes": GovernanceControlDetectionAttributes;
  /**
   * The unique identifier of the detection.
   */
  "id": string;
  /**
   * Governance control detection resource type.
   */
  "type": GovernanceControlDetectionResourceType;
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
      type: "GovernanceControlDetectionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GovernanceControlDetectionResourceType",
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
    return GovernanceControlDetectionData.attributeTypeMap;
  }

  public constructor() {}
}
