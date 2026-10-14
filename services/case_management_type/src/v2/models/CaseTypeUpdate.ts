import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseTypeResourceAttributes } from "./CaseTypeResourceAttributes";
import { CaseTypeResourceType } from "./CaseTypeResourceType";

/**
 * Data object for updating a work item type.
 */
export class CaseTypeUpdate {
  /**
   * Attributes of a work item type, which define a classification category for work items. Organizations use work item types to model different workflows (for example, Security Incident, Bug Report, Change Request).
   */
  "attributes"?: CaseTypeResourceAttributes;
  /**
   * JSON:API resource type for work item types.
   */
  "type": CaseTypeResourceType;
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
      type: "CaseTypeResourceAttributes",
    },
    type: {
      baseName: "type",
      type: "CaseTypeResourceType",
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
    return CaseTypeUpdate.attributeTypeMap;
  }

  public constructor() {}
}
