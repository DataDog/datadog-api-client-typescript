import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsTrafficSummaryV2DTODataAttributes } from "./ExperimentsTrafficSummaryV2DTODataAttributes";
import { ExperimentsTrafficSummaryV2DTODataType } from "./ExperimentsTrafficSummaryV2DTODataType";

/**
 * JSON:API resource containing the experiment traffic summary identity and fields.
 */
export class ExperimentsTrafficSummaryV2DTOData {
  /**
   * Details of the experiment traffic summary.
   */
  "attributes"?: ExperimentsTrafficSummaryV2DTODataAttributes;
  /**
   * Identifier of this traffic summary.
   */
  "id": string;
  /**
   * Traffic summary resource type.
   */
  "type": ExperimentsTrafficSummaryV2DTODataType;
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
      type: "ExperimentsTrafficSummaryV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExperimentsTrafficSummaryV2DTODataType",
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
    return ExperimentsTrafficSummaryV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
