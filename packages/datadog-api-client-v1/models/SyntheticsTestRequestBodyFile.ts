/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object describing a file to be used as part of the request in the test.
*/
export class SyntheticsTestRequestBodyFile {
  /**
   * Bucket key of the file.
  */
  "bucketKey"?: string;
  /**
   * Content of the file.
  */
  "content"?: string;
  /**
   * Name of the file.
  */
  "name"?: string;
  /**
   * Original name of the file.
  */
  "originalFileName"?: string;
  /**
   * Size of the file.
  */
  "size"?: number;
  /**
   * Type of the file.
  */
  "type"?: string;

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
    "bucketKey": {
      "baseName": "bucketKey",
      "type": "string",
    },
    "content": {
      "baseName": "content",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "originalFileName": {
      "baseName": "originalFileName",
      "type": "string",
    },
    "size": {
      "baseName": "size",
      "type": "number",
      "format": "int64",
    },
    "type": {
      "baseName": "type",
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




    return SyntheticsTestRequestBodyFile.attributeTypeMap;

  }

  public constructor() {











  }
}









