/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSdkConfigDynamicOptionSerializedType } from "./RumSdkConfigDynamicOptionSerializedType";
import { RumSdkConfigDynamicOptionStrategy } from "./RumSdkConfigDynamicOptionStrategy";
import { RumSdkConfigSerializedRegex } from "./RumSdkConfigSerializedRegex";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A dynamic configuration option that extracts a value at runtime using a specified strategy.
*/
export class RumSdkConfigDynamicOption {
  /**
   * The element attribute to read. Used when `strategy` is `dom`.
  */
  "attribute"?: string;
  /**
   * A serialized regex used as an extractor in dynamic options.
  */
  "extractor"?: RumSdkConfigSerializedRegex;
  /**
   * The `localStorage` key to read. Required when `strategy` is `localStorage`.
  */
  "key"?: string;
  /**
   * The cookie name to read. Required when `strategy` is `cookie`.
  */
  "name"?: string;
  /**
   * The JavaScript path used to extract the value. Required when `strategy` is `js`.
  */
  "path"?: string;
  /**
   * The type identifier for a dynamic option. Always `dynamic`.
  */
  "rcSerializedType": RumSdkConfigDynamicOptionSerializedType;
  /**
   * The CSS selector to read from the page. Required when `strategy` is `dom`.
  */
  "selector"?: string;
  /**
   * The strategy used to extract the dynamic value.
  */
  "strategy": RumSdkConfigDynamicOptionStrategy;

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
    "attribute": {
      "baseName": "attribute",
      "type": "string",
    },
    "extractor": {
      "baseName": "extractor",
      "type": "RumSdkConfigSerializedRegex",
    },
    "key": {
      "baseName": "key",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "path": {
      "baseName": "path",
      "type": "string",
    },
    "rcSerializedType": {
      "baseName": "rc_serialized_type",
      "type": "RumSdkConfigDynamicOptionSerializedType",
      "required": true,
    },
    "selector": {
      "baseName": "selector",
      "type": "string",
    },
    "strategy": {
      "baseName": "strategy",
      "type": "RumSdkConfigDynamicOptionStrategy",
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




    return RumSdkConfigDynamicOption.attributeTypeMap;

  }

  public constructor() {











  }
}









