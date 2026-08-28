/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the tool that generated the SCA tags.
 */
export class ScaRequestDataAttributesTagsToolGenerator {
  /**
   * The name of the tag generator.
   */
  "name"?: string;
  /**
   * The version of the tag generator.
   */
  "version"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScaRequestDataAttributesTagsToolGenerator.attributeTypeMap;
  }

  public constructor() {}
}
