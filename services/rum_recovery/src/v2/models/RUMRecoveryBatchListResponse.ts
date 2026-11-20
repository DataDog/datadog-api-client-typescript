import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryBatchListData } from "./RUMRecoveryBatchListData";
import { RUMRecoveryBatchListMeta } from "./RUMRecoveryBatchListMeta";

/**
 * JSON:API document.
 */
export class RUMRecoveryBatchListResponse {
  /**
   * Batch requests ordered newest first. A filtered page can be empty while meta.next_cursor is present.
   */
  "data": Array<RUMRecoveryBatchListData>;
  /**
   * Batch-list pagination metadata.
   */
  "meta": RUMRecoveryBatchListMeta;
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
      type: "Array<RUMRecoveryBatchListData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMRecoveryBatchListMeta",
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
    return RUMRecoveryBatchListResponse.attributeTypeMap;
  }

  public constructor() {}
}
