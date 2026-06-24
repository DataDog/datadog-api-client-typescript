import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlResourceType } from "./GovernanceControlResourceType";
import { GovernanceControlUpdateAttributes } from "./GovernanceControlUpdateAttributes";

/**
 * The data of a governance control update request.
 */
export class GovernanceControlUpdateData {
  /**
   * The attributes of a governance control that can be updated. Only the attributes present in the request are modified.
   */
  "attributes"?: GovernanceControlUpdateAttributes;
  /**
   * The unique identifier of the control.
   */
  "id"?: string;
  /**
   * JSON:API resource type for a governance control.
   */
  "type": GovernanceControlResourceType;
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
      type: "GovernanceControlUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GovernanceControlResourceType",
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
    return GovernanceControlUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
