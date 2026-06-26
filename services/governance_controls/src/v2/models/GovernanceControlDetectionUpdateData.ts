import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlDetectionResourceType } from "./GovernanceControlDetectionResourceType";
import { GovernanceControlDetectionUpdateAttributes } from "./GovernanceControlDetectionUpdateAttributes";

/**
 * The data of a governance control detection update request.
 */
export class GovernanceControlDetectionUpdateData {
  /**
   * The attributes of a governance control detection that can be updated. Only the attributes present in the request are modified.
   */
  "attributes"?: GovernanceControlDetectionUpdateAttributes;
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
      type: "GovernanceControlDetectionUpdateAttributes",
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
    return GovernanceControlDetectionUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
