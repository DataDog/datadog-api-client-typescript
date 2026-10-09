import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdateResolvedReasonAttributes } from "./CaseUpdateResolvedReasonAttributes";

/**
 * Data object for updating a work item's resolved reason.
 */
export class CaseUpdateResolvedReason {
  /**
   * Attributes for setting the resolution reason on a security work item.
   */
  "attributes": CaseUpdateResolvedReasonAttributes;
  /**
   * JSON:API resource type for work items.
   */
  "type": CaseResourceType;
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
      type: "CaseUpdateResolvedReasonAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
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
    return CaseUpdateResolvedReason.attributeTypeMap;
  }

  public constructor() {}
}
