/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArrayProcessorOperationAppendType } from "./LogsArrayProcessorOperationAppendType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Operation that appends a value to a target array attribute.
*/
export class LogsArrayProcessorOperationAppend {
  /**
   * Remove or preserve the remapped source element.
  */
  "preserveSource"?: boolean;
  /**
   * Attribute path containing the value to append.
  */
  "source": string;
  /**
   * Attribute path of the array to append to.
  */
  "target": string;
  /**
   * Operation type.
  */
  "type": LogsArrayProcessorOperationAppendType;

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
    "preserveSource": {
      "baseName": "preserve_source",
      "type": "boolean",
    },
    "source": {
      "baseName": "source",
      "type": "string",
      "required": true,
    },
    "target": {
      "baseName": "target",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LogsArrayProcessorOperationAppendType",
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




    return LogsArrayProcessorOperationAppend.attributeTypeMap;

  }

  public constructor() {











  }
}









