import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlDetectionResourceType } from "./GovernanceControlDetectionResourceType";
import { GovernanceMitigationRequestAttributes } from "./GovernanceMitigationRequestAttributes";

/**
 * The data of a governance mitigation request.
 */
export class GovernanceMitigationRequestData {
  /**
   * The attributes of a governance mitigation request.
   */
  "attributes"?: GovernanceMitigationRequestAttributes;
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
      type: "GovernanceMitigationRequestAttributes",
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
    return GovernanceMitigationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
