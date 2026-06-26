import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceLimitAttributes } from "./GovernanceLimitAttributes";
import { GovernanceLimitResourceType } from "./GovernanceLimitResourceType";

/**
 * A governance limit resource.
 */
export class GovernanceLimitData {
  /**
   * The attributes of a governance limit.
   */
  "attributes": GovernanceLimitAttributes;
  /**
   * The unique identifier of the limit.
   */
  "id": string;
  /**
   * Limit resource type.
   */
  "type": GovernanceLimitResourceType;
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
      type: "GovernanceLimitAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GovernanceLimitResourceType",
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
    return GovernanceLimitData.attributeTypeMap;
  }

  public constructor() {}
}
