/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Span } from "./Span";
import { SpansListResponseLinks } from "./SpansListResponseLinks";
import { SpansListResponseMetadata } from "./SpansListResponseMetadata";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response object with all spans matching the request and pagination information.
*/
export class SpansListResponse {
  /**
   * Array of spans matching the request.
  */
  "data"?: Array<Span>;
  /**
   * Links attributes.
  */
  "links"?: SpansListResponseLinks;
  /**
   * The metadata associated with a request.
  */
  "meta"?: SpansListResponseMetadata;

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
      "type": "Array<Span>",
    },
    "links": {
      "baseName": "links",
      "type": "SpansListResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "SpansListResponseMetadata",
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




    return SpansListResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









