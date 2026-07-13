import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetInvestigationResponseDataAttributes } from "./GetInvestigationResponseDataAttributes";
import { InvestigationType } from "./InvestigationType";

/**
 * Data for the get investigation response.
 */
export class GetInvestigationResponseData {
  /**
   * Attributes of the investigation.
   */
  "attributes": GetInvestigationResponseDataAttributes;
  /**
   * The unique identifier of the investigation.
   */
  "id": string;
  /**
   * The resource type for investigations.
   */
  "type": InvestigationType;
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
      type: "GetInvestigationResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "InvestigationType",
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
    return GetInvestigationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
