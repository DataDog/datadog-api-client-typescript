import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestBranchCreateAttributes } from "./ChangeRequestBranchCreateAttributes";
import { ChangeRequestBranchResourceType } from "./ChangeRequestBranchResourceType";

/**
 * Data object to create a change request branch.
 */
export class ChangeRequestBranchCreateData {
  /**
   * Attributes for creating a change request branch.
   */
  "attributes": ChangeRequestBranchCreateAttributes;
  /**
   * Change request branch resource type.
   */
  "type": ChangeRequestBranchResourceType;
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
      type: "ChangeRequestBranchCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeRequestBranchResourceType",
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
    return ChangeRequestBranchCreateData.attributeTypeMap;
  }

  public constructor() {}
}
