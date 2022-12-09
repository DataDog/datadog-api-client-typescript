/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBatchDetailsData } from "./SyntheticsBatchDetailsData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details about a batch response.
 */
export class SyntheticsBatchDetails {
  /**
   * Wrapper object that contains the details of a batch.
   */
  "data"?: SyntheticsBatchDetailsData;

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
      type: "SyntheticsBatchDetailsData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBatchDetails.attributeTypeMap;
  }

  public constructor() {}
}
