/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BulkMuteFindingsResponseData } from "./BulkMuteFindingsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema.
 */
export class BulkMuteFindingsResponse {
  /**
   * Data object containing the ID of the request that was updated.
   */
  "data": BulkMuteFindingsResponseData;

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
      type: "BulkMuteFindingsResponseData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkMuteFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
