/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBatchResult } from "./SyntheticsBatchResult";
import { SyntheticsBatchStatus } from "./SyntheticsBatchStatus";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";

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
   * Determines whether the batch has passed, failed, or is in progress.
   */
  "status"?: SyntheticsBatchStatus;

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
      type: "SyntheticsBatchStatus",
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
    return SyntheticsBatchDetailsData.attributeTypeMap;
  }

  public constructor() {}
}
