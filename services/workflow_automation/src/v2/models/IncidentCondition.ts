import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTagValue } from "./IncidentTagValue";

/**
 * Conditions that determine which incidents trigger the workflow.
 */
export class IncidentCondition {
  /**
   * Incident tags and values used to filter matching incidents.
   */
  "tagValues"?: Array<IncidentTagValue>;
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
    tagValues: {
      baseName: "tagValues",
      type: "Array<IncidentTagValue>",
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
    return IncidentCondition.attributeTypeMap;
  }

  public constructor() {}
}
