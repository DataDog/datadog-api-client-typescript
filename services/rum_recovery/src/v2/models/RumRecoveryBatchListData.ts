import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryBatchListAttributes } from "./RumRecoveryBatchListAttributes";
import { RumRecoveryBatchListDataType } from "./RumRecoveryBatchListDataType";

/**
 * JSON:API resource.
 */
export class RumRecoveryBatchListData {
  /**
   * Batch recovery progress. Status updates can appear here before they appear in request details.
   */
  "attributes": RumRecoveryBatchListAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RumRecoveryBatchListDataType;
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
      type: "RumRecoveryBatchListAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumRecoveryBatchListDataType",
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
    return RumRecoveryBatchListData.attributeTypeMap;
  }

  public constructor() {}
}
