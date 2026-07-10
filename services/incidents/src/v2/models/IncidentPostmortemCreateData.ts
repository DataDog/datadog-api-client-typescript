import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPostmortemCreateAttributes } from "./IncidentPostmortemCreateAttributes";
import { IncidentPostmortemType } from "./IncidentPostmortemType";

/**
 * The postmortem resource for a creation request.
 */
export class IncidentPostmortemCreateData {
  /**
   * The postmortem's attributes for a creation request.
   */
  "attributes": IncidentPostmortemCreateAttributes;
  /**
   * Incident postmortem resource type.
   */
  "type": IncidentPostmortemType;
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
      type: "IncidentPostmortemCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentPostmortemType",
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
    return IncidentPostmortemCreateData.attributeTypeMap;
  }

  public constructor() {}
}
