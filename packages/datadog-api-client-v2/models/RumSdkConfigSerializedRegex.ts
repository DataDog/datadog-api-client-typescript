/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSdkConfigSerializedRegexType } from "./RumSdkConfigSerializedRegexType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A serialized regex used as an extractor in dynamic options.
*/
export class RumSdkConfigSerializedRegex {
  /**
   * The type identifier for a serialized regex. Always `regex`.
  */
  "rcSerializedType": RumSdkConfigSerializedRegexType;
  /**
   * The regex pattern used for extraction.
  */
  "value": string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "rcSerializedType": {
      "baseName": "rc_serialized_type",
      "type": "RumSdkConfigSerializedRegexType",
      "required": true,
    },
    "value": {
      "baseName": "value",
      "type": "string",
      "required": true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return RumSdkConfigSerializedRegex.attributeTypeMap;

  }

  public constructor() {











  }
}









