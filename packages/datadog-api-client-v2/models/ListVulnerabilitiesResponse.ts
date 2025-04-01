/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Links } from "./Links";
import { Metadata } from "./Metadata";
import { Vulnerability } from "./Vulnerability";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The expected response schema when listing vulnerabilities.
*/
export class ListVulnerabilitiesResponse {
  /**
   * List of vulnerabilities.
  */
  "data": Array<Vulnerability>;
  /**
   * The JSON:API links related to pagination.
  */
  "links"?: Links;
  /**
   * The metadata related to this request.
  */
  "meta"?: Metadata;

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
    "data": {
      "baseName": "data",
      "type": "Array<Vulnerability>",
      "required": true,
    },
    "links": {
      "baseName": "links",
      "type": "Links",
    },
    "meta": {
      "baseName": "meta",
      "type": "Metadata",
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




    return ListVulnerabilitiesResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









