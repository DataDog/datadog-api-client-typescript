/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogQueryDefinition } from "./LogQueryDefinition";
import { RequestStyle } from "./RequestStyle";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455770976 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "syntheticsBatches": LogQueryDefinition;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
    syntheticsBatches: {
      baseName: "synthetics_batches",
      type: "LogQueryDefinition",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionBackendRequest20270101OneOf4455770976.attributeTypeMap;
  }

  public constructor() {}
}
