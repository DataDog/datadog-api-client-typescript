import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationGroupAttributes } from "./RemediationGroupAttributes";
import { RemediationGroupRelationships } from "./RemediationGroupRelationships";
import { RemediationGroupType } from "./RemediationGroupType";

/**
 * A remediation group.
 */
export class RemediationGroupData {
  /**
   * Attributes of a remediation group. Each group includes one kind object, `package_update` or `image_update`,
   * depending on its grouping definition.
   */
  "attributes": RemediationGroupAttributes;
  /**
   * Remediation key of the group: the grouping definition ID, a colon, and the group's dimensions
   * encoded in base64url. It identifies the group across searches.
   */
  "id": string;
  /**
   * Relationships of a remediation group.
   */
  "relationships": RemediationGroupRelationships;
  /**
   * Remediation groups resource type.
   */
  "type": RemediationGroupType;
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
      type: "RemediationGroupAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "RemediationGroupRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RemediationGroupType",
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
    return RemediationGroupData.attributeTypeMap;
  }

  public constructor() {}
}
