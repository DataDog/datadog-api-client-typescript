import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryBatchListData } from "./RumRecoveryBatchListData";
import { RumRecoveryBatchListMeta } from "./RumRecoveryBatchListMeta";

/**
 * JSON:API document.
 */
export class RumRecoveryBatchListResponse {
  /**
   * Batch requests ordered newest first. A filtered page can be empty while meta.next_cursor is present.
   */
  "data": Array<RumRecoveryBatchListData>;
  /**
   * Batch-list pagination metadata.
   */
  "meta": RumRecoveryBatchListMeta;
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
    data: {
      baseName: "data",
      type: "Array<RumRecoveryBatchListData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RumRecoveryBatchListMeta",
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
    return RumRecoveryBatchListResponse.attributeTypeMap;
  }

  public constructor() {}
}
