import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceResourceLimitAttributes } from "./GovernanceResourceLimitAttributes";
import { GovernanceResourceLimitResourceType } from "./GovernanceResourceLimitResourceType";

/**
 * A governance resource limit resource.
 */
export class GovernanceResourceLimitData {
  /**
   * The attributes of a governance resource limit.
   */
  "attributes": GovernanceResourceLimitAttributes;
  /**
   * The unique identifier of the resource limit.
   */
  "id": string;
  /**
   * Resource limit resource type.
   */
  "type": GovernanceResourceLimitResourceType;
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
      type: "GovernanceResourceLimitAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GovernanceResourceLimitResourceType",
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
    return GovernanceResourceLimitData.attributeTypeMap;
  }

  public constructor() {}
}
