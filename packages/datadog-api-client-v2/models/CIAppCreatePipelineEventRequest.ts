/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCreatePipelineEventRequestData } from "./CIAppCreatePipelineEventRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object.
 */
export class CIAppCreatePipelineEventRequest {
  /**
   * Data of the pipeline event to create.
   */
  "data"?: CIAppCreatePipelineEventRequestData;

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
      type: "CIAppCreatePipelineEventRequestData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppCreatePipelineEventRequest.attributeTypeMap;
  }

  public constructor() {}
}
