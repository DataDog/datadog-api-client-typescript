/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMRecoveryBatchListData } from "./RUMRecoveryBatchListData";
import { RUMRecoveryBatchListMeta } from "./RUMRecoveryBatchListMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
