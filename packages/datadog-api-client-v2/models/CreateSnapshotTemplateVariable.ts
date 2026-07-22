/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A template variable definition for snapshot rendering.
*/
export class CreateSnapshotTemplateVariable {
  /**
   * The template variable name.
  */
  "name": string;
  /**
   * The tag prefix associated with the template variable. For example, a prefix of `host` with a value of `web-server-1` scopes the snapshot to `host:web-server-1`.
  */
  "prefix": string;
  /**
   * The list of scoped values for this template variable.
  */
  "values": Array<string>;

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
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "prefix": {
      "baseName": "prefix",
      "type": "string",
      "required": true,
    },
    "values": {
      "baseName": "values",
      "type": "Array<string>",
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




    return CreateSnapshotTemplateVariable.attributeTypeMap;

  }

  public constructor() {











  }
}









