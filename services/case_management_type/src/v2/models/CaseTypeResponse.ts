import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseTypeResource } from "./CaseTypeResource";

/**
 * Response containing a single work item type.
 */
export class CaseTypeResponse {
  /**
   * A work item type that defines a classification category for work items. Each work item type can have its own custom attributes, statuses, and automation rules.
   */
  "data"?: CaseTypeResource;
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
    data: {
      baseName: "data",
      type: "CaseTypeResource",
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
    return CaseTypeResponse.attributeTypeMap;
  }

  public constructor() {}
}
