/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The dependencies of a component of the SBOM.
*/
export class SBOMComponentDependency {
  /**
   * The components that are dependencies of the ref component.
  */
  "dependsOn"?: Array<string>;
  /**
   * The identifier for the related component.
  */
  "ref"?: string;

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
    "dependsOn": {
      "baseName": "dependsOn",
      "type": "Array<string>",
    },
    "ref": {
      "baseName": "ref",
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




    return SBOMComponentDependency.attributeTypeMap;

  }

  public constructor() {











  }
}









