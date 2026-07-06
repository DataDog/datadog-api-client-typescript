import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateLinearIssueRequestDataAttributes } from "./CreateLinearIssueRequestDataAttributes";
import { CreateLinearIssueRequestDataRelationships } from "./CreateLinearIssueRequestDataRelationships";
import { LinearIssuesDataType } from "./LinearIssuesDataType";

/**
 * Data of the Linear issue to create.
 */
export class CreateLinearIssueRequestData {
  /**
   * Attributes of the Linear issue to create.
   */
  "attributes"?: CreateLinearIssueRequestDataAttributes;
  /**
   * Relationships of the Linear issue to create.
   */
  "relationships"?: CreateLinearIssueRequestDataRelationships;
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
      type: "CreateLinearIssueRequestDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateLinearIssueRequestDataRelationships",
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
    return CreateLinearIssueRequestData.attributeTypeMap;
  }

  public constructor() {}
}
