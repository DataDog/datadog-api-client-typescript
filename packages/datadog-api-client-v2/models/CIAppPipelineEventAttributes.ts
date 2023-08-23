/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelineLevel } from "./CIAppPipelineLevel";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON object containing all event attributes and their associated values.
 */
export class CIAppPipelineEventAttributes {
  /**
   * JSON object of attributes from CI Visibility pipeline events.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Pipeline execution level.
   */
  "ciLevel"?: CIAppPipelineLevel;
  /**
   * Array of tags associated with your event.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "{ [key: string]: any; }",
    },
    ciLevel: {
      baseName: "ci_level",
      type: "CIAppPipelineLevel",
    },
    tags: {
      type: "Array<string>",
    },
  };
}
