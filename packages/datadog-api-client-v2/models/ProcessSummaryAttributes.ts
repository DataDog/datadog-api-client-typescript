/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for a process summary.
*/
export class ProcessSummaryAttributes {
  /**
   * Process command line.
  */
  "cmdline"?: string;
  /**
   * Host running the process.
  */
  "host"?: string;
  /**
   * Process ID.
  */
  "pid"?: number;
  /**
   * Parent process ID.
  */
  "ppid"?: number;
  /**
   * Time the process was started.
  */
  "start"?: string;
  /**
   * List of tags associated with the process.
  */
  "tags"?: Array<string>;
  /**
   * Time the process was seen.
  */
  "timestamp"?: string;
  /**
   * Process owner.
  */
  "user"?: string;

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
    "cmdline": {
      "baseName": "cmdline",
      "type": "string",
    },
    "host": {
      "baseName": "host",
      "type": "string",
    },
    "pid": {
      "baseName": "pid",
      "type": "number",
      "format": "int64",
    },
    "ppid": {
      "baseName": "ppid",
      "type": "number",
      "format": "int64",
    },
    "start": {
      "baseName": "start",
      "type": "string",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "timestamp": {
      "baseName": "timestamp",
      "type": "string",
    },
    "user": {
      "baseName": "user",
      "type": "string",
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




    return ProcessSummaryAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









