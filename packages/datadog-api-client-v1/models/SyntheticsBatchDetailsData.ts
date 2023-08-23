/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBatchResult } from "./SyntheticsBatchResult";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";
import { SyntheticsStatus } from "./SyntheticsStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Wrapper object that contains the details of a batch.
 */
export class SyntheticsBatchDetailsData {
  /**
   * Metadata for the Synthetic tests run.
   */
  "metadata"?: SyntheticsCIBatchMetadata;
  /**
   * List of results for the batch.
   */
  "results"?: Array<SyntheticsBatchResult>;
  /**
   * Determines whether or not the batch has passed, failed, or is in progress.
   */
  "status"?: SyntheticsStatus;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
}
