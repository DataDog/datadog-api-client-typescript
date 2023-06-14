/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * If the pipeline is triggered as child of another pipeline, this should contain the details of the parent pipeline.
 */
export class CIAppPipelineEventParentPipeline {
  /**
   * UUID of a pipeline.
   */
  "id": string;
  /**
   * The URL to look at the pipeline in the CI provider UI.
   */
  "url"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppPipelineEventParentPipeline.attributeTypeMap;
  }

  public constructor() {}
}
