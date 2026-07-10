import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemStatus } from "./PostmortemStatus";

/**
 * The postmortem's attributes for an update request.
 */
export class IncidentPostmortemUpdateAttributes {
  /**
   * The status of the postmortem.
   */
  "status"?: PostmortemStatus;
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
    status: {
      baseName: "status",
      type: "PostmortemStatus",
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
    return IncidentPostmortemUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
