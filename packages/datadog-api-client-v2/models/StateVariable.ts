/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StateVariableProperties } from "./StateVariableProperties";
import { StateVariableType } from "./StateVariableType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A variable, which can be set and read by other components in the app.
 */
export class StateVariable {
  /**
   * The ID of the state variable.
   */
  "id": string;
  /**
   * A unique identifier for this state variable. This name is also used to access the variable's value throughout the app.
   */
  "name": string;
  /**
   * The properties of the state variable.
   */
  "properties": StateVariableProperties;
  /**
   * The state variable type.
   */
  "type": StateVariableType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "StateVariableProperties",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StateVariableType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StateVariable.attributeTypeMap;
  }

  public constructor() {}
}
