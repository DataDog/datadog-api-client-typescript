/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";

import { AttributeTypeMap } from "../util";

/**
 * Test configuration for Synthetics
 */
export class SyntheticsTriggerTest {
  /**
   * Metadata for the Synthetics tests run.
   */
  "metadata"?: SyntheticsCIBatchMetadata;
  /**
   * The public ID of the Synthetics test to trigger.
   */
  "publicId": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTriggerTest.attributeTypeMap;
  }

  public constructor() {}
}
