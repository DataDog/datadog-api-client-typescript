/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBatchResult } from "./SyntheticsBatchResult";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";
import { SyntheticsStatus } from "./SyntheticsStatus";

export class SyntheticsBatchDetailsData {
  "metadata"?: SyntheticsCIBatchMetadata;
  /**
   * List of results for the batch.
   */
  "results"?: Array<SyntheticsBatchResult>;
  "status"?: SyntheticsStatus;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    metadata: {
      baseName: "metadata",
      type: "SyntheticsCIBatchMetadata",
    },
    results: {
      baseName: "results",
      type: "Array<SyntheticsBatchResult>",
    },
    status: {
      baseName: "status",
      type: "SyntheticsStatus",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBatchDetailsData.attributeTypeMap;
  }

  public constructor() {}
}
