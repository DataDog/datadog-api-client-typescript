import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SloStatusDataAttributes } from "./SloStatusDataAttributes";
import { SloStatusType } from "./SloStatusType";

/**
 * The data portion of the SLO status response.
 */
export class SloStatusData {
  /**
   * The attributes of the SLO status.
   */
  "attributes": SloStatusDataAttributes;
  /**
   * The ID of the SLO.
   */
  "id": string;
  /**
   * The type of the SLO status resource.
   */
  "type": SloStatusType;
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
      type: "SloStatusDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SloStatusType",
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
    return SloStatusData.attributeTypeMap;
  }

  public constructor() {}
}
