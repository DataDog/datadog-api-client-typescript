/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCreatePipelineEventRequestAttributes } from "./CIAppCreatePipelineEventRequestAttributes";
import { CIAppCreatePipelineEventRequestDataType } from "./CIAppCreatePipelineEventRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the pipeline event to create.
 */
export class CIAppCreatePipelineEventRequestData {
  /**
   * Attributes of the pipeline event to create.
   */
  "attributes"?: CIAppCreatePipelineEventRequestAttributes;
  /**
   * Type of the event.
   */
  "type"?: CIAppCreatePipelineEventRequestDataType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "CIAppCreatePipelineEventRequestAttributes",
    },
    type: {
      type: "CIAppCreatePipelineEventRequestDataType",
    },
  };
}
