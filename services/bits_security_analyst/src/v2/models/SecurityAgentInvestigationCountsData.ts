import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationCountsAttributes } from "./SecurityAgentInvestigationCountsAttributes";
import { SecurityAgentInvestigationCountsType } from "./SecurityAgentInvestigationCountsType";

/**
 * Counts of completed investigations.
 */
export class SecurityAgentInvestigationCountsData {
  /**
   * The counts of each value of the field.
   */
  "attributes": SecurityAgentInvestigationCountsAttributes;
  /**
   * The counted field.
   */
  "id": string;
  /**
   * Type of the investigation counts resource.
   */
  "type": SecurityAgentInvestigationCountsType;
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
      type: "SecurityAgentInvestigationCountsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityAgentInvestigationCountsType",
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
    return SecurityAgentInvestigationCountsData.attributeTypeMap;
  }

  public constructor() {}
}
