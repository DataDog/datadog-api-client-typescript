/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test configuration for Synthetics
 */
export class SyntheticsTriggerTest {
  /**
   * Metadata for the Synthetic tests run.
   */
  "metadata"?: SyntheticsCIBatchMetadata;
  /**
   * The public ID of the Synthetic test to trigger.
   */
  "publicId": string;

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
    publicId: {
      baseName: "public_id",
      type: "string",
      required: true,
    },
  };
}
