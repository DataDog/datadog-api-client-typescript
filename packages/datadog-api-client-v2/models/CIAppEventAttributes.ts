/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppTestLevel } from "./CIAppTestLevel";
import { TagsEventAttributeItem } from "./TagsEventAttributeItem";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * JSON object containing all event attributes and their associated values.
*/
export class CIAppEventAttributes {
  /**
   * JSON object of attributes from CI Visibility test events.
  */
  "attributes"?: { [key: string]: any; };
  /**
   * Array of tags associated with your event.
  */
  "tags"?: Array<string>;
  /**
   * Test run level.
  */
  "testLevel"?: CIAppTestLevel;

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
    "attributes": {
      "baseName": "attributes",
      "type": "{ [key: string]: any; }",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "testLevel": {
      "baseName": "test_level",
      "type": "CIAppTestLevel",
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




    return CIAppEventAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









