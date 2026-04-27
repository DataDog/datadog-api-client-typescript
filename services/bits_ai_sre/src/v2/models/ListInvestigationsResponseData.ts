import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InvestigationType } from "./InvestigationType";
import { ListInvestigationsResponseDataAttributes } from "./ListInvestigationsResponseDataAttributes";

/**
 * Data for an investigation list item.
 */
export class ListInvestigationsResponseData {
  /**
   * Attributes of an investigation list item.
   */
  "attributes": ListInvestigationsResponseDataAttributes;
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
      type: "ListInvestigationsResponseDataAttributes",
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
    return ListInvestigationsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
