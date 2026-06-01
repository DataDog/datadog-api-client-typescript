import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPageTargetType } from "./IncidentPageTargetType";

/**
 * The target recipient for a page.
 */
export class IncidentPageTarget {
  /**
   * The identifier of the target (handle, UUID, or user UUID).
   */
  "identifier": string;
  /**
   * The type of target for a page request.
   */
  "type": IncidentPageTargetType;
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
    identifier: {
      baseName: "identifier",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentPageTargetType",
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
    return IncidentPageTarget.attributeTypeMap;
  }

  public constructor() {}
}
