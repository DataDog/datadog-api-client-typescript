/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the ordered list of pipeline IDs.
 */
export class LogsPipelinesOrder {
  /**
   * Ordered Array of `<PIPELINE_ID>` strings, the order of pipeline IDs in the array
   * define the overall Pipelines order for Datadog.
   */
  "pipelineIds": Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pipelineIds: {
      baseName: "pipeline_ids",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsPipelinesOrder.attributeTypeMap;
  }

  public constructor() {}
}
