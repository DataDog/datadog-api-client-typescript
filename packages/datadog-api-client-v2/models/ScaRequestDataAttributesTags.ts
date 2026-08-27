/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaRequestDataAttributesTagsTool } from "./ScaRequestDataAttributesTagsTool";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A map of tags providing additional metadata for the SCA scan.
 */
export class ScaRequestDataAttributesTags {
  /**
   * Tool metadata included in SCA tags.
   */
  "tool"?: ScaRequestDataAttributesTagsTool;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: string };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tool: {
      baseName: "tool",
      type: "ScaRequestDataAttributesTagsTool",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: string; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScaRequestDataAttributesTags.attributeTypeMap;
  }

  public constructor() {}
}
