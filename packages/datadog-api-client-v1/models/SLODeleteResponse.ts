/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A response list of all service level objective deleted.
 */
export class SLODeleteResponse {
  /**
   * An array containing the ID of the deleted service level objective object.
   */
  "data"?: Array<string>;
  /**
   * An dictionary containing the ID of the SLO as key and a deletion error as value.
   */
  "errors"?: { [key: string]: string };

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<string>",
    },
    errors: {
      baseName: "errors",
      type: "{ [key: string]: string; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLODeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
