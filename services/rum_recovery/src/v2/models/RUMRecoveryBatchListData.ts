import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryBatchListAttributes } from "./RUMRecoveryBatchListAttributes";
import { RUMRecoveryBatchListDataType } from "./RUMRecoveryBatchListDataType";

/**
 * JSON:API resource.
 */
export class RUMRecoveryBatchListData {
  /**
   * Batch recovery progress. Status updates can appear here before they appear in request details.
   */
  "attributes": RUMRecoveryBatchListAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RUMRecoveryBatchListDataType;
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
      type: "RUMRecoveryBatchListAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMRecoveryBatchListDataType",
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
    return RUMRecoveryBatchListData.attributeTypeMap;
  }

  public constructor() {}
}
