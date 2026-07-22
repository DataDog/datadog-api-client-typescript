/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceControlSupportedValue } from "./GovernanceControlSupportedValue";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of a configurable parameter on a control or mitigation.
*/
export class GovernanceControlParameterDefinition {
  /**
   * The default value of the parameter. The JSON type depends on the parameter's `type`.
  */
  "defaultValue": any;
  /**
   * A human-readable description of the parameter.
  */
  "description": string;
  /**
   * The human-readable name of the parameter.
  */
  "displayName": string;
  /**
   * Whether the parameter is hidden from the UI.
  */
  "hidden": boolean;
  /**
   * The machine-readable name of the parameter.
  */
  "name": string;
  /**
   * Whether the parameter must be provided.
  */
  "required": boolean;
  /**
   * The supported values for an enumerated parameter.
  */
  "supportedValues": Array<GovernanceControlSupportedValue>;
  /**
   * The type of the parameter, such as `integer`, `string`, `boolean`, `enum`, or `pattern_list`.
  */
  "type": string;

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
    "defaultValue": {
      "baseName": "default_value",
      "type": "any",
      "required": true,
    },
    "description": {
      "baseName": "description",
      "type": "string",
      "required": true,
    },
    "displayName": {
      "baseName": "display_name",
      "type": "string",
      "required": true,
    },
    "hidden": {
      "baseName": "hidden",
      "type": "boolean",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "required": {
      "baseName": "required",
      "type": "boolean",
      "required": true,
    },
    "supportedValues": {
      "baseName": "supported_values",
      "type": "Array<GovernanceControlSupportedValue>",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "string",
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




    return GovernanceControlParameterDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









