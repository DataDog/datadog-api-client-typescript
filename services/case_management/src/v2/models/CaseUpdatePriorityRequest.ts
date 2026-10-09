import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseUpdatePriority } from "./CaseUpdatePriority";

/**
 * Work item update priority request
 */
export class CaseUpdatePriorityRequest {
  /**
   * Work item priority status
   */
  "data": CaseUpdatePriority;
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
      type: "CaseUpdatePriority",
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
    return CaseUpdatePriorityRequest.attributeTypeMap;
  }

  public constructor() {}
}
