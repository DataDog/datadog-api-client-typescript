/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsServiceRemapperType } from "./LogsServiceRemapperType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Use this processor if you want to assign one or more attributes as the official service.
 * 
 * **Note:** If multiple service remapper processors can be applied to a given log,
 * only the first one (according to the pipeline order) is taken into account.
*/
export class LogsServiceRemapper {
  /**
   * Whether or not the processor is enabled.
  */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
  */
  "name"?: string;
  /**
   * Array of source attributes.
  */
  "sources": Array<string>;
  /**
   * Type of logs service remapper.
  */
  "type": LogsServiceRemapperType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "isEnabled": {
      "baseName": "is_enabled",
      "type": "boolean",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "sources": {
      "baseName": "sources",
      "type": "Array<string>",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LogsServiceRemapperType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return LogsServiceRemapper.attributeTypeMap;

  }

  public constructor() {











  }
}









