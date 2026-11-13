import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditTrafficSummaryV2DTODataAttributes } from "./ExperimentsBanditTrafficSummaryV2DTODataAttributes";
import { ExperimentsBanditTrafficSummaryV2DTODataType } from "./ExperimentsBanditTrafficSummaryV2DTODataType";

/**
 * JSON:API resource containing a bandit's traffic summary.
 */
export class ExperimentsBanditTrafficSummaryV2DTOData {
  /**
   * What the bandit has observed, as of its latest saved refresh.
   */
  "attributes": ExperimentsBanditTrafficSummaryV2DTODataAttributes;
  /**
   * The bandit ID.
   */
  "id": string;
  /**
   * Bandit traffic summary resource type.
   */
  "type": ExperimentsBanditTrafficSummaryV2DTODataType;
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
      type: "ExperimentsBanditTrafficSummaryV2DTODataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsBanditTrafficSummaryV2DTODataType",
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
    return ExperimentsBanditTrafficSummaryV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
