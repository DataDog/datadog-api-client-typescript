import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachLinearIssueRequestDataAttributes } from "./AttachLinearIssueRequestDataAttributes";
import { AttachLinearIssueRequestDataRelationships } from "./AttachLinearIssueRequestDataRelationships";
import { LinearIssuesDataType } from "./LinearIssuesDataType";

/**
 * Data of the Linear issue to attach security findings to.
 */
export class AttachLinearIssueRequestData {
  /**
   * Attributes of the Linear issue to attach security findings to.
   */
  "attributes": AttachLinearIssueRequestDataAttributes;
  /**
   * Relationships of the Linear issue to attach security findings to.
   */
  "relationships": AttachLinearIssueRequestDataRelationships;
  /**
   * Linear issues resource type.
   */
  "type": LinearIssuesDataType;
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
      type: "AttachLinearIssueRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AttachLinearIssueRequestDataRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LinearIssuesDataType",
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
    return AttachLinearIssueRequestData.attributeTypeMap;
  }

  public constructor() {}
}
