import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsVariantResultsV2DTODataAttributes } from "./ExperimentsVariantResultsV2DTODataAttributes";
import { ExperimentsVariantResultsV2DTODataType } from "./ExperimentsVariantResultsV2DTODataType";

/**
 * JSON:API resource containing the variant result identity and fields.
 */
export class ExperimentsVariantResultsV2DTOData {
  /**
   * Details of the variant result.
   */
  "attributes"?: ExperimentsVariantResultsV2DTODataAttributes;
  /**
   * ID of the variant result.
   */
  "id": string;
  /**
   * Experiment variant results resource type.
   */
  "type": ExperimentsVariantResultsV2DTODataType;
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
      type: "ExperimentsVariantResultsV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExperimentsVariantResultsV2DTODataType",
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
    return ExperimentsVariantResultsV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
